const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateToken, adminOnly } = require('../auth');

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await db.query('SELECT * FROM categories ORDER BY name ASC', []);
    res.json({ categories });
  } catch (err) {
    console.error("Fetch categories error:", err);
    res.status(500).json({ message: 'Internal server error listing categories.' });
  }
});

// Add a category (Admin only)
router.post('/', authenticateToken, adminOnly, async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Category name is required.' });
  }

  try {
    const existing = await db.query('SELECT * FROM categories WHERE name = ?', [name]);
    if (existing && existing.length > 0) {
      return res.status(400).json({ message: 'A category with this name already exists.' });
    }

    const result = await db.run('INSERT INTO categories (name, description) VALUES (?, ?)', [name, description || '']);
    res.status(201).json({ message: 'Category added successfully.', categoryId: result.insertId });
  } catch (err) {
    console.error("Add category error:", err);
    res.status(500).json({ message: 'Internal server error adding category.' });
  }
});

// Delete a category (Admin only)
router.delete('/:id', authenticateToken, adminOnly, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.run('DELETE FROM categories WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Category not found.' });
    }
    res.json({ message: 'Category deleted successfully.' });
  } catch (err) {
    console.error("Delete category error:", err);
    res.status(500).json({ message: 'Internal server error deleting category.' });
  }
});

module.exports = router;
