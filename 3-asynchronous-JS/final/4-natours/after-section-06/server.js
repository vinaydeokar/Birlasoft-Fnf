// motive of making this file is, everything related to express should be put in one file (app.js), and everything related to server should be put in one file (server.js)
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
