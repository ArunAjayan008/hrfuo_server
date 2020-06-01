<<<<<<< HEAD
var express = require("express");
var router = express.Router();

var profile = require("./profile");

router.get("/", (request, response) => {
  var uid = request.query.id;
  profile.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
=======
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
>>>>>>> d18c2bea03b4c12e101d97e8406ae7288b7c0cba
