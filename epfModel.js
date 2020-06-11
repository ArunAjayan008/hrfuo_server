var mongoose = require("mongoose");

var epfSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  uan: {
    type: Number,
  },
  password: {
    type: String,
  },
});
var epf = mongoose.model("epf", epfSchema);
module.exports = epf;
