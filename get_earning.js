var express = require("express");
var router = express.Router();

var earning = require("./Earnings.js");
var authToken = require("./authenticateJWToken");

router.get("/", authToken, (request, response) => {
  var uid = request.token.userid;
  var month = request.query.mn;
  var year = request.query.yr;
  earning.find(
    { $and: [{ userid: uid }, { month: month }, { year: year }] },
    function (err, obj) {
      if (err) console.log(err);
      response.json(obj);
    }
  );
});
module.exports = router;
