const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to authenticate user via JWT
const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'Access Denied: No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password'); // Attach user info to the request object

    if (!req.user) {
      return res.status(401).json({ error: 'Access Denied: Invalid token' });
    }

    next();
  } catch (error) {
    console.error('Authentication error:', error.message);
    res.status(401).json({ error: 'Access Denied: Authentication failed' });
  }
};

module.exports = { authenticate };
