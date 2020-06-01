var express = require("express");
var router = express.Router();

var other_earn = require("./Others_earn.js");

router.get("/", (request, response) => {
  var oid = request.query.id;
  other_earn.find({ earnid: oid }, function (err, obj) {
    if (err) console.log(err);
    response.json(obj);
  });
});
module.exports = router;
