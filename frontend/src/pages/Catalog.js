import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

const brandCategories = ['Semua Produk', 'Kopi Otok (Sachet)', 'Arabica Premium', 'Robusta Authentic'];

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Semua Produk');
  const [selectedSizes, setSelectedSizes] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0); // Untuk navigasi slider

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/products'); 
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Gagal memuat data produk:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const filteredProducts = activeFilter === 'Semua Produk'
    ? products
    : products.filter(product => product.category === activeFilter);

  // Reset indeks slider jika filter kategori diganti
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const handlePrev = () => {
    setCurrentIndex(prev => prev === 0 ? filteredProducts.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev === filteredProducts.length - 1 ? 0 : prev + 1);
  };

  const currentProduct = filteredProducts[currentIndex];

  return (
    <div className="catalog-page">
      <Navbar />
      
      <header className="catalog-header">
        <div className="container mx-auto px-4">
          <h1>Koleksi Mahakarya Kopi</h1>
          <p>Tiga pilar rasa autentik Nusantara yang dikurasi khusus untuk memenuhi selera penikmat kopi sejati.</p>
        </div>
      </header>

      <section className="catalog-main">
        {/* 4 BUTTON ATAS */}
        <div className="catalog-filter-bar">
          {brandCategories.map((brand) => (
            <button 
              key={brand}
              className={`filter-btn ${activeFilter === brand ? 'active' : ''}`}
              onClick={() => setActiveFilter(brand)}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* AREA SHOWCASE BAWAH (SEPERTI GAMBAR KAPAL API) */}
        {loading ? (
          <div className="catalog-loading">Menyiapkan katalog produk premium...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="catalog-empty">Tidak ada produk dalam kategori ini.</div>
        ) : (
          <div className="catalog-grid">
            
            {/* SISI KIRI: SLIDER GAMBAR */}
            <div className="catalog-card">
              <button onClick={handlePrev} className="slider-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{width: '20px', height: '20px'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div className="catalog-img-wrapper">
                <img src={currentProduct.img} alt={currentProduct.name} />
                {currentProduct.region && (
                  <span className="region-badge">{currentProduct.region}</span>
                )}
              </div>

              <button onClick={handleNext} className="slider-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" style={{width: '20px', height: '20px'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
            
            {/* SISI KANAN: DETAIL INFO (DIBUNGKUS MASUK KE SINI SEMUA AGAR TIDAK LEPAS) */}
            <div className="catalog-info">
              <span className="category-tag">{currentProduct.category}</span>
              <h3>{currentProduct.name}</h3>
              
              <p className="product-desc">
                {currentProduct.description || 'Nikmati sensasi keaslian cita rasa kopi Nusantara pilihan terbaik yang diproses secara higienis untuk menghasilkan kenikmatan murni.'}
              </p>

              {/* Selektor Ukuran */}
              <div className="catalog-size-selector">
                <select 
                  value={selectedSizes[currentProduct.id] || '100gr'}
                  onChange={(e) => handleSizeChange(currentProduct.id, e.target.value)}
                >
                  {currentProduct.category === 'Kopi Otok (Sachet)' ? (
                    <option value="sachet">Kemasan Sachet</option>
                  ) : (
                    <>
                      <option value="100gr">Kemasan 100 gr</option>
                      <option value="1kg">Kemasan 1 Kg</option>
                    </>
                  )}
                </select>
              </div>

              {/* Harga & Tombol Kunjungi */}
              <div className="price-action-section">
                <span className="price-label">Harga Premium</span>
                <p className="price-amount">Rp {currentProduct.price?.toLocaleString('id-ID')}</p>
                <button className="btn-visit">
                  Kunjungi Situs &gt;&gt;
                </button>
              </div>
            </div>

          </div>
        )}
      </section>
    </div>
  );
};

export default Catalog;