const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          courseList: [],
          results: []
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
        id: user.id,
        name: user.name
        };
        // Sign token
        jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 31556926 // 1 year in seconds
        },
        (err, token) => {
          res.json({
          success: true,
          id: user.id,
          token: "Bearer " + token,
          email: email
          });
        }
        );
      } else {
        return res
        .status(400)
        .json({ passwordincorrect: "Password incorrect" });
      }
      });
    });
});
// @route GET api/user/profile
// @desc Retrieve user details
// @access Public
router.get("/user/profile", (req, res) => {
  const email = req.body.email;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    console.log(user)
    return user
  })
});

// @route GET /users/:id/courses
// @desc Retrieve user courses
// @access Public
router.get("/:user_id/courses", (req, res) => {
  
  User.findById( req.params.user_id, 'courses').then(course => {
    if (!course) {
      return res.status(404).json({ idnotfound: "course id not found" });
    }

    return res.status(200).json({ courses: course })
  })
});

// @route GET /users/:id/dashboard
// @desc Retrieve dashboard details
// @access Public
router.get("/:user_id/dashboard", (req, res) => {
  User.findById( req.params.user_id, 'active_tests total_completion_rate completed_tests total_enrolled_courses' ).then(dashboard => {
    if (!dashboard) {
      return res.status(404).json({ idnotfound: "exam id not found" });
    }
    
    return res.status(200).json({ dashboard: dashboard })
  })
});


module.exports = router;