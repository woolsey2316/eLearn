const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const { validationResult } = require("express-validator");
const { validationErrorResponse } = require("./utils");

const { User, refreshOtpThenSendToUser } = require("../../models/User");
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
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      gender: req.body.gender,
      area: req.body.area,
      state: req.body.state,
      school: req.body.school,
      address: req.body.address,
      className: req.body.className,
      password2: req.body.password2,
      mobile: req.body.mobile,
      pincode: req.body.pincode,
    });
    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    });
  });
});
// @route POST api/auth/login
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
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              id: user.id,
              token: "Bearer " + token,
              email: email,
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

router.post("/password/update", (req, res, next) => {
  const invalid = validationErrorResponse(res, validationResult(req));
  if (invalid) {
    return invalid;
  }
  req.user.comparePassword(req.body.oldPassword, (err, isMatch) => {
    if (err || !isMatch) {
      return res.status(401).json({ message: "toast.user.old_password_error" });
    }
  });
  User.findById(req.user._id)
    .exec()
    .then((user) => {
      if (!user) {
        return Promise.reject(res.status(500).end());
      }
      user.password = req.body.password;
      return user.save();
    })
    .then(() => {
      return res.sendStatus(200);
    })
    .catch((error) => {
      return next(error);
    });
});

router.post("/password/reset", (req, res, next) => {
  const invalid = validationErrorResponse(res, validationResult(req));
  if (invalid) {
    return invalid;
  }
  console.log("body = ", req.body);
  User.findOne({ email: req.body.email, OTP: req.body.OTP })
    .exec()
    .then((user) => {
      console.log({ user });
      if (!user) {
        return Promise.reject(res.sendStatus(404));
      }
      // user.password = req.body.password;
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          return user.save();
        });
      });
    })
    .then(() => {
      return res.sendStatus(200);
    })
    .catch((error) => {
      return next(error);
    });
});

router.get("/sendotp", (req, res, next) => {
  const invalid = validationErrorResponse(res, validationResult(req));
  if (invalid) {
    return invalid;
  }
  User.findOne({ email: req.query.email })
    .exec()
    .then((user) => {
      if (!user) {
        return Promise.reject(
          res.status(404).json({ message: "toast.user.account_not_found" })
        );
      }
      return refreshOtpThenSendToUser(user.email);
    })
    .then((value) => {
      return res.sendStatus(200);
    })
    .catch((reason) => {
      return res.status(500).json({ message: reason });
    });
});

router.get("/verifyaccount", (req, res, next) => {
  const invalid = validationErrorResponse(res, validationResult(req));
  if (invalid) {
    return invalid;
  }
  User.findOne({ email: req.query.email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "toast.user.email" });
      }
      return res.sendStatus(200);
    });
});

router.get("/verifyotp", [
  (req, res, next) => {
    const invalid = validationErrorResponse(res, validationResult(req));
    if (invalid) {
      return invalid;
    }
    User.findOne({ email: req.query.email })
      .exec()
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "toast.user.email" });
        }
        return verifyOtpInternal(res, next, user, req.query.OTP, false);
      });
  },
  (req, res, next) => {
    res.sendStatus(200);
  },
]);

module.exports = router;
