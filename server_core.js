
var mongodb = require('mongodb');
var objectId = mongodb.objectId;
var crypto = require('crypto');

var mongocl = mongodb.MongoClient;
var url = "mongodb://localhost:27017";

mongocl.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) {
        console.log("error", err);
    }
    else {
        app.post('/profiledata', (request, response) => {
            var post_data = request.body;
            var profileid = post_data.profid;
            var db=client.db('employee');

            db.collection('user')
            .find({'mobno':profileid}).count(function(err,number){
                if (number == 0) {
                    response.json("Account not found");
                    console.log("Account not found");
                }
                else{
                    db.collection('user')
                    findOne({'mobno':profileid},function(err,user){
                        var name=user.name;
                        
                    })
                }
            })
        });
    }
});