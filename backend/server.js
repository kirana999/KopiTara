const express = require('express');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes'); // Pastikan ini ada

const app = express();
app.use(cors());
app.use(express.json());

// INI BAGIAN PENTING:
app.use('/api/products', productRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Kopi Tara berjalan di port ${PORT}`);
});