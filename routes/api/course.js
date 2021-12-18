const express = require("express");
const router = express.Router();

const Course = require("../../models/Course");

// @route GET api/courses/
// @desc Retrieve course all courses
// @access Public
router.get("/", async (req, res) => {

    try {
        let query = Course.find();
    
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 4;
        const skip = (page - 1) * pageSize;
        const total = await Course.countDocuments();
    
        const pages = Math.ceil(total / pageSize);
    
        query = query.skip(skip).limit(pageSize);
    
        if (page > pages) {
            return res.status(404).json({
            status: "fail",
            message: "No page found",
            });
        }
    
        const result = await query;
    
        res.status(200).json({
            status: "success",
            count: result.length,
            page,
            pages,
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Server Error",
        });
    }
});

// @route GET api/courses/:id
// @description Get single course by id
// @access Public
router.get('/:id', (req, res) => {
    Course.findById(req.params.id)
      .then(course => res.json(course))
      .catch(err => res.status(404).json({ nocoursefound: 'No Course found' }));
});

// @route GET api/courses/:id
// @description Get all courses a user is subscribed to
// @access Public
router.get('/user/:user_id', (req, res) => {
    Course.find({subscribers: req.params.user_id})
      .then(courseList => {
        //console.log(courseList)
        const courseIds = Object.keys(courseList).map(key => {
            console.log("here they are", courseList[key])
            return {
                _id: courseList[key]._id,
                courseName: courseList[key].CourseName,
                category: courseList[key].category,
                instructor: courseList[key].instructor
            }
        })
        return res.json(courseIds)
       })
      .catch(err => res.status(404).json({ nocoursefound: 'No Course found' }));
});

// @route GET api/courses
// @description add/save course
// @access Public
router.post('/', (req, res) => {
    Course.create(req.body)
      .then(course => res.json({ msg: 'course added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this course' }));
  });

module.exports = router;