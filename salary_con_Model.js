var mongoose = require("mongoose");

var leaveSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  attendance: {
    type: Number,
  },
  gross: {
    type: Number,
  },
  canteen: {
    type: Number,
  },
  epf: {
    type: Number,
  },
  esi: {
    type: Number,
  },
  other_ded1: {
    type: Number,
  },
  other_ded2: {
    type: Number,
  },
  total_ded: {
    type: Number,
  },
  net_salary: {
    type: Number,
  },
});
var salarycon = mongoose.model("salary_con", leaveSchema);
module.exports = salarycon;
