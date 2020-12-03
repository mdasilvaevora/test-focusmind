const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  birthday: {
    type: Date
  },
  country: {
      type: String
  },
  phonenumber: {
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true
  },
  comments: {
    type: String
  },
});
module.exports = User = mongoose.model("users", UserSchema);