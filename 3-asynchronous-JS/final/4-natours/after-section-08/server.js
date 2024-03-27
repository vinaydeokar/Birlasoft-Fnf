const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');
//console.log(process.env.ACCESS_TOKEN_SECRET);
const DB = process.env.DATABASE.replace(  // in config.env file replacing <PASSWORD> with original password 
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  //.connect(process.env.DATABASE_LOCAL, //this is used connecting to local database
  .connect(DB, {                //this is for connecting to hosted DB //1st aurgument is the connection string, and the second is object having many options used for deprecation warnings
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {              //connect() method will return a promise
    console.log('DB connection successful!');
  });

// mongoose
//   .connect(DB, {                //1st aurgument is the connection string, and the second is object having many options used for deprecation warnings
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   .then(con => {              //connect() method will return a promise
//     console.log(con.connection);
//     console.log('DB connection successful!');
//   });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
