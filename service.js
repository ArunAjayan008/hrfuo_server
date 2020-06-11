var mongoose = require("mongoose");

var serviceSchema = mongoose.Schema({
  mobno: {
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
  date_of_lastprom: {
    type: String,
  },
  next_promotion: {
    type: String,
  },
});
var service = mongoose.model("service", serviceSchema);
module.exports = service;
