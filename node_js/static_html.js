const express= require('express');   //to import thr express package
app=express();    

const path= require('path')
const publicPath= path.join(__dirname,'public')
//console.log(publicPath);

app.use(express.static(publicPath));

app.listen(5000);