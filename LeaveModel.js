var mongoose = require("mongoose");

var leaveSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  date: {
    type: String,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
  leave_type: {
    type: String,
  },
});
var leaveday = mongoose.model("leaveday", leaveSchema);
module.exports = leaveday;
