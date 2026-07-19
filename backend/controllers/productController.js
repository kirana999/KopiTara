const pool = require('../config/db');

// Fungsi untuk mengambil semua data produk dari PostgreSQL
const getAllProducts = async (req, res) => {
  try {
    // Query SQL untuk mengambil semua kolom dan mengurutkannya berdasarkan id
    const result = await pool.query('SELECT * FROM products ORDER BY id ASC');
    
    // Kirim data hasil query (result.rows) ke frontend dalam format JSON
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error saat mengambil data produk:', error.message);
    res.status(500).json({ message: 'Terjadi kesalahan pada server backend.' });
  }
};

module.exports = {
  getAllProducts,
};