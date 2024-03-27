const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  checkoutDate: { type: Date, default: Date.now },
  returnDate: { type: Date, required: true },
  status: { type: String, enum: ['issued', 'returned'], default: 'issued' },
});

module.exports = mongoose.model('Checkout', checkoutSchema);