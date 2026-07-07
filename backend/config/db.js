const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',           // User default PostgreSQL
  host: 'localhost',          // Karena database ada di komputer kamu
  database: 'db_kopitara',    // Nama database yang kita buat tadi
  password: '123456',  // GANTI dengan password yang kamu buat saat instal PostgreSQL
  port: 5432,                 // Port default PostgreSQL
});

module.exports = pool;