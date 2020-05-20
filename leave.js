var mongoose = require("mongoose");

var leaveSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  CL: {
    type: int,
  },
  EL: {
    type: int,
  },
  HPL: {
    type: int,
  },
  ESI: {
    type: int,
  },
  Absent: {
    type: int,
  },
});
var leave = mongoose.model("leave", leaveSchema);
module.exports = leave;
