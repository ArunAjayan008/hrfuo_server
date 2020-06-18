var express = require("express");
var router = express.Router();

var service_con = require("./Service_con_Model.js");

router.get("/", (request, response) => {
  var uid = request.query.id;
  service_con.find({ userid: uid }, function (err, obj) {
    if (err) console.log(err);
    response.json(obj);
  });
});
module.exports = router;
