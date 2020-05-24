var mongoose = require("mongoose");

var holidaySchema = mongoose.Schema({
  date: {
    type: String,
  },
  desc: {
    type: String,
  },
});
var holiday = mongoose.model("holiday", holidaySchema);
module.exports = holiday;
