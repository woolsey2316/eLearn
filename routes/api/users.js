const express = require("express");
const router = express.Router();
// Load User model
const User = require("../../models/User");
const Course = require("../../models/Course");

// @route PUT api/user/:user_id/profile
// @desc Retrieve user details
// @access Public
router.put("/:user_id/profile", (req, res) => {
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

// @route GET /courses/:course_id/:user_id/exams
// @desc Retrieve user exam results for a specific course
// @access Public
router.get("/courses/:course_id/:user_id/exams", (req, res) => {
  if (req.params.course_id == "undefined") {
    return res.status(404).json({ idnotfound: "no courseId was given" });
  }
  console.log(req.params.course_id);
  Course.findById(req.params.course_id, "examResults").then((examResults) => {
    if (!examResults) {
      return res.status(404).json({ idnotfound: "examResults are not found" });
    }

    // group exams by exam type eg. half yearly, multiple choice
    const grouped = examResults.examResults.reduce((prev, curr) => {
      if (prev[curr.exam_name]) {
        prev[curr.exam_name].push(curr);
        return prev;
      } else {
        return { ...prev, [curr.exam_name]: [curr] };
      }
    }, []);
    // sort by exam score
    Object.keys(grouped).forEach((elem, index) => {
      grouped[elem].sort((b, a) => a.score - b.score);
    });
    // find examination rank among peers
    Object.keys(grouped).forEach((elem, index) => {
      let rank = 1;
      grouped[elem].forEach((e, i) => {
        if (req.params.user_id == e.userId) {
          e.rank = rank;
        } else {
          rank++;
        }
      });
    });
    const result = examResults.examResults.filter(
      (exam) => exam.userId == req.params.user_id
    );
    return res.status(200).json({ examResults: result });
  });
});

module.exports = router;
