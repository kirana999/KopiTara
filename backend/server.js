const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const productRoutes = require('./routes/productRoutes');

// Gunakan Routes
app.use('/api/products', productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Kopi Tara berjalan di http://localhost:${PORT}`);
});