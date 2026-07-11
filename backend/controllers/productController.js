// backend/controllers/productController.js
const pool = require('../config/db');

exports.getAllProducts = async (req, res) => {
    try {
        // Menggunakan JOIN agar produk dan variannya keluar bersamaan
        const query = `
            SELECT p.id, p.name, p.description, p.image_url, 
                   pv.packaging_type, pv.weight, pv.price
            FROM products p
            LEFT JOIN product_variants pv ON p.id = pv.product_id
        `;
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};