var express = require("express");
var router = express.Router();

var leavedays = require("./LeaveModel");

router.get("/", (request, response) => {
  var uid = request.query.id;
  var month = request.query.mn;
  var year = request.query.yr;
  leavedays.find(
    { $and: [{ userid: uid }, { month: month }, { year: year }] },
    function (err, leav) {
      if (err) console.log(err);
      response.json(leav);
    }
  );
});
module.exports = router;
