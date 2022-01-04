const express = require("express");
const router = express.Router();

const Exam = require("../../models/Exam");
const Course = require("../../models/Course");

// @route GET /users/:id/courses/:courseId/exams
// @desc Retrieve overview dashboard data
// @access Public
router.get("/:user_id", (req, res) => {
    
    let examList = []
    let total = active = completed = 0
    Exam.find({})
    .then(exam => exam.forEach(exam => {
        Course.find(exam.courseId)
            .then(course => {
                // check if user is subscribed to the course
                if (course[0].subscribers) {
                    course[0].subscribers.forEach(userId => {
                        if (req.params.user_id == userId) {
                            examList.push(exam)
                            total++
                            if (exam.due < Date.now) {
                                completed++
                            } else {
                                active++
                            }
                        }
                    })
                }
            })
    }))
    return setTimeout(() => res.json({"active": active,'total': total, 'completed': completed}), 300)

})

module.exports = router;
