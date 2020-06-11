var express = require("express");
var router = express.Router();

var leave = require("./leave.js");

router.get("/", (request, response) => {
  var uid = request.query.id;
  leave.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
