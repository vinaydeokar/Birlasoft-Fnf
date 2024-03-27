const Book = require('../models/Book');
const User = require('../models/User');
const Checkout = require('../models/Checkout');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(book);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, genre, publishedDate, availableCopies, totalCopies } = req.body;
    if (!title || !author || !genre || !publishedDate || !availableCopies || !totalCopies) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const book = new Book({
      title,
      author,
      genre,
      publishedDate,
      availableCopies,
      totalCopies,
    });

    await book.save();
    return res.status(201).json({ message: 'Book created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const { title, author, genre, publishedDate, availableCopies, totalCopies } = req.body;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.title = title || book.title;
    book.author = author || book.author;
    book.genre = genre || book.genre;
    book.publishedDate = publishedDate || book.publishedDate;
    book.availableCopies = availableCopies || book.availableCopies;
    book.totalCopies = totalCopies || book.totalCopies;

    await book.save();
    
    return res.status(200).json({ message: 'Book updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.partialUpdateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const updates = req.body;

    const book = await Book.findByIdAndUpdate(bookId, updates, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json({ message: 'Book updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};