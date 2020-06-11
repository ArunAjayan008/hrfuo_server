var express = require("express");
var router = express.Router();

var deduct = require("./Deductions.js");

router.get("/", (request, response) => {
  var uid = request.query.id;
  var month = request.query.mn;
  var year = request.query.yr;
  deduct.find(
    { $and: [{ userid: uid }, { month: month }, { year: year }] },
    function (err, obj) {
      if (err) console.log(err);
      response.json(obj);
    }
  );
});
module.exports = router;
