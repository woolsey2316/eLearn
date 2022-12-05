const express = require("express");
const router = express.Router();

const Activity = require("../../models/Activity");
const Course = require("../../models/Course");

router.get("/:user_id", (req, res) => {
  Course.find({ subscribers: req.params.user_id })
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
    .catch((err) => res.status(404).json({ nocoursefound: "No Course found" }));
});

// router.get("/:user_id", async (req, res) => {
//     Course.find({ subscribers: req.params.user_id })
//       .then((courseList) => {
//         let activities = [];
//         courseList.forEach((course) =>
//           Activity.find({ courseId: course._id }).then((activity) => {
//             activities = [...activities, ...activity];
//           })
//         );

//         return setTimeout(() => res.json({ activities }), 500);
//       })
//       .catch((err) => res.status(404).json({ nocoursefound: "No Course found" }));
//   });

module.exports = router;
