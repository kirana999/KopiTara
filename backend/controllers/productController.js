// backend/controllers/productController.js
const pool = require('../config/db');

exports.getAllProducts = async (req, res) => {
    try {
        // Menggunakan JOIN agar produk dan variannya keluar bersamaan
        const query = `
            SELECT id, name, description, image_url, 
                   packaging_type, weight, price
            FROM products
            ORDER BY id ASC
        `;
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};