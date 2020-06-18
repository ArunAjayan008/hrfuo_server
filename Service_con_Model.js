var mongoose = require("mongoose");

var serviceSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  doj: {
    type: String,
  },
  dorej: {
    type: String,
  },
  do_contract_end: {
    type: String,
  },
});
var servicecon = mongoose.model("service_con", serviceSchema);
module.exports = servicecon;
