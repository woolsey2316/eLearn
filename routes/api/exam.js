const express = require("express");
const router = express.Router();

const Exam = require("../../models/Exam");
const Course = require("../../models/Course");

// @route GET /courses/:course_id
// @desc Retrieve user courses
// @access Public
router.get("/courses/:course_id", (req, res) => {
  if (req.params.course_id == "undefined") {
    return res.status(404).json({ idnotfound: "no course id specified" });
  }
  Course.findById(req.params.course_id, "examResults").then((examResults) => {
    if (!examResults) {
      return res.status(404).json({ idnotfound: "no exam results found" });
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

    const average = new Object();
    for (const [key, value] of Object.entries(grouped)) {
      const total = grouped[key].reduce(
        (prev, curr) => prev + curr.score / curr.total,
        0
      );
      const n = grouped[key].reduce((prev, curr) => prev + 1, 0);
      average.key = total / n;
    }

    return res.status(200).json({ exams: grouped, average: average });
  });
});

router.get("/:exam_id/questions", async (req, res) => {
  Exam.findById(req.params.exam_id)
    .then((examQuestions) => {
      return res.json(examQuestions);
    })
    .catch((err) => res.status(404).json({ nocoursefound: "No Course found" }));
});

module.exports = router;
