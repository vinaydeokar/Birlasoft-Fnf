const Book = require('../models/Book');
const User = require('../models/User');
const Checkout = require('../models/Checkout');

exports.checkoutBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.user.userId;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (book.availableCopies === 0) {
      return res.status(400).json({ message: 'No available copies for checkout' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const checkout = new Checkout({
      book: book._id,
      user: user._id,
      returnDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days later
    });

    await checkout.save();

    book.availableCopies -= 1;
    await book.save();

    return res.status(200).json({ message: 'Book checked out successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.user.userId;

    const checkout = await Checkout.findOne({ book: bookId, user: userId, status: 'issued' });
    if (!checkout) {
      return res.status(400).json({ message: 'Book is not checked out by the user' });
    }

    checkout.status = 'returned';
    await checkout.save();

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.availableCopies += 1;
    await book.save();

    return res.status(200).json({ message: 'Book returned successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
