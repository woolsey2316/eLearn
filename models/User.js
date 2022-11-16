const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { sendEmail } = require("../config/smtp-transporter");
const { getUid } = require("../utils/random");
const { getExpireTime } = require("../utils/time");
// Create Schema
const UserSchema = new Schema({
  _id: {
    type: mongoose.ObjectId,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: {
    type: String,
    required: false,
  },
  resetPasswordExpires: {
    type: Date,
    required: false,
  },
});
UserSchema.methods.generatePasswordReset = function () {
  this.resetPasswordToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

const OTP_LENGTH = 4;
const OTP_EXPIRE_TIME = 10;

const User = mongoose.model("users", UserSchema);

const refreshOtpThenSendToUser = (email) => {
  return User.findOne({ email: email })
    .exec()
    .then((user) => {
      if (user) {
        user.OTP = getUid(OTP_LENGTH);
        user.otpExpireTime = getExpireTime(OTP_EXPIRE_TIME);
        return user.save().then((saved) => {
          const appName = "e-learn";
          const subject = appName;
          const content = saved.OTP;
          return sendEmail(email, subject, content);
        });
      } else {
        return Promise.reject(new Error("Cannot find the user."));
      }
    });
};

module.exports = { User, refreshOtpThenSendToUser };
