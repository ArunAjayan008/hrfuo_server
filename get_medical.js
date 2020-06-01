var express = require("express");
var router = express.Router();

var medical = require("./Medical");

router.get("/", (request, response) => {
  var uid = request.query.id;
  medical.find({ userid: uid }, function (err, obj) {
    if (err) console.log(err);
    response.json(obj);
  });
});
module.exports = router;
