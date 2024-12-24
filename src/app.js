// src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks'); // Import task routes

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json()); // Add parentheses to invoke middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
connectDB();


// Routes
app.use('/api/auth', authRoutes);

// Register the route
app.use('/api/tasks', taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    console.log(`${req.method} ${req.url}`);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;

  