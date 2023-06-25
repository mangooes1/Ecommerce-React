const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    default: "Patna",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("user", UserSchema);
