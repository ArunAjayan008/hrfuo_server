<<<<<<< HEAD
var mongoose = require("mongoose");

var profileSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  desig: {
    type: String,
  },
  age: {
    type: String,
  },
  dob: {
    type: String,
  },
  gender: {
    type: String,
  },
  edu_qual: {
    type: String,
  },
  address: {
    type: String,
  },
});
var profile = mongoose.model("profile", profileSchema);
module.exports = profile;
=======
var mongoose = require("mongoose");

var profileSchema = mongoose.Schema({
  mobno: {
    type: String,
  },
  age: {
    type: String,
  },
  dob: {
    type: String,
  },
  gender: {
    type: String,
  },
  edu_qual: {
    type: String,
  },
  address: {
    type: String,
  },
});
var profile = mongoose.model("profile", profileSchema);
module.exports = profile;
>>>>>>> d18c2bea03b4c12e101d97e8406ae7288b7c0cba
