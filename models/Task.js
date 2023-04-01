const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const taskSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  due: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  }
});
module.exports = mongoose.model("task", taskSchema);