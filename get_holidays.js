var express = require("express");
var router = express.Router();

var holiday = require("./holiday.js");
var authToken = require("./authenticateJWToken");

router.get("/", authToken, (request, response) => {
  holiday.find({}, function (err, holiday) {
    if (err) console.log(err);
    response.json(holiday);
  });
});
module.exports = router;
