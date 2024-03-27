const express= require('express');
const fs= require('fs');
const app=express();

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours/:id', (req,res)=>{   //:id mhanje postman cha url madhla endpoint
  console.log(req.params);
  const id = req.params.id * 1;   // Simple way to convert a string into integer is multiplying a string looking like string with 1 (i.e., an integer)

  const tour = tours.find(el => el.id === id);  //traversing through the json file

  //if(id> tours.length){
  if(!tour){
    return res.status(404).json({
       status: 'fail',
       message: 'Invalid ID' 
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});

const port=3000;
app.listen(port,()=>{    //this call back function will start executing immediately after server starts listening. 
  console.log(`App running on port ${port}...`); 
})