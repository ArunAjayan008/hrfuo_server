var express = require("express");
var router = express.Router();

var notify = require("./notifications.js");

router.get("/", (request, response) => {
  var post_data = request.query.id;
  var uid = post_data;
  notify.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
