import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; // Import Slider untuk produk
import Navbar from '../components/Navbar';
import '../styles/global.css';

const Home = () => {
  // Fungsi mengarahkan ke katalog sambil membawa filter nama daerah
  const handleRegionClick = (regionName) => {
    window.location.href = `/katalog?daerah=${encodeURIComponent(regionName)}`;
  };

// Konfigurasi BARU untuk Slider (Klik Produk Samping & Tombol Panah Aktif)
  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: true,         // 1. Mengaktifkan panah di kanan & kiri layar
    focusOnSelect: true,  // 2. KUNCI: Membuat produk samping bisa diklik untuk digeser
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, arrows: false } }
    ]
  };
  
  return (
    <div className="home-page">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container">
          <h1>Setiap cangkir,<br/>diracik menuju kesempurnaan.</h1>
          <p>Temukan kenikmatan kopi premium nusantara dari petani lokal dalam nuansa yang hangat dan autentik.</p>
          <Link to="/katalog" className="btn-primary">Lihat Katalog Produk</Link>
        </div>
      </section>

      {/* 2. PROSES KAMI SECTION (Desain Kartu Elegan) */}
      <section className="process-section container">
        <h2>Kenali Proses Kami</h2>
        <p className="process-subtitle">Dedikasi kami tertuang dalam setiap langkah perjalanan kopi dari kebun hingga ke tangan Anda.</p>
        
        <div className="process-grid">
          <div className="process-card">
            <div className="card-img-placeholder" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80')"}}></div>
            <div className="card-content">
              <h3>Seleksi Petani</h3>
              <p>Kami bermitra langsung dengan petani lokal untuk memastikan biji kopi pilihan terbaik.</p>
            </div>
          </div>
          <div className="process-card">
            <div className="card-img-placeholder" style={{backgroundImage: "url('https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&w=400&q=80')"}}></div>
            <div className="card-content">
              <h3>Sangrai Sempurna</h3>
              <p>Teknik *roasting* presisi untuk menonjolkan karakter unik setiap biji kopi.</p>
            </div>
          </div>
          <div className="process-card">
            <div className="card-img-placeholder" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&q=80')"}}></div>
            <div className="card-content">
              <h3>Giling Segar</h3>
              <p>Kopi digiling tepat saat pesanan tiba, menjaga kesegaran dan aroma asli.</p>
            </div>
          </div>
        </div>
      </section>

{/* Section dengan gaya Overlay sesuai referensi */}
<section className="hero-overlay-section">
  <div className="overlay-container">
    <img src="/images/section-kopitara.png" alt="Kopi Tara" className="bg-image" />
    <div className="text-overlay">
      <h2>Kemurnian dalam Setiap Butir</h2>
      <p>
        "Kopi Tara adalah dedikasi atas cita rasa autentik Nusantara. Kami percaya bahwa kopi berkualitas lahir dari proses yang jujur — mulai dari pemilihan biji terbaik hingga teknik sangrai yang presisi. Kami tidak hanya menjual kopi tapi kami menghadirkan pengalaman menikmati kopi segar yang digiling langsung di tempat."
      </p>
            <div className="owner-contacts">
              <a href="https://www.instagram.com/kopitaraberkah?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <a href="mailto:halo@coffetara.id" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Email
              </a>
              <a href="https://wa.me/62817745551" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Telepon
              </a>
            </div>
    </div>
  </div>
</section>

{/* 4. BEST SELLER PRODUCT SLIDER SECTION (CENTER MODE & BLUR) */}
<section className="product-slider-section py-12 bg-cream-light">
  <div className="container mx-auto px-4 text-center">
    
    {/* Judul Seksi */}
    <div className="section-title mb-8">
      <span className="text-amber-700 font-semibold tracking-wider uppercase text-sm block mb-2">Produk Terlaris</span>
      <h2 className="text-3xl font-bold text-stone-800">Koleksi Kemasan Kopi Unggulan</h2>
      <p className="text-stone-500 mt-2 text-sm max-w-md mx-auto">Varian kopi terbaik yang paling banyak diminati oleh para penikmat kopi nusantara.</p>
    </div>

    <Slider {...sliderSettings}>
      
      {[
        { nama: "KOPI TEMANGGUNG", img: "/images/robusta-temanggung.png", tag: "Terlaris #1" },
        { nama: "KOPI MALABAR", img: "/images/robusta-malabar.png", tag: "Best Seller" },
        { nama: "KOPI GARUT", img: "/images/arabica-garut.png", tag: "Favorit" },
        { nama: "KOPI CIWIDEY", img: "/images/arabica-ciwidey.png", tag: "Best Seller" },
        { nama: "KOPI KINTAMANI", img: "/images/kopi-5.png", tag: "Rekomendasi" }
      ].map((produk, index) => (
        <div className="showcase-card relative p-4" key={index}>
          
          {/* Badge Best Seller / Unggulan */}
          {produk.tag && (
            <span className="absolute top-6 left-6 z-10 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              {produk.tag}
            </span>
          )}

          <div className="showcase-img-container rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white p-4">
            <img 
              src={produk.img} 
              alt={produk.nama} 
              className="showcase-img w-full h-auto object-contain mx-auto max-h-[300px]" 
            />
          </div>
          
          <div className="showcase-info mt-4">
            <h4 className="text-lg font-bold text-stone-800 tracking-wide">{produk.nama}</h4>
            <span className="text-xs text-amber-800 font-medium tracking-tight bg-amber-50 px-2.5 py-1 rounded mt-1 inline-block">
              Premium Pack
            </span>
          </div>
          
        </div>
      ))}

    </Slider>
  </div>
</section>

      {/* 5. REGIONS SECTION (Peta Nusantara) */}
      <section className="regions-section">
        <div className="container">
          <h2>Kekayaan Kopi Nusantara</h2>
          <p>Kopi ibarat buah, membawa cita rasa unik dari tanah kelahirannya. Klik salah satu daerah di bawah untuk melihat koleksi produk spesifik dari wilayah tersebut:</p>
          
          <div className="regions-list">
            {['Aceh', 'Medan', 'Sidikalang', 'Lampung', 'Puntang', 'Ciwidey', 'Malabar', 'Garut', 'Cianjur', 'Temanggung', 'Solo', 'Dampit', 'Ijen Raung', 'Bali', 'Flores', 'Toraja', 'Vietnam'].map((daerah) => (
              <button 
                key={daerah} 
                className="region-badge-btn"
                onClick={() => handleRegionClick(daerah)}
              >
                {daerah}
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;