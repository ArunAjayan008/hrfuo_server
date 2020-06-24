var express = require("express");
var router = express.Router();

var epfesi = require("./epf_esi_Model");

var authToken = require("./authenticateJWToken");

router.get("/", authToken, (request, response) => {
  var uid = request.token.userid;
  epfesi.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
