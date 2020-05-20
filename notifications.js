var mongoose = require("mongoose");

var notifySchema = mongoose.Schema({
  userid: {
    type: String,
  },
  Title: {
    type: String,
  },
  Desc: {
    type: String,
  },
  Date_time: {
    type: String,
  },
  Target_date: {
    type: String,
  },
});
var notify = mongoose.model("Notifications", notifySchema);
module.exports = notify;
