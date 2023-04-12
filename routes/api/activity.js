const express = require("express");
const router = express.Router();

const { verifyToken } = require("../../utils/verifyToken");

const Activity = require("../../models/Activity");
const Course = require("../../models/Course");

router.get("/", (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  if (typeof userID !== "string") {
    return res.status(401).json("jwt token needs an 'id' field");
  }

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
      return res.json({ activities });
    })
    .catch((err) =>
      res
        .status(404)
        .json({ nocoursefound: "failed fetching activity information" })
    );
});

module.exports = router;
