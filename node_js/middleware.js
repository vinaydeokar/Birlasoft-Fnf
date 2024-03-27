const express= require('express');   
app=express();    

const reqFilter=(req, resp, next)=>{
    if(!req.query.age){
        resp.send("Please provide the age")
    }
    else if(req.query.age<18){
        resp.send("You cannot access the page")
    }
    else{
        next();
    }
}

app.use(reqFilter)

app.get('/home',(req,res)=>{
    res.send('Welcome, this is home page');
});

app.listen(7000);