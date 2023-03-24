const express = require("express");
const router = express.Router();

const Instructor = require("../../models/Instructor");

// @route GET api/instructor/:id
// @description Get single instructor by id
// @access Public
router.get("/:instructor_id", (req, res) => {
  Instructor.findById(req.params.instructor_id)
    .then((instructor) => res.json(instructor))
    .catch((err) =>
      res.status(404).json({ noInstructorFound: "failed to find single instructor" })
    );
});

module.exports = router;