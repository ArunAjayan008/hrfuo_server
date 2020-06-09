var FCM = require("fcm-node");

var serverKey = require("./serverkey.json"); //put the generated private key path here

var fcm = new FCM(serverKey);

var message = {
  //this may vary according to the message type (single recipient, multicast, topic, et cetera)
  to:
    "c6EmeLT6RByn70E08KZunG:APA91bEC5SMys1RWSM8X7kUM-Tyqx-ldmkVjeL13o337I3Th3XOYjLLl40fSDFlZfMvf9CASu3ck89chgU49_6koN1Sa8HhskydYHDZg7EqHrn6CzHZ0F6B1LbZKmhkkKATentx5Weo5",
  //   collapse_key: "data",

  notification: {
    title: "Hi",
    body: "Hihihhihihi",
  },

  data: {
    //you can send only notification or only data(or include both)
    my_key: "my value",
    my_another_key: "my another value",
  },
};

fcm.send(message, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully sent with response: ", response);
  }
});
