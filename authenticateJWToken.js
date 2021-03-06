const jwt = require("jsonwebtoken");
require("dotenv").config();

var auth = function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, obj) => {
    if (err) return res.sendStatus(403);
    req.token = obj;
    next();
  });
};
module.exports = auth;
