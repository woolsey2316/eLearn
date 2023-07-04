const express = require("express");
const router = express.Router();

const { verifyToken } = require("../../utils/verifyToken");

const { validateToken } = require("../../middleware/validateToken");

const Activity = require("../../models/Activity");
const Course = require("../../models/Course");

router.get("/", validateToken, (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  Course.find({ subscribers: userID })
    .then((courseList) => {
      const activityPromises = [];
      courseList.forEach((course) => {
        activityPromises.push(Activity.find({ courseId: course._id }));
      });

      return Promise.all(activityPromises);
    })
    .then((activityLists) => {
      // Flatten the array of arrays into a single array
      const activities = [].concat.apply([], activityLists);
      return res.json(activities);
    })
    .catch((err) =>
      res
        .status(404)
        .json({ nocoursefound: "failed fetching activity information" })
    );
});

module.exports = router;
