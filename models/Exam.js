const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const examSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  examName: {
    type: String,
    required: true
  },
  quizQuestions: {
    type: Array(Array(Object))
  },
  description: {
    type: String
  },
  instructor: {
    type: String
  },
  sections: {
    type: Array(String)
  },
  duration: {
    type: Number
  },
  due: {
    type: Date
  },
  courseId: {
    type: Schema.Types.ObjectId
  }
});
module.exports = mongoose.model("exam", examSchema);