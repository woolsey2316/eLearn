const express = require("express");
const router = express.Router();

const { verifyToken } = require("../../utils/verifyToken");

const { validateToken } = require("../../middleware/validateToken");
const Exam = require("../../models/Exam");
const ExamResult = require("../../models/ExamResult");

const { notDue, matchesUser, sameYearAndSameMonth } = require("../../utils/examStats")

// @route GET /dashboard
// @desc Retrieve overview dashboard data
// @access Public
router.get("/", validateToken, async (req, res, next) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  let numberCompletedExams
  try {
    numberCompletedExams = await ExamResult.find()
    .then(examResults =>
      // find the total number of completed exams belonging to a particular student
      examResults.reduce((acc, examResult) => {
        if (!matchesUser(examResult.userId, userID)) {
          return acc
        }
        return acc + 1
      },0)
    )
  } catch (err) {
    next(err)
  }

  let numberActiveExams
  try {
    numberActiveExams = await Exam.find()
      .then(exams =>
        // find the total number of active exams belonging to a particular student
        exams.reduce((acc, exam) => {
          if (!notDue(exam.due)) return acc
          return acc + 1
        },0)
      )
  } catch (err) {
    next(err)
  }

  return res.status(200).json({
    total: numberCompletedExams + numberActiveExams,
    active: numberActiveExams,
    completed: numberCompletedExams
  })
});

// @route GET /dashboard
// @desc Retrieve overview dashboard data
// @access Public
router.get("/month", validateToken, async (req, res, next) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  let numberCompletedExams
  try {
    numberCompletedExams = await ExamResult.find()
    .then(examResults =>
      // find the total number of completed exams belonging to a particular student
      examResults.reduce((acc, examResult) => {
        if (matchesUser(examResult.userId, userID) && sameYearAndSameMonth(examResult.completed)) {
          return acc + 1
        }
        return acc
      },0)
    )
  } catch (err) {
    next(err)
  }

  let numberActiveExams
  try {
    numberActiveExams = await Exam.find()
      .then(exams =>
        // find the total number of active exams belonging to a particular student
        exams.reduce((acc, exam) => {
          if (sameYearAndSameMonth(exam.due) && notDue(exam.due)) {
            return acc + 1
          }
          return acc
        },0)
      )
  } catch (err) {
    next(err)
  }

  return res.status(200).json({
    total: numberCompletedExams + numberActiveExams,
    active: numberActiveExams,
    completed: numberCompletedExams
  })

})

module.exports = router;
