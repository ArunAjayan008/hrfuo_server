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
