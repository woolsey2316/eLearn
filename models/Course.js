const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const courseSchema = new Schema({
  _id: {
    type: mongoose.ObjectId,
    required: true
  },
  CourseName: {
    type: String,
    required: true
  },
  examResults: {
    type: Array(Object),
    required: false
  },
  subscribers: {
    type: Array(mongoose.ObjectId)
  },
  category: {
    type: String
  },
  instructor: {
    type: String
  },
  exams: {
    type: Array(Object)
  }
});
module.exports = course = mongoose.model("course", courseSchema);