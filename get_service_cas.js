var express = require("express");
var router = express.Router();

var service_cas = require("./Service_cas_Model.js");

router.get("/", (request, response) => {
  var uid = request.query.id;
  service_cas.find({ userid: uid }, function (err, obj) {
    if (err) console.log(err);
    response.json(obj);
  });
});
module.exports = router;
