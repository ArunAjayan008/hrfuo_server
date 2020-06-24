const jwt = require("jsonwebtoken");
require("dotenv").config();
var profile = require("./profile");
var express = require("express");
var router = express.Router();

router.get("/", authenticateToken, (req, res) => {
  profile.findOne({ mobno: req.getid.tokenid }, function (err, obj) {
    jwt.sign(
      { userid: obj.userid },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15s" },
      function (err, token) {
        res.json(token);
      }
    );
  });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.AUTH_TOKEN_SECRET, (err, obj) => {
    if (err) return res.sendStatus(403);
    req.getid = obj;
    next();
  });
}
module.exports = router;
