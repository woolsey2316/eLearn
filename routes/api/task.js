const express = require("express");
const router = express.Router();

const Task = require("../../models/Task");
const { verifyToken } = require("../../utils/verifyToken");

const mongoose = require('mongoose');


// @route GET api/task/
// @description Get task array
// @access Public
router.get("/", (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  Task.find({userID: userID})
    .then((tasks) => res.json(tasks))
    .catch((err) =>
      res.status(404).json({ notasksFound: "failed to fetch tasks" })
    );
});

// @route POST api/task/
// @description Create a single task
// @access Public
router.post("/", (req, res) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  const newTask = new Task({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    due: req.body.due,
    userId: userID,
    completed: req.body.completed
  });

  newTask.save()
    .then((task) => res.json(task))
    .catch((err) => console.log(err));
})

module.exports = router;