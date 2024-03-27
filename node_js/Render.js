const express= require('express');   //to import thr express package
app=express();                       //to make it in an executable state

app.get('',(req,res)=>{
    res.send(`
        <h1>welcome, to home page<h1><a href="/about"> Go to About page</a>
        `);
});

app.get("/about",(req,res)=>{
    res.send(`
    <input type="text" placeholder="User name" value="${req.query.name}"/>  //In browser--> http://localhost:5000/about?name=vinay
    <button>Click</button>
    <a href="/"> Go to home page</a>
    `);
});

//displaying json data
app.get("/help",(req,res)=>{
    res.send([
        {name:'Vinay', email:'vinay@xyz.com'},
        {name:'Moksha', email:'Moksha@xyz.com'},
    ]);
});

app.listen(5000);