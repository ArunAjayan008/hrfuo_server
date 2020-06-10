var admin = require("firebase-admin");
var topic1 = "highScores";

var serviceAccount = require("./serverkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hrfuo-2e3e6.firebaseio.com",
});

token1 =
  "e5jpzuuPQ0621tF0ku-PL6:APA91bG7MzVNoqfzc7RF73qXfFipUJPOSoK2PT0tLsD8zUx25VI0-G6J136ke7pP_5SF3sHwFFAl-c5dKZOLpGV0aEV0Y0OprTIIwkgNxFjVEAr_LVOKqGtz3KJMT19MK3tTMaCWzlPM";

admin
  .messaging()
  .subscribeToTopic(token1, topic1)
  .then(function (response) {
    // See the MessagingTopicManagementResponse reference documentation
    // for the contents of response.
    console.log("Successfully subscribed to topic:", response);
  })
  .catch(function (error) {
    console.log(error);
  });
var message = {
  //this may vary according to the message type (single recipient, multicast, topic, et cetera)
  // to: token1,
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

// Send a message to devices subscribed to the provided topic.
admin
  .messaging()
  .sendToTopic(topic1, message)
  .then((response) => {
    // Response is a message ID string.
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.log("Error sending message:", error);
  });

// admin
//   .messaging()
//   .sendToDevice(token1, message)
//   .then(function (response) {
//     console.log("Successfully sent message:", response);
//   })
//   .catch(function (error) {
//     console.log("Error sending message:", error);
//   });
