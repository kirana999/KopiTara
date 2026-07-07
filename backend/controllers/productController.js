const pool = require('../config/db'); // Pastikan path ke db.js benar

exports.getAllProducts = async (req, res) => {
  try {
    const query = `
      SELECT p.name, p.region, p.description, p.image_url, 
             v.packaging_type, v.weight, v.price 
      FROM products p 
      JOIN product_variants v ON p.id = v.product_id
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};