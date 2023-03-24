const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const instructorSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String
  },
  address: {
    type: String
  },
  building: {
    type: String
  },
  roomNumber: {
    type: String
  }
});
module.exports = mongoose.model("instructor", instructorSchema);