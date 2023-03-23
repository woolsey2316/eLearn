const express = require("express");
const router = express.Router();
const { User } = require("../../models/User");
const ExamResult = require("../../models/ExamResult");

const { verifyToken } = require("../../utils/verifyToken");

// @route PUT api/user/:user_id/profile
// @desc Retrieve user details
// @access Public
router.put("/:user_id/profile", (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  if (typeof userID !== "string") {
    return res.status(401).json("jwt token needs an 'id' field");
  }
  const filter = { email: req.body.email };
  User.findOneAndUpdate(filter, {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    gender: req.body.gender,
    area: req.body.area,
    state: req.body.state,
    school: req.body.school,
    address: req.body.address,
    className: req.body.className,
    password2: req.body.password2,
    mobile: req.body.mobile,
    pincode: req.body.pincode,
  }).then((user) => res.status(200).json(user));
});

// @route GET api/user/:user_id/profile
// @desc Retrieve user details
// @access Public
router.get("/:user_id/profile", (req, res) => {
  const userId = req.params.user_id;
  User.findById(userId).then((user) => {
    if (!user) {
      return res.status(404).json({ userNotFound: "User not found!" });
    }
    return res.status(200).json(user);
  });
});

// @route GET /users/:id/courses
// @desc Retrieve user courses
// @access Public
router.get("/:user_id/courses", (req, res) => {
  User.findById(req.params.user_id, "courses").then((course) => {
    if (!course) {
      return res.status(404).json({ idnotfound: "course id not found" });
    }

    return res.status(200).json({ courses: course });
  });
});

// @route GET /users/:id/courses/:courseId/exams
// @desc Retrieve user courses
// @access Public
router.get("/:user_id/courses/:course_id/exams", (req, res) => {
  User.findById(req.params.user_id, "courses").then((courses) => {
    if (!courses) {
      return res.status(404).json({ idnotfound: "courses id not found" });
    }
    courses.courses.filter((course) => course._id === req.params.course_id);

    return res.status(200).json({ courses: courses.courses });
  });
});

// @route GET /courses/:course_id/exams
// @desc Retrieve user exam results for a specific course
// @access Public
router.get("/courses/:course_id/exams", (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  if (req.params.course_id == "undefined") {
    return res.status(404).json({ idnotfound: "no courseId was given" });
  }
  ExamResult.find({courseId: req.params.course_id}).then((examResults) => {
    if (!examResults) {
      return res.status(404).json({ idnotfound: "examResults are not found" });
    }
    examResults = examResults.map(examResult => examResult._doc)
    let userResults = []
    // Object.keys(curr).forEach((prop)=> console.log(prop))
    // group exams by exam type eg. half yearly, multiple choice
    let grouped_results = {};
    examResults.forEach(examResult => {
      if (grouped_results[examResult.exam_name]) {
        grouped_results[examResult.exam_name].push(examResult);
      } else {
        grouped_results = { ...grouped_results, [examResult.exam_name]: [examResult] };
      }
    }, {});
    // sort by exam score
    Object.keys(grouped_results).forEach((elem, index) => {
      grouped_results[elem].sort((b, a) => a.score - b.score);
    });
    // find examination rank among peers
    Object.keys(grouped_results).forEach(examType => {
      let rank = 1;
      grouped_results[examType].forEach(examResult => {
        if (userID == examResult.userId) {
          examResult.rank = rank;
          userResults.push(examResult)
        } else {
          rank++;
        }
      });
    });

    // find the average mark
    const averages = findAverages(grouped_results);

    userResults = userResults.map((result, index) => {
      return {...result, average: averages[index]}
    })

    return res.status(200).json({ examResults: userResults });
  });
});

module.exports = router;
