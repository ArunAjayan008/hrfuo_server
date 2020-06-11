var mongoose = require("mongoose");

var epfSchema = mongoose.Schema({
  mobno: {
    type: String,
  },
  uan: {
    type: Number,
  },
  password: {
    type: Number,
  },
});
var epf = mongoose.model("epf", epfSchema);
module.exports = epf;
