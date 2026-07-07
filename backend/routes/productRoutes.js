const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rute untuk mengambil semua data kopi
router.get('/', productController.getAllProducts);

module.exports = router;