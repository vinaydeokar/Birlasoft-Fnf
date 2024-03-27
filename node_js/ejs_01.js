const express= require('express');   //to import thr express package
app=express();    

const path= require('path')
const publicPath= path.join(__dirname,'public')

app.set('view engine', 'ejs') //setting a template engine


app.get("/profile",(_,resp)=>{
    const user={
        name:'Vinay',
        email:'vinay@gmail.com',
        city: 'Nashik',
        skills: ['java','C++','Javascript']
    }
    resp.render('profile',{user});
})

app.listen(7000);

// In browser url- http://localhost:7000/profile