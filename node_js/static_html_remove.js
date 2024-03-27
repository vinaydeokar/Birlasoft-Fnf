const express= require('express');   //to import thr express package
app=express();    

const path= require('path')
const publicPath= path.join(__dirname,'public')
//console.log(publicPath);

app.get("/about",(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get("*",(_,resp)=>{
    resp.sendFile(`${publicPath}/nopage404.html`)
})
app.listen(7000);