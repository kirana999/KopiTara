import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

const brandCategories = ['Semua Produk', 'Kopi Otok (Sachet)', 'Arabica Premium', 'Robusta Authentic'];

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Semua Produk');
  const [selectedVariants, setSelectedVariants] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const cleanDescription = (desc, name) => {
    if (!desc) return 'Nikmati sensasi keaslian cita rasa kopi Nusantara pilihan terbaik.';
    return desc.replace(new RegExp(`Kopi\\s+${name}`, 'gi'), '').trim();
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();

        const grouped = data.reduce((acc, curr) => {
  const key = curr.name;
  if (!acc[key]) {
    let productCategory = 'Lainnya';
    const lowerName = curr.name.toLowerCase();
    
    // PENTING: Cek kata 'otok' paling pertama agar tidak tersalip kata 'robusta'
    if (lowerName.includes('otok')) {
      productCategory = 'Kopi Otok (Sachet)';
    } else if (lowerName.includes('robusta')) {
      productCategory = 'Robusta Authentic';
    } else if (lowerName.includes('arabika') || lowerName.includes('arabica')) {
      productCategory = 'Arabica Premium';
    }

    acc[key] = { 
      ...curr, 
      variants: [],
      category: productCategory
    };
  }
  acc[key].variants.push({ type: curr.packaging_type, weight: curr.weight, price: curr.price });
  return acc;
}, {});
        setProducts(Object.values(grouped));
      } catch (error) { 
        console.error("Gagal memuat data:", error); 
      } finally { 
        setLoading(false); 
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = activeFilter === 'Semua Produk' ? products :
    activeFilter === 'Kopi Otok (Sachet)' ? products.filter(p => p.variants.some(v => v.type === 'Saset')) :
    products.filter(p => p.category === activeFilter);

  useEffect(() => { setCurrentIndex(0); }, [activeFilter]);

  useEffect(() => {
    if (activeFilter === 'Kopi Otok (Sachet)' && filteredProducts.length > 0) {
      const newSelections = { ...selectedVariants };
      filteredProducts.forEach(product => {
        const sachetIndex = product.variants.findIndex(v => v.type === 'Saset');
        if (sachetIndex !== -1) newSelections[product.name] = sachetIndex.toString();
      });
      setSelectedVariants(newSelections);
    }
  }, [activeFilter, filteredProducts]);

  if (loading) return <div className="catalog-loading">Memuat...</div>;
  if (filteredProducts.length === 0) return <div className="catalog-empty">Tidak ada produk ditemukan.</div>;

  const safeIndex = currentIndex >= filteredProducts.length ? 0 : currentIndex;
  const currentProduct = filteredProducts[safeIndex];
  const vIndex = parseInt(selectedVariants[currentProduct.name] || 0);
  const currentVariant = currentProduct.variants[vIndex] || currentProduct.variants[0];

  return (
    <div className="catalog-page">
      <Navbar />
      <header className="catalog-header">
        <div className="container mx-auto px-4">
          <h1>Pilih Kopi Pilihanmu Hari Ini!</h1>
        </div>
      </header>

      <section className="catalog-main">
        <div className="catalog-filter-bar">
          {brandCategories.map((brand) => (
            <button key={brand} className={`filter-btn ${activeFilter === brand ? 'active' : ''}`} onClick={() => setActiveFilter(brand)}>
              {brand}
            </button>
          ))}
        </div>

        <div className="catalog-grid">
          <div className="catalog-card">
            <button 
              onClick={() => setCurrentIndex(prev => (prev === 0 ? filteredProducts.length - 1 : prev - 1))} 
              className="slider-arrow"
            >
              &lt;
            </button>
            
            <div className="catalog-img-wrapper">
              <img src={currentProduct.image_url || '/images/default.png'} alt={currentProduct.name} />
            </div>
            
            <button 
              onClick={() => setCurrentIndex(prev => (prev === filteredProducts.length - 1 ? 0 : prev + 1))} 
              className="slider-arrow"
            >
              &gt;
            </button>
          </div>
          
          <div className="catalog-info">
            <span className="category-tag">{activeFilter}</span>
            <h3>{currentProduct.name}</h3>
            <p className="product-desc">{cleanDescription(currentProduct.description, currentProduct.name)}</p>

            <div className="catalog-size-selector">
              <label>Pilih Varian:</label>
              <select 
                value={vIndex} 
                disabled={activeFilter === 'Kopi Otok (Sachet)'}
                onChange={(e) => setSelectedVariants({...selectedVariants, [currentProduct.name]: e.target.value})}
              >
                {currentProduct.variants.map((v, idx) => (
                  <option key={idx} value={idx}>
                    {v.type === 'Saset' ? 'Saset (50g)' : v.weight}
                  </option>
                ))}
              </select>
            </div>

            <div className="price-action-section">
              <span className="price-label">Harga Premium</span>
              <p className="price-amount">Rp {parseInt(currentVariant.price).toLocaleString('id-ID')}</p>
              <button className="btn-visit"> Kunjungi Toko Kami </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;