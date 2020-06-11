var express = require("express");
var router = express.Router();

var profile = require("./profile");

router.get("/", (request, response) => {
  var uid = request.query.id;
  profile.find({ mobno: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
