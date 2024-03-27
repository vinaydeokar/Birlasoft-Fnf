const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err.message));

  module.exports = app;
//////////////////////////////////////////////////////////////////////////////////////////////////////
// const express = require('express');
// //const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// require('dotenv').config();
// const cluster = require('cluster');
// const os = require('os');

// const app = express();
//const PORT = process.env.PORT || 4000;

// // Middleware
// app.use(bodyParser.json());

// // Routes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     if (cluster.isMaster) {
//       const numCPUs = os.cpus().length;
//       for (let i = 0; i < numCPUs - 1; i++) {
//         cluster.fork();
//       }
//       cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died`);
//         cluster.fork();
//       });
//     } else {
//       // Log instance handling the request
//       app.listen(PORT + cluster.worker.id, () => console.log(`Server running on port ${PORT + cluster.worker.id}`));
//     }
//   })
//   .catch(err => console.error('Error connecting to MongoDB:', err.message));
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Connect to MongoDB
// const mongoose = require('mongoose');
// const mongoURI = 'mongodb://localhost:27017/usersDB';

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     if (cluster.isMaster) {
//       // Master process code
//       const numCPUs = os.cpus().length;
//       for (let i = 0; i < numCPUs - 1; i++) {
//         cluster.fork();
//       }
//       cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died`);
//         cluster.fork();
//       });
//     } else {
//       // Worker process code
//       const app = express();
//       app.use(bodyParser.json());
//       const PORT = process.env.PORT || 4000;
//       app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//       const userRoutes = require('./routes/userRoutes');
//       app.use('/api/users', userRoutes);
//     }
//   })
//   .catch(err => console.error('Error connecting to MongoDB:', err.message));
/////////////////////////////////////////////////////////////////////////////////////////////////////
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cluster = require('cluster');
// const os = require('os');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 4000;

// // Middleware
// app.use(bodyParser.json());

// // Routes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // If master process, create workers
//     if (cluster.isMaster) {
//       const numCPUs = os.cpus().length;
//       for (let i = 0; i < numCPUs - 1; i++) {
//         cluster.fork();
//       }
//       // Handle worker exit
//       cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died`);
//         cluster.fork();
//       });
//     } else {
//       // Start the server
//       app.listen(PORT + cluster.worker.id, () => console.log(`Worker ${cluster.worker.id} running on port ${PORT + cluster.worker.id}`));
//     }
//   })
//   .catch(err => console.error('Error connecting to MongoDB:', err.message));
////////////////////////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Routes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(err => console.error('Error connecting to MongoDB:', err.message));

// module.exports = app;

