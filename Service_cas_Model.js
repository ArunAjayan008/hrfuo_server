var mongoose = require("mongoose");

var serviceSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  doj: {
    type: String,
  },
  doj_as_cas: {
    type: String,
  },
});
var servicecas = mongoose.model("service_cas", serviceSchema);
module.exports = servicecas;
