var express = require("express");
var router = express.Router();

var profile = require("./profile");
var authToken = require("./authenticateJWToken");

router.get("/", authToken, (req, response) => {
  var uid = req.token.userid;
  profile.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});

module.exports = router;
