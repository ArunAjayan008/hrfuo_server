var express = require("express");
var router = express.Router();

var epfo = require("./epfModel");

router.get("/", (request, response) => {
  var uid = request.query.id;
  epfo.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
