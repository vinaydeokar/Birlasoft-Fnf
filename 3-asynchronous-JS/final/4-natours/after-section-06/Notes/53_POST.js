const express= require('express');
const fs= require('fs');
const app=express();

app.use(express.json()); //'express.json()' is middleware- a middleware which is simply a function that can modify the incoming data. That's why it's called middleware as it stands between request and response 
                         // in order to add the data from the body to the request we need this middleware

const tours= JSON.parse( 
    fs.readFileSync(`${__dirname}/data/tours-simple.json`)
);

app.post('/api/v1/tours', (req,res)=>{ 
    //console.log(req.body);  // body is the property which is going to be available for request as we used the above middleware
    
    const newId= tours[tours.length -1].id+1;  // creating new Id to insert a body received into the exixting json file
    const newTour= Object.assign({id:newId}, req.body); // 'Object.assign' which basically allows us to create a new object by merging to existing object together. 1st object-{id:newId}, 2nd object-req.body
    tours.push(newTour);  // aata ithe json madhe newTour ahe pan te file madhe persist karnyasathi khalcha code

    fs.writeFile(`${__dirname}/data/tours-simple.json`, JSON.stringify(tours), // need to stingify before storing into file
        err=>{  //we have not used writeFileSync as we are in the event callback loop and don't want to block the thread
        res.status(201).json({
            status:'success',
            data:{
                tour: newTour
            }                                                                               //
        });
        }
    );
//res.send('done');
});

const port=3000;
app.listen(port,()=>{    //this call back function will start executing immediately after server starts listening. 
  console.log(`App running on port ${port}...`); 
})