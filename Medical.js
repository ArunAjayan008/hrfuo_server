var mongoose = require("mongoose");
var medicSchema = new mongoose.Schema({
  userid: {
    type: String,
  },
  cred_bal: {
    type: Number,
  },
  balance: {
    type: Number,
  },
  last_bill_amnt: {
    type: Number,
  },
  last_submit_date: {
    type: String,
  },
  updated_date: {
    type: String,
  },
});
var medical = mongoose.model("medical", medicSchema);
module.exports = medical;
