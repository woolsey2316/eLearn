const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const examResultSchema = new Schema({
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
module.exports = examResult = mongoose.model("examResult", examResultSchema);