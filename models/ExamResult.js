const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const examResultsSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  courseId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  examName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model("exam_result", examResultsSchema);