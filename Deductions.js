var mongoose = require("mongoose");

var deductionSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
  pf: {
    type: Number,
  },
  esi: {
    type: Number,
  },
  f_adv: {
    type: Number,
  },
  sifl: {
    type: Number,
  },
  canteen: {
    type: Number,
  },
  other1: {
    type: Number,
  },
  other2: {
    type: Number,
  },
  other3: {
    type: Number,
  },
  other4: {
    type: Number,
  },
  total: {
    type: Number,
  },
});
var deduct = mongoose.model("deduction", deductionSchema);
module.exports = deduct;
