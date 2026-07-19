const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/productController');

// Route untuk mendengarkan request GET dari frontend ke '/api/products'
router.get('/', getAllProducts);

module.exports = router;