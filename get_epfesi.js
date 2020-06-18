var express = require("express");
var router = express.Router();

var epfesi = require("./epf_esi_Model");

router.get("/", (request, response) => {
  var uid = request.query.id;
  epfesi.find({ userid: uid }, function (err, prof) {
    if (err) console.log(err);
    response.json(prof);
  });
});
module.exports = router;
