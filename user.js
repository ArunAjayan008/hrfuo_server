var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobno: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  enc_password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

var user = mongoose.model("user", userSchema);

module.exports = user;
