const jwt = require("jsonwebtoken");
require("dotenv").config();
var profile = require("./profile");
var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  var mobno = req.query.mobno;
  profile.findOne({ mobno: mobno }, function (err, obj) {
    jwt.sign(
      { userid: obj.userid },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" },
      function (err, token) {
        res.json(token);
        // storetoken(token);
      }
    );
  });
});

// function storetoken(token) {
//   if (typeof localStorage === "undefined" || localStorage === null) {
//     var LocalStorage = require("node-localstorage").LocalStorage;
//     localStorage = new LocalStorage("./scratch");
//   }

//   localStorage.setItem("token", token);
//   console.log(localStorage.getItem("token"));
// }
module.exports = router;
