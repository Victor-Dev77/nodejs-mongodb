const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
  // Connection URL
  const url = 'mongodb://localhost:27017/esgi-nodejs-db';
  // Database Name
  const dbName = 'esgi-nodejs-db';
  const client = new MongoClient(url);

  try {
    // Use connect method to connect to the Server
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection('dates');
    
    let r = await col.insertOne({ date: new Date() });
    assert.equal(1, r.insertedCount);

    const docs = await col.find({}).toArray();
    console.log(docs);



  } catch (err) {
    console.log(err.stack);
  }

  client.close();
})();