const express = require("express");
const router = express.Router();

const { verifyToken } = require("../../utils/verifyToken");
const { userIsSubscribed } = require("../../utils/course")

const { validateToken } = require("../../middleware/validateToken");

const Course = require("../../models/Course");
const Exam = require("../../models/Exam")

const { ObjectId } = require('mongodb');

// @route GET api/courses/
// @desc Retrieve all courses
// @access Public
router.get("/", validateToken, async (req, res) => {
  try {
    let query = Course.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.size) || 4;
    const skip = (page - 1) * pageSize;
    const total = await Course.countDocuments();

    const pages = Math.ceil(total / pageSize);

    query = query.skip(skip).limit(pageSize);

    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }

    const result = await query;

    res.status(200).json({
      status: "success",
      count: result.length,
      page,
      pages,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
});

// @route GET api/courses/exams
// @desc Retrieve all exams
// @access Public
router.get("/exams", validateToken, (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  Course.find({ subscribers: ObjectId(userID) })
    .then((courses) => {
      const examPromises = []
      courses.forEach(course => {
        examPromises.push(Exam.find({courseId: course._id}))
      })
      return Promise.all(examPromises);
    })
    .then(exams => {
      const examList = [].concat.apply([], exams);
      const modifiedExamList = examList.map(exam => {
        return {
          examName: exam._doc.examName,
          _id: exam._doc._id,
          description: exam._doc.description,
          instructor: exam._doc.instructor,
          sections: exam._doc.sections,
          duration: exam._doc.duration,
          due: exam._doc.due,
          courseId: exam._doc.courseId
        }
      })
      return res.json(modifiedExamList)
    })
    .catch((err) =>
      res.status(404).json({ nocoursefound: "something went wrong fetching exams" })
    );
});

// @route GET api/course/:id
// @description Get single course by id
// @access Public
router.get("/course/:id", validateToken, (req, res) => {
  Course.findById(req.params.id)
    .then((course) => res.json(course))
    .catch((err) =>
      res.status(404).json({ nocoursefound: "failed to find single course" })
    );
});

// @route PUT api/course/:course_id/
// @description add new user to course
// @access Public
router.put("/:course_id", validateToken, (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  if (typeof userID !== "string") {
    return res.status(401).json({msg: "jwt token needs an 'id' field"});
  }
  Course.findById(req.params.course_id)
    .then((course) => {
      let alreadyRegistered = false;
      course.subscribers.forEach((user) => {
        if (user == userID) {
          alreadyRegistered = true;
        }
      });
      if (!alreadyRegistered) {
        course.subscribers.push(userID);
      }
      course.save();
      if (alreadyRegistered) {
        res.status(500).json({ msg: "Already registered for course" });
      } else {
        res.json({ msg: "Successfully registered for course" })
      }
    })
    .catch((err) => {
      console.log(err)
    });
});

// @route GET api/courses/user
// @description Get all courses a user is subscribed to
// @access Public
router.get("/user", validateToken, (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  if (typeof userID !== "string") {
    return res.status(401).json("jwt token needs an 'id' field");
  }

  Course.aggregate([{
    $lookup: {
      from: "exams",
      localField: "_id",
      foreignField: "courseId",
      as: "activeExams"
    }
  }]).exec(function(err, courses) {
    courses = courses.filter(course => userIsSubscribed(userID, course.subscribers))
    return res.json(courses)
  });
});

// @route POST api/courses
// @description add/save course
// @access Public
router.post("/", validateToken, (req, res) => {
  Course.create(req.body)
    .then((course) => res.json({ msg: "course added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this course" })
    );
});

module.exports = router;
