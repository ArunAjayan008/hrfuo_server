var express = require("express");
var router = express.Router();

var notify = require("./notifications.js");

router.get("/", (request, response) => {
  var uid = request.query.id;
  notify.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
