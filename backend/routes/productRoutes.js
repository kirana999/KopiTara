const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Pastikan ini adalah fungsi, bukan objek kosong
router.get('/', productController.getAllProducts);

module.exports = router;