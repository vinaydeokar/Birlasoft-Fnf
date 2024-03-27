const {MongoClient} = require('mongodb')  //importing MongoClient object from mongodb
//const {MongoClient}= require('mongodb').MongoClient;   // we can also use like this instead of upper line
//const url= 'mongodb://localhost:27017';  
const url='mongodb://127.0.0.1:27017'   // used this because upper line didn't workS
const databaseName='e-comm'
const client= new MongoClient(url); //This line creates a new MongoClient instance that you can use to connect to your MongoDB database.

async function getData()           // to use await, function must be async
{
    let result = await client.connect();  //client.connect() will return promises which may take time and that will be automatically handeled by await
    db= result.db(databaseName);
    collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data)
}

getData();