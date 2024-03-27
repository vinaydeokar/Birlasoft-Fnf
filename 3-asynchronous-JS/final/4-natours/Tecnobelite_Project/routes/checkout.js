const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');
const authMiddleware = require('../middleware/auth');

router.post('/checkout/:bookId', authMiddleware.authenticateToken, checkoutController.checkoutBook);
router.post('/checkout/return-book/:bookId', authMiddleware.authenticateToken, checkoutController.returnBook);

module.exports = router;