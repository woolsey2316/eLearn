const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const courseSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  CourseName: {
    type: String,
    required: true
  },
  subscribers: {
    type: Array(Schema.Types.ObjectId)
  },
  category: {
    type: String
  },
  instructor: {
    type: String
  },
});
module.exports = mongoose.model("course", courseSchema);