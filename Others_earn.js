var mongoose = require("mongoose");

var other_earnSchema = mongoose.Schema({
  earnid: {
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
var other_earn = mongoose.model("other_earn", other_earnSchema);
module.exports = other_earn;
