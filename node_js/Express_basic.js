const express= require('express');   //to import thr express package
app=express();                       //to make it in an executable state

app.get('',(req,res)=>{
    console.log('Request send by the browser>>>' +req.query.name);
    res.send('Response send by the server >>>' +req.query.name);
});

app.get('/about',(req,res)=>{
    res.send('Welcome, this is About page');
});

app.listen(5000);