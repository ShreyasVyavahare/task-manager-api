// src/routes/auth.js

const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

// Signup Route
router.post('/signup', signup);

// Login Route
router.post('/login', login);

router.post('/logout', authenticate, (req, res) => {
    // Remove token from the client's storage or blacklisting mechanism
    // On the server side, you might delete the token from a database or blacklist it
    res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
