const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const validationMiddleware = require('./middleware/validationMiddleware');

const app = express();

// Middleware
app.use(express.json());
app.use(validationMiddleware);

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
