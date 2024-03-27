const express= require('express');
const fs= require('fs');
const app=express();  // Creating an instance of the Express application

const tours= JSON.parse(                // blocking code is written on top level, so that it gets read once n for all, not after everytime client sends a request i.e., in the Get function. that means we are writing it out of an event loop
                                        // parsing it into the json i.e., javascript object format
    fs.readFileSync(`${__dirname}/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req,res)=>{         
    res.status(200).json({
        status:'success',
        results: tours.length,
        data: {
            tours
        }
    });
});

const port=3000;
app.listen(port,()=>{    //this call back function will start executing immediately after server starts listening
  console.log(`App running on port ${port}...`); 
})