var mongoose = require("mongoose");

var leaveSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  CL: {
    type: Number,
  },
  EL: {
    type: Number,
  },
  HPL: {
    type: Number,
  },
  ESI: {
    type: Number,
  },
  Absent: {
    type: Number,
  },
});
var leave = mongoose.model("leave", leaveSchema);
module.exports = leave;
