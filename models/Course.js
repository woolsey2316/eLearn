const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const courseSchema = new Schema({
  CourseName: {
    type: String,
    required: true
  },
});
module.exports = course = mongoose.model("course", courseSchema);