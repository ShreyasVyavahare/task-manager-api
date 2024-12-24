const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new task
router.post('/', authenticate, createTask);

// Get all tasks for the logged-in user
router.get('/', authenticate, getTasks);

// Update a task by ID
router.put('/:id', authenticate, updateTask);

// Delete a task by ID
router.delete('/:id', authenticate, deleteTask);

module.exports = router;
