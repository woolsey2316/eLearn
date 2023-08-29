const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const { validateToken } = require("../../middleware/validateToken");

const { validationResult } = require("express-validator");
const { validationErrorResponse } = require("./utils");
const { verifyToken } = require("../../utils/verifyToken");

const { User, refreshOtpThenSendToUser } = require("../../models/User");

const mongoose = require('mongoose')

const jwtExpirySeconds = 900;
const jwtRefreshExpirySeconds = 3600;
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
      return res.status(400).json({ msg: "Email already exists" });
    }
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
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
          .then((user) => res.json({ message: "Successfully registered"}))
          .catch((err) => console.log(err));
      });
    });
  });
});
// @route POST api/auth/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", async (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  const foundUser = await User.findOne({ email }).exec();

  if (!foundUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(401).json({ message: "Unauthorized" });
  const expireTime = Date.now() + jwtExpirySeconds * 1000;
  const accessToken = jwt.sign(
    {
      payload: {
        email: foundUser.email,
        admin: foundUser.admin,
        id: foundUser.id,
        expires: expireTime,
      },
    },
    keys.ACCESS_TOKEN_SECRET,
    { expiresIn: jwtExpirySeconds }
  );

  const refreshToken = jwt.sign(
    { email: foundUser.email },
    keys.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  // Create secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    httpOnly: true, // accessible only by web server
    secure: true, // https
    sameSite: "None", // cross-site cookie
    maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiry: set to match rT
  });

  // Send accessToken containing username and roles
  res.json({
    token: accessToken,
    id: foundUser.id,
    email: foundUser.email,
    expires: expireTime,
    success: true,
  });
});
// @desc Refresh
// @route GET/auth/refresh
// @access Public - because access token has expired
router.post("/refresh", (req, res) => {
  const cookies = req.cookies;

  if (!cookies.jwt) return res.status(401).json({ message: "Unauthorised" });

  const refreshToken = cookies.jwt;

  jwt.verify(refreshToken, keys.REFRESH_TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });

    const foundUser = await User.findOne({ email: decoded.email }).exec();

    if (!foundUser)
      return res.status(401).json({ message: "no authorised user found" });
    const expireTime = Date.now() + jwtExpirySeconds * 1000;
    jwt.sign(
      {
        payload: {
          email: foundUser.email,
          roles: foundUser.roles,
          id: foundUser.id,
          expires: expireTime,
        },
      },
      keys.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      },
      (err, token) => {
        if (!err) {
          res.json({ token, expires: expireTime });
        } else {
          res.status(500).json(err);
        }
      }
    );
  });
});

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
router.post("/logout", (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.token) return res.sendStatus(204);
  res.clearCookie("token", { httpOnly: true, secure: true });
  res.json({ message: "Cookie cleared" });
});

router.post("/password/update", (req, res, next) => {
  const jwt = req.headers.authorisation.split(" ")[1];
  const { payload } = verifyToken(jwt, res);
  const userID = payload?.id;

  if (typeof userID !== "string") {
    return res.status(401).json("jwt token needs an 'id' field");
  }

  User.findById(userID)
    .exec()
    .then((user) => {
      if (!user) {
        return Promise.reject(
          res.status(500).json("no Users found matching id").end()
        );
      }
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          if (user.password === hash) {
            throw "password is the same";
          } else {
            user.password = hash;
          }
          return user.save();
        });
      });
    })
    .then(() => {
      return res.status(200).json("updated password successfully");
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
  User.findOne({ email: req.body.email, OTP: req.body.OTP })
    .exec()
    .then((user) => {
      if (!user) {
        return Promise.reject(res.sendStatus(404));
      }
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

router.get("/sendotp", (req, res) => {
  const invalid = validationErrorResponse(res, validationResult(req));
  if (invalid) {
    return invalid;
  }
  User.findOne({ email: req.query.email })
    .exec()
    .then((user) => {
      if (!user) {
        return Promise.reject(
          res.status(404).json({ message: "user not found" })
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
  (req, res) => {
    res.sendStatus(200);
  },
]);

module.exports = router;
