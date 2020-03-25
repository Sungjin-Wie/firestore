const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.storage = functions.firestore
  .document("collection/document")
  .onUpdate((change, context) => {
    const { Storage } = require("@google-cloud/storage");
    const storage = new Storage();
    const bucket = storage.bucket("fir-3-9d3bf.appspot.com");

    const options = {
      destination: "public/hello_world.jpeg"
    };

    bucket.upload("hello_world.jpeg", options);

    return 0;
  });
