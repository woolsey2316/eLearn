const express = require("express");
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
    // group exams by exam type eg. half yearly, multiple choice
    const result = examResults.map(result => {
      return {
        examName: result.examName,
        score: result.score,
        scorePercent: result.score / result.total * 100,
      }
    })
    // calculate class rank
    let userScore = 0
    examResults.forEach(result => {
      if (result.userId === userID) {
        userScore = result.score
      }
    })
    result.rank = examResults.reduce((rank, curr) => {
      if (curr.userId !== userID) {
        if (curr.score > userScore) {
          return rank + 1
        }
      }
    },1)

    return res.status(200).json({examResults: result});
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
