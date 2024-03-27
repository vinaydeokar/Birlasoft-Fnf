
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/auth');

// Private endpoints
router.use(authMiddleware.authenticateToken);

router.get('/books', bookController.getAllBooks);
router.get('/books/:bookId', bookController.getBookById);
router.post('/book', authMiddleware.authenticateAdmin, bookController.createBook);
router.put('/book/:bookId', authMiddleware.authenticateAdmin, bookController.updateBook);
router.patch('/book/:bookId', authMiddleware.authenticateAdmin, bookController.partialUpdateBook);


module.exports = router;