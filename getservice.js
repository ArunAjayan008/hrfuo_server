var express = require("express");
var router = express.Router();

var service = require("./service.js");

router.get("/", (request, response) => {
  var post_data = request.query.id;
  var uid = post_data;
  service.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
