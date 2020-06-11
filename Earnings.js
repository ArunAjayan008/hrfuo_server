var mongoose = require("mongoose");

var earningSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
  basicval: {
    type: Number,
  },
  da: {
    type: Number,
  },
  hra: {
    type: Number,
  },
  risk: {
    type: Number,
  },
  travel: {
    type: Number,
  },
  wash: {
    type: Number,
  },
  other_1: {
    type: Number,
  },
  other_2: {
    type: Number,
  },
  other_3: {
    type: Number,
  },
  total: {
    type: Number,
  },
});
var earning = mongoose.model("earning", earningSchema);
module.exports = earning;
