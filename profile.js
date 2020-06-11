var mongoose = require("mongoose");

var profileSchema = mongoose.Schema({
  mobno: {
    type: String,
  },
  userid: {
    type: String,
  },
  emp_type: {
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
