var express = require("express");
var router = express.Router();

var service = require("./service.js");

router.get("/", (request, response) => {
  var uid = request.query.id;
  service.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
