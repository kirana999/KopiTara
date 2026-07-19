const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'kopitara_db',
  password: 'password_rahasia', // Harus sama dengan isi di docker-compose.yml
  port: 5432,
});

pool.on('connect', () => {
  console.log('Terhubung ke database PostgreSQL di Docker!');
});

module.exports = pool;