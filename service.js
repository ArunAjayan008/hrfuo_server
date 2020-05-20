var mongoose = require("mongoose");

var serviceSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  doj: {
    type: String,
  },
  desig_on_join: {
    type: String,
  },
  currnt_desig: {
    type: String,
  },
  dor: {
    type: String,
  },
  date_last_promotion: {
    type: String,
  },
  next_promotion: {
    type: String,
  },
});
var service = mongoose.model("service", serviceSchema);
module.exports = service;
