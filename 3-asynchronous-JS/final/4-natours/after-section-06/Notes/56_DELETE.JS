const express= require('express');
const fs= require('fs');
const app=express();

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// IT WILL NOT CHANGE THE JSON FILE DATA AFTER HITTING THE API as we have not implemented that logic here. We have just written this function in a timepass way, because in real life no one uses files for the data so there is no point in performing operations on it
app.delete('/api/v1/tours/:id', (req,res)=>{  
  const id = req.params.id * 1;   // Simple way to convert a string into integer is multiplying a string looking like string with 1 (i.e., an integer)

  if(id> tours.length){
    return res.status(404).json({
       status: 'fail',
       message: 'Invalid ID' 
    });
  }

  res.status(204).json({
    status: 'success',
    data: {
      tour:null
    }
  });
});

const port=3000;
app.listen(port,()=>{    //this call back function will start executing immediately after server starts listening. 
  console.log(`App running on port ${port}...`); 
})