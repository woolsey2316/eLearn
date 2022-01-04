const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
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
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  pincode: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  courses: {
    type: Array,
    default: []
  },
  exams: {
    type: Array,
    default: []
  }
});
module.exports = User = mongoose.model("users", UserSchema);