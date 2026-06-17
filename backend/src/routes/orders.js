const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateToken, adminOnly } = require('../auth');

// Create a new order (Checkout)
router.post('/', authenticateToken, async (req, res) => {
  const { items, total_amount, shipping_address, phone, payment_method } = req.body;
  const userId = req.user.id;

  if (!items || items.length === 0 || !total_amount || !shipping_address || !phone || !payment_method) {
    return res.status(400).json({ message: 'Missing required order fields.' });
  }

  try {
    // 1. Validate stocks and calculate items total
    for (const item of items) {
      const products = await db.query('SELECT stock, name FROM products WHERE id = ?', [item.product_id]);
      const product = products && products[0];
      if (!product) {
        return res.status(404).json({ message: `Product "${item.name || item.product_id}" not found.` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for "${product.name}". Available: ${product.stock}, Requested: ${item.quantity}` });
      }
    }

    // 2. Insert order
    const orderResult = await db.run(
      'INSERT INTO orders (user_id, status, total_amount, shipping_address, phone, payment_method) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, 'Pending', parseFloat(total_amount), shipping_address, phone, payment_method]
    );
    const orderId = orderResult.insertId;

    // 3. Insert order items & update product stock
    for (const item of items) {
      // Insert item
      await db.run(
        'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
        [orderId, parseInt(item.product_id), parseInt(item.quantity), parseFloat(item.price)]
      );

      // Deduct stock
      const products = await db.query('SELECT stock FROM products WHERE id = ?', [item.product_id]);
      const currentStock = products[0].stock;
      const newStock = currentStock - parseInt(item.quantity);
      await db.run('UPDATE products SET stock = ? WHERE id = ?', [newStock, parseInt(item.product_id)]);
    }

    res.status(201).json({ message: 'Order placed successfully.', orderId });
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ message: 'Internal server error placing order.' });
  }
});

// Fetch current user's order history
router.get('/my-orders', authenticateToken, async (req, res) => {
  try {
    const orders = await db.query('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC', [req.user.id]);
    
    // Fetch items for each order
    const ordersWithItems = [];
    for (const order of orders) {
      const items = await db.query(
        'SELECT oi.*, p.name as product_name, p.image_url FROM order_items oi JOIN products p ON oi.product_id = p.id WHERE oi.order_id = ?',
        [order.id]
      );
      
      const itemsFormatted = items.map(it => {
        if (it.image_url && !it.image_url.startsWith('http') && !it.image_url.startsWith('data:')) {
          it.image_url = `/uploads/${it.image_url}`;
        }
        return it;
      });

      ordersWithItems.push({
        ...order,
        items: itemsFormatted
      });
    }

    res.json({ orders: ordersWithItems });
  } catch (err) {
    console.error("Fetch my orders error:", err);
    res.status(500).json({ message: 'Internal server error fetching your orders.' });
  }
});

// Fetch all orders (Admin only)
router.get('/', authenticateToken, adminOnly, async (req, res) => {
  try {
    const orders = await db.query(
      'SELECT o.*, u.name as customer_name, u.email as customer_email FROM orders o JOIN users u ON o.user_id = u.id ORDER BY o.created_at DESC',
      []
    );

    const ordersWithItems = [];
    for (const order of orders) {
      const items = await db.query(
        'SELECT oi.*, p.name as product_name, p.image_url FROM order_items oi JOIN products p ON oi.product_id = p.id WHERE oi.order_id = ?',
        [order.id]
      );

      const itemsFormatted = items.map(it => {
        if (it.image_url && !it.image_url.startsWith('http') && !it.image_url.startsWith('data:')) {
          it.image_url = `/uploads/${it.image_url}`;
        }
        return it;
      });

      ordersWithItems.push({
        ...order,
        items: itemsFormatted
      });
    }

    res.json({ orders: ordersWithItems });
  } catch (err) {
    console.error("Fetch all orders error:", err);
    res.status(500).json({ message: 'Internal server error fetching all orders.' });
  }
});

// Update order status (Admin only)
router.put('/:id/status', authenticateToken, adminOnly, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // e.g., 'Pending', 'Packaging', 'In Transit', 'Delivered', 'Cancelled'

  if (!status) {
    return res.status(400).json({ message: 'Status is required.' });
  }

  try {
    // Check if order exists
    const orders = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
    const order = orders && orders[0];
    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    // If order is cancelled, return items to inventory stock
    if (status === 'Cancelled' && order.status !== 'Cancelled') {
      const items = await db.query('SELECT * FROM order_items WHERE order_id = ?', [id]);
      for (const item of items) {
        const products = await db.query('SELECT stock FROM products WHERE id = ?', [item.product_id]);
        if (products && products[0]) {
          const newStock = products[0].stock + item.quantity;
          await db.run('UPDATE products SET stock = ? WHERE id = ?', [newStock, item.product_id]);
        }
      }
    }

    // Update status
    await db.run('UPDATE orders SET status = ? WHERE id = ?', [status, parseInt(id)]);
    res.json({ message: `Order status updated to "${status}".` });
  } catch (err) {
    console.error("Update order status error:", err);
    res.status(500).json({ message: 'Internal server error updating order status.' });
  }
});

// Sales & Inventory Analytics (Admin only)
router.get('/analytics', authenticateToken, adminOnly, async (req, res) => {
  try {
    // 1. Basic Stats
    const salesRows = await db.query("SELECT SUM(total_amount) as totalSales FROM orders WHERE status != 'Cancelled'", []);
    const totalSales = salesRows[0] ? (salesRows[0].totalSales || 0) : 0;

    const ordersRows = await db.query("SELECT COUNT(*) as orderCount FROM orders", []);
    const orderCount = ordersRows[0] ? (ordersRows[0].orderCount || ordersRows[0]['COUNT(*)'] || 0) : 0;

    const productsRows = await db.query("SELECT COUNT(*) as productCount FROM products", []);
    const productCount = productsRows[0] ? (productsRows[0].productCount || productsRows[0]['COUNT(*)'] || 0) : 0;

    const usersRows = await db.query("SELECT COUNT(*) as customerCount FROM users WHERE role = 'customer'", []);
    const customerCount = usersRows[0] ? (usersRows[0].customerCount || usersRows[0]['COUNT(*)'] || 0) : 0;

    // 2. Low stock alert list
    const lowStockItems = await db.query("SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE p.stock <= p.min_stock_level ORDER BY p.stock ASC", []);

    // 3. Category Sales breakdown
    const categorySales = await db.query(`
      SELECT c.name as category_name, SUM(oi.quantity * oi.price) as revenue
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      JOIN categories c ON p.category_id = c.id
      JOIN orders o ON oi.order_id = o.id
      WHERE o.status != 'Cancelled'
      GROUP BY c.id, c.name
      ORDER BY revenue DESC
    `, []);

    // 4. Recent Order volume and revenue (last 7 days - simple representation)
    const recentSales = await db.query(`
      SELECT DATE(created_at) as date, COUNT(*) as count, SUM(total_amount) as sales
      FROM orders
      WHERE status != 'Cancelled'
      GROUP BY DATE(created_at)
      ORDER BY date DESC
      LIMIT 7
    `, []);

    res.json({
      summary: {
        totalSales: parseFloat(totalSales.toFixed(2)),
        orderCount,
        productCount,
        customerCount
      },
      lowStockItems,
      categorySales,
      recentSales
    });
  } catch (err) {
    console.error("Fetch analytics error:", err);
    res.status(500).json({ message: 'Internal server error compiling business analytics.' });
  }
});

module.exports = router;
