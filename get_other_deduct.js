var express = require("express");
var router = express.Router();

var other_ded = require("./Other_deduct.js");

router.get("/", (request, response) => {
  var oid = request.query.id;
  other_ded.find({ deductid: oid }, function (err, obj) {
    if (err) console.log(err);
    response.json(obj);
  });
});
module.exports = router;
