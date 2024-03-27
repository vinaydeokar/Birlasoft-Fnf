const express = require('express');
const path = require('path');

const authController = require('../controllers/authControllers');
const router = express.Router();

const authMiddleware = require(path.join(__dirname, '..', 'middleware', 'auth'));
router.post('/signUp', authController.signUp);
router.post('/signIn', authController.signIn);


module.exports = router;