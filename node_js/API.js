const dbConnect = require('./mongodb');
const express = require('express');
const mongodb = require('mongodb'); //to get ObjectId for _id in case of delete api
const app = express();

app.use(express.json()); //for post & put api

app.get('/',async (res,resp)=>{
    let data = await dbConnect();
    data= await data.find().toArray();
    resp.send(data);
});
//http://localhost:5000

app.post("/", async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)
});
//In body- 
// {
// "name":"i phone 16 max",
// "brand":"apple",
// "price":2500,
// "category":"mobile"
// }
//http://localhost:5000

app.put("/:name", async (req,resp)=>{        //getting input from a request params
    let data = await dbConnect();
    let result = data.updateOne(
        {name: req.params.name},            //getting input from a request params
        {$set:req.body}                     //setting an updated data into the db by getting values from body of a postman
    )
    resp.send({result:"update"})
});
//In body- 
// {
// "name":"i phone 16 max",
// "brand":"apple",
// "price":2500,
// "category":"mobile"
// }
//http://localhost:5000/i phone 15 max   //put name according to MongoDB data for a collection which you want to update

app.delete("/:id", async (req,resp)=>{
    console.log(req.params.id)        
    let data = await dbConnect();
    let result = data.deleteOne({_id: new mongodb.ObjectId(req.params.id)}) // using id in this way because, it is given in this way in the mongoDB
    resp.send("done")
});
//http://localhost:5000/652f8e2ec427d245007b0e16  //add key according to requirement from MongoDB

app.listen(5000)