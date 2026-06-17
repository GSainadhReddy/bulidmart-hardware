const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env
dotenv.config({ path: path.join(__dirname, '../.env') });

module.exports = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || 'buildmart_fallback_secret_key_98765',
  DB_TYPE: process.env.DB_TYPE || 'sqlite', // 'mysql' or 'sqlite'
  DB_FILE: process.env.DB_FILE || path.join(__dirname, '../database.sqlite'),
  MYSQL: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'buildmart'
  }
};
