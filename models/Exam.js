const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const examSchema = new Schema({
  _id: {
    type: mongoose.ObjectId,
    required: true
  },
  examName: {
    type: String,
    required: true
  },
  quizQuestions: {
    type: Array(Array(Object))
  },
  examName: {
    type: String
  },
  instructor: {
    type: String
  },
  due: {
    type: Date
  },
  courseId: {
    type: mongoose.ObjectId
  }
});
module.exports = exam = mongoose.model("exam", examSchema);