var express = require("express");
var router = express.Router();

var notify = require("./notifications.js");
var authToken = require("./authenticateJWToken");

router.get("/", authToken, (request, response) => {
  var uid = request.token.userid;
  notify.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
