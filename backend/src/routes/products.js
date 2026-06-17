const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../db');
const { authenticateToken, adminOnly } = require('../auth');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Get all products (supports search, category filter, sorting, and low stock warnings)
router.get('/', async (req, res) => {
  const { search, category, sort, lowStock } = req.query;

  try {
    let queryStr = 'SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id';
    let params = [];
    let conditions = [];

    if (search) {
      conditions.push('(p.name LIKE ? OR p.description LIKE ?)');
      params.push(`%${search}%`, `%${search}%`);
    }

    if (category) {
      conditions.push('p.category_id = ?');
      params.push(parseInt(category));
    }

    if (lowStock === 'true') {
      conditions.push('p.stock <= p.min_stock_level');
    }

    if (conditions.length > 0) {
      queryStr += ' WHERE ' + conditions.join(' AND ');
    }

    // Sorting
    if (sort === 'price_asc') {
      queryStr += ' ORDER BY p.price ASC';
    } else if (sort === 'price_desc') {
      queryStr += ' ORDER BY p.price DESC';
    } else if (sort === 'rating') {
      queryStr += ' ORDER BY p.rating DESC';
    } else {
      queryStr += ' ORDER BY p.id DESC';
    }

    const products = await db.query(queryStr, params);
    
    // Add full path to locally uploaded images
    const productsFormatted = products.map(p => {
      if (p.image_url && !p.image_url.startsWith('http') && !p.image_url.startsWith('data:')) {
        p.image_url = `/uploads/${p.image_url}`;
      }
      return p;
    });

    res.json({ products: productsFormatted });
  } catch (err) {
    console.error("Fetch products error:", err);
    res.status(500).json({ message: 'Internal server error fetching products.' });
  }
});

// Get a single product details with reviews
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const products = await db.query('SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE p.id = ?', [id]);
    const product = products && products[0];

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    if (product.image_url && !product.image_url.startsWith('http') && !product.image_url.startsWith('data:')) {
      product.image_url = `/uploads/${product.image_url}`;
    }

    // Fetch product reviews
    const reviews = await db.query('SELECT * FROM reviews WHERE product_id = ? ORDER BY created_at DESC', [id]);

    res.json({ product, reviews });
  } catch (err) {
    console.error("Fetch product detail error:", err);
    res.status(500).json({ message: 'Internal server error fetching product details.' });
  }
});

// Create a product (Admin only)
router.post('/', authenticateToken, adminOnly, upload.single('image'), async (req, res) => {
  const { name, category_id, price, stock, unit, description, min_stock_level, is_featured, is_bestseller } = req.body;
  let image_url = req.body.image_url || 'default_product.jpg';

  if (req.file) {
    image_url = req.file.filename;
  }

  if (!name || !category_id || !price || stock === undefined) {
    return res.status(400).json({ message: 'Product name, category, price, and stock are required.' });
  }

  try {
    const result = await db.run(
      'INSERT INTO products (name, category_id, price, stock, unit, description, image_url, min_stock_level, is_featured, is_bestseller) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        name,
        parseInt(category_id),
        parseFloat(price),
        parseInt(stock),
        unit || 'pcs',
        description || '',
        image_url,
        parseInt(min_stock_level || 10),
        parseInt(is_featured || 0),
        parseInt(is_bestseller || 0)
      ]
    );

    res.status(201).json({ message: 'Product created successfully.', productId: result.insertId });
  } catch (err) {
    console.error("Create product error:", err);
    res.status(500).json({ message: 'Internal server error creating product.' });
  }
});

// Update a product (Admin only)
router.put('/:id', authenticateToken, adminOnly, upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { name, category_id, price, stock, unit, description, min_stock_level, is_featured, is_bestseller } = req.body;
  let image_url = req.body.image_url;

  if (req.file) {
    image_url = req.file.filename;
  }

  if (!name || !category_id || !price || stock === undefined) {
    return res.status(400).json({ message: 'Product name, category, price, and stock are required.' });
  }

  try {
    // Check if product exists and get its current image
    const products = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    const product = products && products[0];
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    if (!image_url) {
      // Retain existing image
      image_url = product.image_url;
    }

    await db.run(
      'UPDATE products SET name = ?, category_id = ?, price = ?, stock = ?, unit = ?, description = ?, image_url = ?, min_stock_level = ?, is_featured = ?, is_bestseller = ? WHERE id = ?',
      [
        name,
        parseInt(category_id),
        parseFloat(price),
        parseInt(stock),
        unit || 'pcs',
        description || '',
        image_url,
        parseInt(min_stock_level || 10),
        parseInt(is_featured || 0),
        parseInt(is_bestseller || 0),
        parseInt(id)
      ]
    );

    res.json({ message: 'Product updated successfully.' });
  } catch (err) {
    console.error("Update product error:", err);
    res.status(500).json({ message: 'Internal server error updating product.' });
  }
});

// Delete a product (Admin only)
router.delete('/:id', authenticateToken, adminOnly, async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.run('DELETE FROM products WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found.' });
    }
    res.json({ message: 'Product deleted successfully.' });
  } catch (err) {
    console.error("Delete product error:", err);
    res.status(500).json({ message: 'Internal server error deleting product.' });
  }
});

// Submit a review for a product
router.post('/:id/reviews', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;
  const userName = req.user.name;

  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'A rating between 1 and 5 is required.' });
  }

  try {
    await db.run(
      'INSERT INTO reviews (product_id, user_name, rating, comment) VALUES (?, ?, ?, ?)',
      [parseInt(id), userName, parseInt(rating), comment || '']
    );

    res.status(201).json({ message: 'Review submitted successfully.' });
  } catch (err) {
    console.error("Submit review error:", err);
    res.status(500).json({ message: 'Internal server error submitting review.' });
  }
});

// --- WISHLIST ENDPOINTS ---

// Fetch current user's wishlist
router.get('/wishlist/items', authenticateToken, async (req, res) => {
  try {
    const items = await db.query(
      'SELECT w.*, p.name, p.price, p.image_url, p.stock FROM wishlist w JOIN products p ON w.product_id = p.id WHERE w.user_id = ?',
      [req.user.id]
    );
    
    const itemsFormatted = items.map(item => {
      if (item.image_url && !item.image_url.startsWith('http') && !item.image_url.startsWith('data:')) {
        item.image_url = `/uploads/${item.image_url}`;
      }
      return item;
    });

    res.json({ wishlist: itemsFormatted });
  } catch (err) {
    console.error("Fetch wishlist error:", err);
    res.status(500).json({ message: 'Internal server error fetching wishlist.' });
  }
});

// Add a product to wishlist
router.post('/wishlist/add', authenticateToken, async (req, res) => {
  const { product_id } = req.body;

  if (!product_id) {
    return res.status(400).json({ message: 'Product ID is required.' });
  }

  try {
    await db.run(
      'INSERT INTO wishlist (user_id, product_id) VALUES (?, ?)',
      [req.user.id, parseInt(product_id)]
    );
    res.status(201).json({ message: 'Product added to wishlist.' });
  } catch (err) {
    // Handled duplicate unique index in sql
    if (err.message && err.message.includes('UNIQUE')) {
      return res.status(400).json({ message: 'Product is already in wishlist.' });
    }
    console.error("Add wishlist error:", err);
    res.status(500).json({ message: 'Internal server error adding to wishlist.' });
  }
});

// Remove a product from wishlist
router.delete('/wishlist/remove/:productId', authenticateToken, async (req, res) => {
  const productId = parseInt(req.params.productId);

  try {
    await db.run(
      'DELETE FROM wishlist WHERE user_id = ? AND product_id = ?',
      [req.user.id, productId]
    );
    res.json({ message: 'Product removed from wishlist.' });
  } catch (err) {
    console.error("Remove wishlist error:", err);
    res.status(500).json({ message: 'Internal server error removing from wishlist.' });
  }
});

module.exports = router;
