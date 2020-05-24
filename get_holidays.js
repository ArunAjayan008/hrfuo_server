var express = require("express");
var router = express.Router();

var holiday = require("./holiday.js");

router.get("/", (request, response) => {
  holiday.find({}, function (err, holiday) {
    if (err) console.log(err);
    response.json(holiday);
  });
});
module.exports = router;
