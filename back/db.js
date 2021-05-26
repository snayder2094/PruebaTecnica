// db.js

// mongodb driver
require('dotenv').config()
const MongoClient = require("mongodb").MongoClient;

const dbConnectionUrl = "mongodb://user1:pass1234@cluster0-shard-00-00.xwzts.mongodb.net:27017,cluster0-shard-00-01.xwzts.mongodb.net:27017,cluster0-shard-00-02.xwzts.mongodb.net:27017/DB1?ssl=true&replicaSet=atlas-o77jx9-shard-0&authSource=admin&retryWrites=true&w=majority";

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = { initialize };