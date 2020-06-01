<<<<<<< HEAD
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
});

var user = mongoose.model("user", userSchema);

module.exports = user;
=======
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
});

var user = mongoose.model("user", userSchema);

module.exports = user;
>>>>>>> d18c2bea03b4c12e101d97e8406ae7288b7c0cba
