var express = require("express");
var mongodb = require("mongodb");
var objectId = mongodb.objectId;
var crypto = require("crypto");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// // PASSWORD UTIL
// // CREATE FUNCTION TO RANDOM SALT

var getRandomString = function (length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
};

var sha512 = function (password, salt) {
  var hash = crypto.createHmac("sha512", salt);
  hash.update(password);
  var value = hash.digest("hex");
  return {
    salt: salt,
    passwordHash: value,
  };
};

function saltHash(userpwd) {
  var salt = getRandomString(16); // create random  character
  var passwordData = sha512(userpwd, salt);
  return passwordData;
}

function checkhash(userpwd, salt) {
  var passwordData = sha512(userpwd, salt);
  return passwordData;
}

var mongocl = mongodb.MongoClient;
var url = "mongodb://localhost:27017";

mongocl.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    if (err) {
      console.log("error", err);
    } else {
      // Register

      app.post("/register", (request, response) => {
        var post_data = request.body;
        var realpwd = post_data.password;
        var hashdata = saltHash(realpwd);
        var enc_password = hashdata.passwordHash;
        var salt = hashdata.salt;

        var name = post_data.name;
        var mobno = post_data.mobno;

        var insertJson = {
          mobno: mobno,
          name: name,
          salt: salt,
          password: enc_password,
        };

        var db = client.db("employee");

        db.collection("user")
          .find({ mobno: mobno })
          .count(function (err, number) {
            if (number != 0) {
              response.json("Already exists");
              console.log("Already exists");
            } else {
              db.collection("user").insertOne(insertJson, function (err, res) {
                response.json("Registration success");
                console.log("Registration success");
              });
            }
          });
      });
      app.post("/login", (request, response) => {
        var post_data = request.body;

        var ent_password = post_data.password;
        var mobno = post_data.mobno;

        var db = client.db("employee");

        db.collection("user")
          .find({ mobno: mobno })
          .count(function (err, number) {
            if (number == 0) {
              response.json("Account not found");
              console.log("Account not found");
            } else {
              db.collection("user").findOne({ mobno: mobno }, function (
                err,
                user
              ) {
                var salt = user.salt;
                var hash_pwd = checkhash(ent_password, salt).passwordHash;
                var enc_password = user.password;
                if (hash_pwd == enc_password) {
                  response.json("Login Successful");
                  console.log("Login Successful");
                } else {
                  response.json("Invalid Credentials");
                  console.log("Invalid Credentials");
                }
              });
            }
          });
      });

      app.post("/profile", (request, response) => {
        var post_data = request.body;
        var profid = post_data.mobno;

        var db = client.db("employee");
        db.collection("user").findOne({ mobno: mobno }, function (err, user) {
          var name = user.name;
        });
      });
      app.listen(3000, function () {
        console.log("connected");
      });
    }
  }
);
