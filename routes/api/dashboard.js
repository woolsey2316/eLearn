const express = require("express");
const router = express.Router();

const { verifyToken } = require("../../utils/verifyToken");

const Exam = require("../../models/Exam");
const Course = require("../../models/Course");

// @route GET /dashboard/
// @desc Retrieve overview dashboard data
// @access Public
router.get("/", (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  if (typeof userID !== "string") {
    return res.status(401).json("jwt token needs an 'id' field");
  }

  const CoursePromise = [];
  let total = (active = 0);
  Exam.find({})
    .then((exam) => {
      exam.forEach((exam) => {
        CoursePromise.push(
          Course.find(exam.courseId).then((course) => {
            // check if user is subscribed to the course
            if (course[0].subscribers) {
              course[0].subscribers.forEach((userId) => {
                if (userID === userId) {
                  total++;
                  if (exam.due >= Date.now) {
                    active++;
                  }
                }
              });
            }
            return { total: total, active: active, completed: total - active };
          })
        );
      });
      return Promise.all(CoursePromise);
    })
    .then((dashboardResults) => {
      // sum the dashboard results together
      const dashboard = dashboardResults.reduce(
        (acc, curr) => {
          return {
            total: acc.total + curr.total,
            completed: acc.completed + curr.completed,
            active: acc.active + curr.active,
          };
        },
        {
          total: 0,
          active: 0,
          completed: 0,
        }
      );
      return res.json(dashboard);
    });
});

module.exports = router;
