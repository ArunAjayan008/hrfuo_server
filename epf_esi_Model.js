var mongoose = require("mongoose");

var epfesi = mongoose.Schema({
  userid: {
    type: String,
  },
  epfacno: {
    type: String,
  },
  uan: {
    type: String,
  },
  epf_passwd: {
    type: String,
  },
  esi_no: {
    type: String,
  },
  esi_empno: {
    type: String,
  },
});
var epf_esi = mongoose.model("epfesi", epfesi);
module.exports = epf_esi;
