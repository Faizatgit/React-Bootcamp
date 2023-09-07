const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to sign up a new user
router.post('/signup', async (req, res) => {
  try {
    // Validate and create a new user
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Handle validation errors (e.g., duplicate email/phone)
    res.status(400).json({ error: error.message });
  }
});

// Route to get all users with the role 'admin'
router.get('/admins', async (req, res) => {
  try {
    const adminUsers = await User.find({ role: 'admin' });
    res.json(adminUsers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get all users with the role 'user'
router.get('/users', async (req, res) => {
  try {
    const userUsers = await User.find({ role: 'user' });
    res.json(userUsers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get all users
router.get('/all', async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
