const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config');

// Initialize database (runs schema setup and seeding automatically)
const db = require('./db');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Static route for product image uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/invoices', require('./routes/invoices'));

// Root endpoint status check
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    message: 'BuildMart API is running',
    database: db.getDbType(),
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(config.PORT, '0.0.0.0', () => {
  console.log(`=========================================`);
  console.log(` BuildMart Server Running on Port ${config.PORT} `);
  console.log(` API Endpoint: http://localhost:${config.PORT} `);
  console.log(` Database: ${db.getDbType().toUpperCase()} `);
  console.log(`=========================================`);
});
