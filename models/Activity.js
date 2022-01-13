const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const activitySchema = new Schema({
  _id: {
    type: mongoose.ObjectId,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  courseId: {
    type: mongoose.ObjectId,
    required: true
  },
});
module.exports = activity = mongoose.model("activity", activitySchema);