var express = require("express");
var mongodb = require("mongodb");
var objectId = mongodb.objectId;
var mongoose = require("mongoose");
var crypto = require("crypto");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// // ENCRYPTION
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

// var mongocl = mongodb.MongoClient;
var url =
  "mongodb+srv://arun:arun@polymorfuz-lbemu.mongodb.net/fuohrd?retryWrites=true&w=majority";
var User = require("./user");
var profile = require("./profile");

mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) throw err;
    else {
      // Register

      app.post("/register", (request, response) => {
        var post_data = request.body;
        var mobno = post_data.mobno;
        var name = post_data.name;
        var realpwd = post_data.password;

        User.find({ mobno: mobno }).countDocuments(function (err, obj) {
          if (obj != 0) {
            response.json("User already exists");
          } else {
            profile.find({ mobno: mobno }).countDocuments(function (err, obj) {
              if (obj == 0) {
                response.json("unregistered");
              } else {
                var hashdata = saltHash(realpwd);
                var enc_password = hashdata.passwordHash;
                var salt = hashdata.salt;

                var user_reg = new User({
                  name: name,
                  mobno: mobno,
                  enc_password: enc_password,
                  salt: salt,
                });
                user_reg.save(function (err) {
                  if (err) throw err;
                  profile.findOne({ mobno: mobno }, function (err, obj) {
                    response.json(obj.emp_type);
                  });
                  console.log("Author successfully saved.");
                });
              }
            });
          }
        });
      });
      app.post("/login", (request, response) => {
        var post_data = request.body;

        var ent_password = post_data.password;
        var mobno = post_data.mobno;

        User.find({ mobno: mobno }).countDocuments(function (err, obj) {
          if (obj == 0) {
            response.json("Account not found");
            console.log("Account not found");
          } else {
            User.findOne({ mobno: mobno }, function (err, user) {
              var salt = user.salt;
              var hash_pwd = checkhash(ent_password, salt).passwordHash;
              var enc_password = user.enc_password;
              if (hash_pwd == enc_password) {
                profile.findOne({ mobno: mobno }, function (err, obj) {
                  response.json(obj.emp_type);
                });
                console.log("Login Successful");
              } else {
                response.json("Invalid Credentials");
                console.log("Invalid Credentials");
              }
            });
          }
        });
      });
      app.post("/create_profile", (request, response) => {
        var post_data = request.body;
        var userid = post_data.userid;
        var desig = post_data.desig;
        var age = post_data.age;
        var dob = post_data.dob;
        var gender = post_data.gender;
        var edu_qual = post_data.edu_qual;
        var address = post_data.address;

        var profile_reg = new profile({
          userid: userid,
          desig: desig,
          age: age,
          dob: dob,
          gender: gender,
          edu_qual: edu_qual,
          address: address,
        });

        profile_reg.save(function (err) {
          if (err) throw err;
          console.log("Profile successfully saved.");
          response.json("saved");
        });
      });

      var getprofile = require("./get_profile.js");
      app.use("/getprofile", getprofile);

      var getservice = require("./getservice.js");
      app.use("/getservice", getservice);

      var getleave = require("./getleave.js");
      app.use("/getleave", getleave);

      var getnotify = require("./getnotify.js");
      app.use("/getnotify", getnotify);

      var getholiday = require("./get_holidays.js");
      app.use("/getholiday", getholiday);

      var getmedical = require("./get_medical.js");
      app.use("/getmedical", getmedical);

      var getearn = require("./get_earning.js");
      app.use("/getearning", getearn);

      var getdeduct = require("./get_deduction.js");
      app.use("/getdeduct", getdeduct);

      var getother_earn = require("./get_other_earn.js");
      app.use("/get_other_earn", getother_earn);

      var getother_ded = require("./get_other_deduct.js");
      app.use("/get_other_ded", getother_ded);

      app.listen(3000, function () {
        console.log("connected");
      });
    }
  }
);
