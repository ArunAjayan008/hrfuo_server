var express = require("express");
var router = express.Router();

var salary_con = require("./salary_con_Model.js");

router.get("/", (request, response) => {
  var uid = request.query.id;
  salary_con.find({ userid: uid }, function (err, obj) {
    if (err) console.log(err);
    response.json(obj);
  });
});
module.exports = router;
