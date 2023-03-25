const express = require("express");
const { weightedAverage, classAverages, calculateRank, groupExamResultsByUser } = require("../../utils/examStats");
const router = express.Router();

const Exam = require("../../models/Exam");
const ExamResult = require("../../models/ExamResult")
const { verifyToken } = require("../../utils/verifyToken");


// @route GET /exam/:course_id
// @desc Retrieve user courses
// @access Public
router.get("/:course_id", (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  if (req.params.course_id == "undefined") {
    return res.status(404).json({ idnotfound: "no course id specified" });
  }
  ExamResult.find({courseId: req.params.course_id}).then((examResults) => {
    if (examResults.length === 0) {
      return res.status(404).json({ examsNotFound: "no exam results found" });
    }
    examResults = examResults.map(examResults => examResults._doc)
    const userExamResult = examResults.filter(examResult => examResult.userId == userID)
    if (!userExamResult) return res.status(404).json({error: "Student not found"});
    // group exams by user
    const grouped_results = groupExamResultsByUser(examResults)

    const average = weightedAverage(userExamResult)
    // array of average total mark for each student
    const total_average = classAverages(grouped_results)

    const rank = calculateRank(average, total_average)

    return res.status(200).json({userAverage: average, classRank: rank});
  });
});

router.get("/:exam_id/questions", async (req, res) => {
  Exam.findById(req.params.exam_id)
    .then((examQuestions) => {
      return res.json(examQuestions);
    })
    .catch((err) =>
      res
        .status(404)
        .json({ noExamFound: "Failed fetching questions for exam" })
    );
});

module.exports = router;
