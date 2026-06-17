const fs = require('fs');
const path = require('path');
const config = require('./config');

let dbType = config.DB_TYPE;
let dbInstance = null;
let jsonDbData = null;
const JSON_DB_FILE = path.join(__dirname, '../database.json');

// --- JSON Fallback Database Engine ---
function loadJsonDb() {
  if (jsonDbData) return;
  if (fs.existsSync(JSON_DB_FILE)) {
    try {
      jsonDbData = JSON.parse(fs.readFileSync(JSON_DB_FILE, 'utf8'));
    } catch (e) {
      console.error("Error reading JSON DB file, initializing new database", e);
      jsonDbData = {};
    }
  } else {
    jsonDbData = {};
  }
  
  // Ensure tables exist in JSON
  const tables = ['users', 'categories', 'products', 'orders', 'order_items', 'reviews', 'wishlist'];
  tables.forEach(table => {
    if (!jsonDbData[table]) jsonDbData[table] = [];
  });
  saveJsonDb();
}

function saveJsonDb() {
  fs.writeFileSync(JSON_DB_FILE, JSON.stringify(jsonDbData, null, 2), 'utf8');
}

// Simple SQL simulator for JSON fallback database
function executeJsonQuery(sql, params = []) {
  loadJsonDb();
  const sqlClean = sql.replace(/\s+/g, ' ').trim();
  
  // 1. SELECT FROM users WHERE email = ?
  if (sqlClean.match(/SELECT \* FROM users WHERE email = \?/i)) {
    const email = params[0];
    const user = jsonDbData.users.find(u => u.email === email);
    return user ? [user] : [];
  }
  // SELECT * FROM users WHERE id = ?
  if (sqlClean.match(/SELECT \* FROM users WHERE id = \?/i)) {
    const id = parseInt(params[0]);
    const user = jsonDbData.users.find(u => u.id === id);
    return user ? [user] : [];
  }
  // SELECT * FROM users
  if (sqlClean.match(/SELECT \* FROM users/i)) {
    return jsonDbData.users;
  }
  // INSERT INTO users
  if (sqlClean.match(/INSERT INTO users \(/i)) {
    const id = jsonDbData.users.length > 0 ? Math.max(...jsonDbData.users.map(u => u.id)) + 1 : 1;
    const newUser = {
      id,
      name: params[0],
      email: params[1],
      password: params[2],
      role: params[3],
      created_at: new Date().toISOString()
    };
    jsonDbData.users.push(newUser);
    saveJsonDb();
    return { insertId: id, affectedRows: 1 };
  }

  // 2. CATEGORIES
  if (sqlClean.match(/SELECT \* FROM categories/i)) {
    return jsonDbData.categories;
  }
  if (sqlClean.match(/INSERT INTO categories \(/i)) {
    const id = jsonDbData.categories.length > 0 ? Math.max(...jsonDbData.categories.map(c => c.id)) + 1 : 1;
    const newCat = {
      id,
      name: params[0],
      description: params[1] || ''
    };
    jsonDbData.categories.push(newCat);
    saveJsonDb();
    return { insertId: id, affectedRows: 1 };
  }
  if (sqlClean.match(/DELETE FROM categories WHERE id = \?/i)) {
    const id = parseInt(params[0]);
    const initialLen = jsonDbData.categories.length;
    jsonDbData.categories = jsonDbData.categories.filter(c => c.id !== id);
    saveJsonDb();
    return { affectedRows: initialLen - jsonDbData.categories.length };
  }

  // 3. PRODUCTS
  if (sqlClean.match(/SELECT \* FROM products WHERE id = \?/i)) {
    const id = parseInt(params[0]);
    const product = jsonDbData.products.find(p => p.id === id);
    return product ? [product] : [];
  }
  if (sqlClean.match(/SELECT \* FROM products/i)) {
    // We may have category filtering
    let results = [...jsonDbData.products];
    return results;
  }
  if (sqlClean.match(/INSERT INTO products \(/i)) {
    const id = jsonDbData.products.length > 0 ? Math.max(...jsonDbData.products.map(p => p.id)) + 1 : 1;
    const newProd = {
      id,
      name: params[0],
      category_id: parseInt(params[1]),
      price: parseFloat(params[2]),
      stock: parseInt(params[3]),
      unit: params[4],
      description: params[5],
      image_url: params[6],
      min_stock_level: parseInt(params[7] || 10),
      is_featured: parseInt(params[8] || 0),
      is_bestseller: parseInt(params[9] || 0),
      rating: 0.0,
      rating_count: 0
    };
    jsonDbData.products.push(newProd);
    saveJsonDb();
    return { insertId: id, affectedRows: 1 };
  }
  if (sqlClean.match(/UPDATE products SET name = \?, category_id = \?, price = \?, stock = \?, unit = \?, description = \?, image_url = \?, min_stock_level = \?, is_featured = \?, is_bestseller = \? WHERE id = \?/i)) {
    const id = parseInt(params[10]);
    const index = jsonDbData.products.findIndex(p => p.id === id);
    if (index !== -1) {
      jsonDbData.products[index] = {
        ...jsonDbData.products[index],
        name: params[0],
        category_id: parseInt(params[1]),
        price: parseFloat(params[2]),
        stock: parseInt(params[3]),
        unit: params[4],
        description: params[5],
        image_url: params[6],
        min_stock_level: parseInt(params[7]),
        is_featured: parseInt(params[8]),
        is_bestseller: parseInt(params[9])
      };
      saveJsonDb();
      return { affectedRows: 1 };
    }
    return { affectedRows: 0 };
  }
  if (sqlClean.match(/UPDATE products SET stock = \? WHERE id = \?/i)) {
    const stock = parseInt(params[0]);
    const id = parseInt(params[1]);
    const index = jsonDbData.products.findIndex(p => p.id === id);
    if (index !== -1) {
      jsonDbData.products[index].stock = stock;
      saveJsonDb();
      return { affectedRows: 1 };
    }
    return { affectedRows: 0 };
  }
  if (sqlClean.match(/DELETE FROM products WHERE id = \?/i)) {
    const id = parseInt(params[0]);
    const initialLen = jsonDbData.products.length;
    jsonDbData.products = jsonDbData.products.filter(p => p.id !== id);
    saveJsonDb();
    return { affectedRows: initialLen - jsonDbData.products.length };
  }

  // 4. WISHLIST
  if (sqlClean.match(/SELECT w\.\*, p\.name, p\.price, p\.image_url, p\.stock FROM wishlist w JOIN products p ON w\.product_id = p\.id WHERE w\.user_id = \?/i)) {
    const userId = parseInt(params[0]);
    const list = jsonDbData.wishlist.filter(w => w.user_id === userId);
    return list.map(w => {
      const p = jsonDbData.products.find(prod => prod.id === w.product_id) || {};
      return {
        id: w.id,
        user_id: w.user_id,
        product_id: w.product_id,
        name: p.name,
        price: p.price,
        image_url: p.image_url,
        stock: p.stock
      };
    });
  }
  if (sqlClean.match(/INSERT INTO wishlist \(user_id, product_id\) VALUES \(\?, \?\)/i)) {
    const userId = parseInt(params[0]);
    const productId = parseInt(params[1]);
    // check duplicate
    const exists = jsonDbData.wishlist.find(w => w.user_id === userId && w.product_id === productId);
    if (exists) return { insertId: exists.id, affectedRows: 0 };
    const id = jsonDbData.wishlist.length > 0 ? Math.max(...jsonDbData.wishlist.map(w => w.id)) + 1 : 1;
    jsonDbData.wishlist.push({ id, user_id: userId, product_id: productId });
    saveJsonDb();
    return { insertId: id, affectedRows: 1 };
  }
  if (sqlClean.match(/DELETE FROM wishlist WHERE id = \? AND user_id = \?/i)) {
    const id = parseInt(params[0]);
    const userId = parseInt(params[1]);
    const initialLen = jsonDbData.wishlist.length;
    jsonDbData.wishlist = jsonDbData.wishlist.filter(w => !(w.id === id && w.user_id === userId));
    saveJsonDb();
    return { affectedRows: initialLen - jsonDbData.wishlist.length };
  }
  if (sqlClean.match(/DELETE FROM wishlist WHERE user_id = \? AND product_id = \?/i)) {
    const userId = parseInt(params[0]);
    const productId = parseInt(params[1]);
    const initialLen = jsonDbData.wishlist.length;
    jsonDbData.wishlist = jsonDbData.wishlist.filter(w => !(w.user_id === userId && w.product_id === productId));
    saveJsonDb();
    return { affectedRows: initialLen - jsonDbData.wishlist.length };
  }

  // 5. REVIEWS
  if (sqlClean.match(/SELECT \* FROM reviews WHERE product_id = \?/i)) {
    const productId = parseInt(params[0]);
    return jsonDbData.reviews.filter(r => r.product_id === productId);
  }
  if (sqlClean.match(/INSERT INTO reviews \(product_id, user_name, rating, comment\) VALUES \(\?, \?, \?, \?\)/i)) {
    const id = jsonDbData.reviews.length > 0 ? Math.max(...jsonDbData.reviews.map(r => r.id)) + 1 : 1;
    const newRev = {
      id,
      product_id: parseInt(params[0]),
      user_name: params[1],
      rating: parseInt(params[2]),
      comment: params[3],
      created_at: new Date().toISOString()
    };
    jsonDbData.reviews.push(newRev);
    
    // Update product average rating
    const prodId = parseInt(params[0]);
    const prodIndex = jsonDbData.products.findIndex(p => p.id === prodId);
    if (prodIndex !== -1) {
      const pReviews = jsonDbData.reviews.filter(r => r.product_id === prodId);
      const totalStars = pReviews.reduce((sum, r) => sum + r.rating, 0);
      jsonDbData.products[prodIndex].rating = parseFloat((totalStars / pReviews.length).toFixed(1));
      jsonDbData.products[prodIndex].rating_count = pReviews.length;
    }
    
    saveJsonDb();
    return { insertId: id, affectedRows: 1 };
  }

  // 6. ORDERS
  if (sqlClean.match(/INSERT INTO orders \(user_id, status, total_amount, shipping_address, phone, payment_method\) VALUES \(\?, \?, \?, \?, \?, \?\)/i)) {
    const id = jsonDbData.orders.length > 0 ? Math.max(...jsonDbData.orders.map(o => o.id)) + 1 : 1;
    const newOrder = {
      id,
      user_id: parseInt(params[0]),
      status: params[1],
      total_amount: parseFloat(params[2]),
      shipping_address: params[3],
      phone: params[4],
      payment_method: params[5],
      created_at: new Date().toISOString()
    };
    jsonDbData.orders.push(newOrder);
    saveJsonDb();
    return { insertId: id, affectedRows: 1 };
  }
  if (sqlClean.match(/INSERT INTO order_items \(order_id, product_id, quantity, price\) VALUES \(\?, \?, \?, \?\)/i)) {
    const id = jsonDbData.order_items.length > 0 ? Math.max(...jsonDbData.order_items.map(oi => oi.id)) + 1 : 1;
    const newOrderItem = {
      id,
      order_id: parseInt(params[0]),
      product_id: parseInt(params[1]),
      quantity: parseInt(params[2]),
      price: parseFloat(params[3])
    };
    jsonDbData.order_items.push(newOrderItem);
    saveJsonDb();
    return { insertId: id, affectedRows: 1 };
  }
  if (sqlClean.match(/SELECT \* FROM orders WHERE user_id = \?/i)) {
    const userId = parseInt(params[0]);
    return jsonDbData.orders.filter(o => o.user_id === userId);
  }
  if (sqlClean.match(/SELECT \* FROM orders WHERE id = \?/i)) {
    const id = parseInt(params[0]);
    const order = jsonDbData.orders.find(o => o.id === id);
    return order ? [order] : [];
  }
  if (sqlClean.match(/SELECT \* FROM orders ORDER BY/i) || sqlClean.match(/SELECT \* FROM orders/i)) {
    return [...jsonDbData.orders].sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
  }
  if (sqlClean.match(/SELECT \* FROM order_items WHERE order_id = \?/i)) {
    const orderId = parseInt(params[0]);
    const items = jsonDbData.order_items.filter(oi => oi.order_id === orderId);
    return items.map(oi => {
      const p = jsonDbData.products.find(prod => prod.id === oi.product_id) || {};
      return {
        ...oi,
        product_name: p.name,
        image_url: p.image_url
      };
    });
  }
  if (sqlClean.match(/UPDATE orders SET status = \? WHERE id = \?/i)) {
    const status = params[0];
    const id = parseInt(params[1]);
    const index = jsonDbData.orders.findIndex(o => o.id === id);
    if (index !== -1) {
      jsonDbData.orders[index].status = status;
      saveJsonDb();
      return { affectedRows: 1 };
    }
    return { affectedRows: 0 };
  }

  console.log("JSON SIMULATOR: Unhandled query ->", sqlClean);
  return [];
}

// Initialize tables in SQL
const createTableQueries = [
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'customer',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    description TEXT
  )`,
  `CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category_id INTEGER,
    price REAL NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    unit TEXT DEFAULT 'pcs',
    description TEXT,
    image_url TEXT,
    min_stock_level INTEGER DEFAULT 10,
    rating REAL DEFAULT 0.0,
    rating_count INTEGER DEFAULT 0,
    is_featured INTEGER DEFAULT 0,
    is_bestseller INTEGER DEFAULT 0,
    FOREIGN KEY(category_id) REFERENCES categories(id)
  )`,
  `CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    status TEXT DEFAULT 'Pending',
    total_amount REAL NOT NULL,
    shipping_address TEXT NOT NULL,
    phone TEXT NOT NULL,
    payment_method TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`,
  `CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY(order_id) REFERENCES orders(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
  )`,
  `CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    user_name TEXT NOT NULL,
    rating INTEGER NOT NULL,
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(product_id) REFERENCES products(id)
  )`,
  `CREATE TABLE IF NOT EXISTS wishlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    product_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(product_id) REFERENCES products(id),
    UNIQUE(user_id, product_id)
  )`
];

function seedDatabase(dbQuery, dbRun) {
  // Check if categories already exist
  dbQuery("SELECT COUNT(*) as count FROM categories", []).then(rows => {
    const count = rows[0] ? (rows[0].count || rows[0]['COUNT(*)'] || 0) : 0;
    if (count === 0) {
      console.log("Seeding initial categories...");
      const categories = [
        ['Cement', 'High quality binding cement and concrete mixtures.'],
        ['Bricks', 'Solid clay bricks, fly ash bricks, and hollow blocks.'],
        ['Steel & Iron', 'Reinforcement steel rods, bars, and binding wire.'],
        ['Paints', 'Interior and exterior emulsion paints, primers, and brushes.'],
        ['Plumbing Materials', 'PVC pipes, elbows, taps, and plumbing adhesives.'],
        ['Electrical Supplies', 'Copper wires, switches, sockets, and LED lighting.'],
        ['Power Tools', 'Drills, grinders, cutters, and sawing tools.'],
        ['Hand Tools', 'Hammers, screwdrivers, wrenches, and tape measures.'],
        ['Safety Equipment', 'Helmets, safety boots, gloves, and reflective vests.'],
        ['Home Improvement', 'Door handles, cabinet locks, screws, and nails.']
      ];
      
      categories.forEach(cat => {
        dbRun("INSERT INTO categories (name, description) VALUES (?, ?)", cat);
      });

      // Seed initial products
      const products = [
        ['UltraTech Premium Cement', 1, 450.0, 150, 'bag', 'UltraTech Cement is India\'s No. 1 cement. Perfect for strong structures.', 'ultratech_cement.jpg', 20, 1, 0],
        ['Red Clay Bricks (Standard)', 2, 8.0, 5000, 'pcs', 'Standard kiln-burnt clay bricks for general wall construction.', 'red_bricks.jpg', 500, 0, 1],
        ['TMT Steel Rods 12mm', 3, 62.0, 80, 'pcs', 'Grade FE 500 High-strength deformed steel bars for columns and beams.', 'steel_rods.jpg', 25, 1, 1],
        ['Asian Paints Apex White 20L', 4, 3800.0, 15, 'pcs', 'Apex Exterior Emulsion is a smooth water-based exterior wall finish.', 'apex_paint.jpg', 5, 0, 0],
        ['Supreme PVC Pipe 4 inch 3m', 5, 450.0, 45, 'pcs', 'Heavy duty PVC pipe for plumbing and drainage systems.', 'pvc_pipe.jpg', 10, 0, 0],
        ['Finolex 2.5 Sq mm Wire 90m', 6, 2100.0, 30, 'pcs', 'Flame retardant industrial copper wire for home wiring.', 'finolex_wire.jpg', 8, 1, 0],
        ['Bosch Hammer Drill 600W', 7, 3200.0, 8, 'pcs', 'Bosch professional impact drill with variable speed setting.', 'bosch_drill.jpg', 3, 0, 1],
        ['Stanley Claw Hammer 450g', 8, 380.0, 25, 'pcs', 'High carbon steel hammer head with comfortable fiberglass handle.', 'claw_hammer.jpg', 5, 0, 0],
        ['Karam Safety Helmet Yellow', 9, 220.0, 12, 'pcs', 'Industrial safety helmet made of high quality plastic. ISI marked.', 'safety_helmet.jpg', 15, 0, 0],
        ['Steel Screws Box (1 inch)', 10, 150.0, 50, 'box', 'Box of 100 high-tensile steel self-tapping wood screws.', 'screws_box.jpg', 10, 0, 0]
      ];

      setTimeout(() => {
        // Need categories to be inserted first so we can query category IDs
        dbQuery("SELECT * FROM categories", []).then(catRows => {
          products.forEach(p => {
            const catName = categories[p[1]-1][0];
            const catObj = catRows.find(c => c.name === catName);
            const catId = catObj ? catObj.id : p[1];
            dbRun("INSERT INTO products (name, category_id, price, stock, unit, description, image_url, min_stock_level, is_featured, is_bestseller) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
              [p[0], catId, p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]]
            );
          });
        });
      }, 1000);
    }
  });

  // Seed default admin and user if no users exist
  dbQuery("SELECT COUNT(*) as count FROM users", []).then(rows => {
    const count = rows[0] ? (rows[0].count || rows[0]['COUNT(*)'] || 0) : 0;
    if (count === 0) {
      console.log("Seeding default admin and customer accounts...");
      const bcrypt = require('bcryptjs');
      const adminPass = bcrypt.hashSync('admin123', 10);
      const userPass = bcrypt.hashSync('user123', 10);
      
      dbRun("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", ['BuildMart Admin', 'admin@buildmart.com', adminPass, 'admin']);
      dbRun("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", ['John Doe', 'john@gmail.com', userPass, 'customer']);
    }
  });
}

// Set up MySQL connection pool
function initMySQL() {
  const mysql = require('mysql2');
  const pool = mysql.createPool({
    host: config.MYSQL.host,
    user: config.MYSQL.user,
    password: config.MYSQL.password,
    database: config.MYSQL.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  const promisePool = pool.promise();
  
  dbInstance = {
    query: async (sql, params = []) => {
      // Replace sqlite compatibility keywords if MySQL
      let mySqlStr = sql.replace(/AUTOINCREMENT/gi, 'AUTO_INCREMENT');
      const [rows] = await promisePool.query(mySqlStr, params);
      return rows;
    },
    run: async (sql, params = []) => {
      let mySqlStr = sql.replace(/AUTOINCREMENT/gi, 'AUTO_INCREMENT');
      const [result] = await promisePool.execute(mySqlStr, params);
      return { insertId: result.insertId, affectedRows: result.affectedRows };
    },
    get: async (sql, params = []) => {
      let mySqlStr = sql.replace(/AUTOINCREMENT/gi, 'AUTO_INCREMENT');
      const [rows] = await promisePool.query(mySqlStr, params);
      return rows[0] || null;
    }
  };

  console.log("Connected to MySQL Database.");
  // Setup tables
  setupTables();
}

// Set up SQLite connection
function initSQLite() {
  const sqlite3 = require('sqlite3').verbose();
  const db = new sqlite3.Database(config.DB_FILE, (err) => {
    if (err) {
      console.error("Failed to connect to SQLite. Falling back to JSON database.", err);
      dbType = 'json';
      initJsonDb();
      return;
    }
    console.log("Connected to SQLite Database at " + config.DB_FILE);
  });

  dbInstance = {
    query: (sql, params = []) => {
      return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        });
      });
    },
    run: (sql, params = []) => {
      return new Promise((resolve, reject) => {
        db.run(sql, params, function(err) {
          if (err) reject(err);
          else resolve({ insertId: this.lastID, affectedRows: this.changes });
        });
      });
    },
    get: (sql, params = []) => {
      return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
          if (err) reject(err);
          else resolve(row || null);
        });
      });
    }
  };

  setupTables();
}

// Set up JSON Database
function initJsonDb() {
  console.log("Configured to use Portable JSON File Database at " + JSON_DB_FILE);
  loadJsonDb();
  dbInstance = {
    query: async (sql, params = []) => {
      return executeJsonQuery(sql, params);
    },
    run: async (sql, params = []) => {
      return executeJsonQuery(sql, params);
    },
    get: async (sql, params = []) => {
      const rows = executeJsonQuery(sql, params);
      return rows[0] || null;
    }
  };
  
  // Seed database
  seedDatabase(dbInstance.query, dbInstance.run);
}

function setupTables() {
  // Create all tables in order
  let p = Promise.resolve();
  createTableQueries.forEach(query => {
    p = p.then(() => dbInstance.run(query).catch(err => {
      console.error("Error creating table. Query: ", query.substring(0, 50), err.message);
    }));
  });
  
  p.then(() => {
    console.log("Database schema initialized successfully.");
    seedDatabase(dbInstance.query, dbInstance.run);
  });
}

// Initial Database selection
try {
  if (dbType === 'mysql') {
    initMySQL();
  } else if (dbType === 'sqlite') {
    initSQLite();
  } else {
    initJsonDb();
  }
} catch (e) {
  console.error("Critical error in Database initialization. Defaulting to JSON DB.", e);
  initJsonDb();
}

module.exports = {
  query: (sql, params) => dbInstance.query(sql, params),
  run: (sql, params) => dbInstance.run(sql, params),
  get: (sql, params) => dbInstance.get(sql, params),
  getDbType: () => dbType
};
