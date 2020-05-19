var express = require("express");
var router = express.Router();

var profile = require("./profile.js");

router.get("/", (request, response) => {
  var post_data = request.query.id;
  var mobno = post_data;
  profile.find({ mobno: mobno }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
