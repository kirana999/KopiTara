import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/global.css';

// Data Produk Sementara (Nanti akan diganti dengan data dari Backend/Database)
const dummyProducts = [
  { id: 1, name: 'Kopi Malabar Premium', region: 'Malabar', price: 85000, img: '/images/kopi-1.png' },
  { id: 2, name: 'Kopi Temanggung Roast', region: 'Temanggung', price: 75000, img: '/images/kopi-2.png' },
  { id: 3, name: 'Kopi Aceh Gayo Asli', region: 'Aceh', price: 90000, img: '/images/kopi-3.png' },
  { id: 4, name: 'Kopi Toraja Arabica', region: 'Toraja', price: 88000, img: '/images/kopi-1.png' },
  { id: 5, name: 'Kopi Bali Kintamani', region: 'Bali', price: 82000, img: '/images/kopi-2.png' },
  { id: 6, name: 'Kopi Mandailing Estate', region: 'Medan', price: 86000, img: '/images/kopi-3.png' },
];

// Daftar Daerah untuk Filter
const regions = ['Semua', 'Temanggung', 'Malabar', 'Aceh', 'Toraja', 'Bali', 'Medan'];

const Catalog = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const location = useLocation();

  // Membaca URL jika ada kiriman filter daerah dari Halaman Beranda
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const daerahDariUrl = params.get('daerah');
    
    if (daerahDariUrl && regions.includes(daerahDariUrl)) {
      setActiveFilter(daerahDariUrl);
    }
  }, [location]);

  // Logika Filter Produk
  const filteredProducts = activeFilter === 'Semua' 
    ? dummyProducts 
    : dummyProducts.filter(product => product.region === activeFilter);

  return (
    <div className="catalog-page">
      <Navbar />
      
      {/* HEADER KATALOG */}
      <header className="catalog-header">
        <div className="container">
          <h1>Katalog Produk</h1>
          <p>Eksplorasi kekayaan cita rasa kopi murni dari berbagai penjuru Nusantara.</p>
        </div>
      </header>

      <section className="catalog-main container">
        
        {/* MENU FILTER DAERAH */}
        <div className="catalog-filter-bar">
          {regions.map((region) => (
            <button 
              key={region}
              className={`filter-btn ${activeFilter === region ? 'active' : ''}`}
              onClick={() => setActiveFilter(region)}
            >
              {region}
            </button>
          ))}
        </div>

        {/* GRID PRODUK */}
        <div className="catalog-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="catalog-card" key={product.id}>
                <div className="catalog-img-wrapper">
                  <img src={product.img} alt={product.name} className="catalog-product-img" />
                  <span className="catalog-region-badge">{product.region}</span>
                </div>
                <div className="catalog-info">
                  <h3>{product.name}</h3>
                  <p className="catalog-price">Rp {product.price.toLocaleString('id-ID')}</p>
                  <button className="btn-beli-katalog">Beli Sekarang</button>
                </div>
              </div>
            ))
          ) : (
            <div className="catalog-empty">
              <h3>Maaf, produk untuk daerah ini sedang kosong.</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Catalog;