const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cron = require('cron');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

const User = require('./models/User');
const Book = require('./models/Book');
const Checkout = require('./models/Checkout');

const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/book');
const checkoutRoutes = require('./routes/checkout');

app.use('/library', authRoutes);
app.use('/library', bookRoutes);
app.use('/library', checkoutRoutes);

// CRON Job
new cron.CronJob('0 0 * * *', async () => {
  const overdueCheckouts = await Checkout.find({
    status: 'issued',
    returnDate: { $lt: new Date() },
  });

  overdueCheckouts.forEach(async (checkout) => {
    checkout.user.lateReturnFine += 10;
    await checkout.user.save();
  });
}, null, true, 'Asia/Kolkata');

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});