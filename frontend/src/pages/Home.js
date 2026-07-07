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

{/* 4. PRODUCT SLIDER SECTION (CENTER MODE & BLUR) */}
      <section className="product-slider-section">
        <div className="container">
          <Slider {...sliderSettings}>
            
            {/* Tukar sumber gambar ke folder tempatan anda */}
            {[
              { nama: "KOPI TEMANGGUNG", img: "/images/kopi-1.png" },
              { nama: "KOPI MALABAR", img: "/images/kopi-2.png" },
              { nama: "KOPI ACEH GAYO", img: "/images/kopi-3.png" },
              { nama: "KOPI TORAJA", img: "/images/kopi-4.png" },
              { nama: "KOPI KINTAMANI", img: "/images/kopi-5.png" }
              // Anda boleh tambah lagi produk di sini mengikut turutan gambar anda
            ].map((produk, index) => (
              <div className="showcase-card" key={index}>
                <div className="showcase-img-container">
                  <img src={produk.img} alt={produk.nama} className="showcase-img" />
                </div>
                <div className="showcase-info">
                  <h4>{produk.nama}</h4>
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
            {['Temanggung', 'Garut', 'Cianjur', 'Solo', 'Karawang', 'Malabar', 'Bali', 'Lampung', 'Aceh', 'Medan'].map((daerah) => (
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