var mongoose = require("mongoose");

var notifySchema = mongoose.Schema({
  mobno: {
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
var notify = mongoose.model("Notification", notifySchema);
module.exports = notify;
