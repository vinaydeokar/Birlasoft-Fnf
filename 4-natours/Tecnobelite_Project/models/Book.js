const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  availableCopies: { type: Number, required: true, min: 0 },
  totalCopies: { type: Number, required: true, min: 0 },
});

module.exports = mongoose.model('Book', bookSchema);