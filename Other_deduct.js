var mongoose = require("mongoose");

var other_dedSchema = mongoose.Schema({
  deductid: {
    type: String,
  },
  other_item_1: {
    type: String,
  },
  other_item_2: {
    type: String,
  },
  other_item_3: {
    type: String,
  },
});
var other_ded = mongoose.model("other_deduct", other_dedSchema);
module.exports = other_ded;
