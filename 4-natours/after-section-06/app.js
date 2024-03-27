const express = require('express'); // here the LHS express is function which upon calling will add a bunch of methods to the 'app' variable
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express(); // read first line's comment

/*--------------------------------------------------------------------------------------------------------------
// basic express routing
app.get('/', (req,res)=>{   // when someone hits this url ('/') with the get request, this call back function starts executing
  res.status(200).send('Hello from the server side!');
  //res.status(200).json({message:'Hello from the server side!', type:'String'});  // sending json response to the client
});        

const port=3000;
app.listen(port,()=>{    //this call back function will start executing immediately after server starts listening
  console.log(`App running on port ${port}...`); 
})
--------------------------------------------------------------------------------------------------------------*/

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  //middleware
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  //middleware which is used in tourController.js in a getAllTours() function
  req.requestTime = new Date().toISOString();
  next();
});

// we will start receiving the requests on the app.js file. Then, depending on the routes, it will enter into one of the routes and that's why the directory will be 'routes'
// 3) ROUTES- when we create a router system like this, then we can say that we kind of create sub app for each of these resources
app.use('/api/v1/tours', tourRouter); // using this tourRouter as a middleware
app.use('/api/v1/users', userRouter);

module.exports = app;
