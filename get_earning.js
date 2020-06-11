var express = require("express");
var router = express.Router();

var earning = require("./Earnings.js");

router.get("/", (request, response) => {
  var uid = request.query.id;
  var month = request.query.mn;
  var year = request.query.yr;
  earning.find(
    { $and: [{ mobno: uid }, { month: month }, { year: year }] },
    function (err, obj) {
      if (err) console.log(err);
      response.json(obj);
    }
  );
});
module.exports = router;
