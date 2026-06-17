const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const config = require('../config');
const { authenticateToken, adminOnly } = require('../auth');

// Register a new customer
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required.' });
  }

  try {
    // Check if user already exists
    const existing = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing && existing.length > 0) {
      return res.status(400).json({ message: 'A user with this email already exists.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const result = await db.run(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, 'customer']
    );

    res.status(201).json({ message: 'User registered successfully.', userId: result.insertId });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: 'Internal server error during registration.' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Fetch user
    const users = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = users && users[0];

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Generate JWT Token
    const payload = { id: user.id, name: user.name, email: user.email, role: user.role };
    const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '24h' });

    res.json({
      message: 'Login successful.',
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: 'Internal server error during login.' });
  }
});

// Fetch current user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const users = await db.query('SELECT id, name, email, role, created_at FROM users WHERE id = ?', [req.user.id]);
    const user = users && users[0];

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ user });
  } catch (err) {
    console.error("Profile fetch error:", err);
    res.status(500).json({ message: 'Internal server error fetching profile.' });
  }
});

// Fetch all customers (Admin only)
router.get('/customers', authenticateToken, adminOnly, async (req, res) => {
  try {
    const customers = await db.query('SELECT id, name, email, role, created_at FROM users WHERE role = ?', ['customer']);
    res.json({ customers });
  } catch (err) {
    console.error("Customers list fetch error:", err);
    res.status(500).json({ message: 'Internal server error listing customers.' });
  }
});

module.exports = router;
