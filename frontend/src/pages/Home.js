import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; // Import Slider untuk produk
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
  
const regions = [
  { 
    name: "Sumatera", 
    class: "pin-sumatera", 
    coords: { top: "22%", left: "12%" }, // Aceh, Gayo, Lintong, Sidikalang, Lampung, Pagar Alam, Kerinci
    kopi: ["Gayo", "Lintong", "Sidikalang", "Lampung", "Pagar Alam", "Kerinci"] 
  },
  { 
    name: "Jawa Barat", 
    class: "pin-jabar", 
    coords: { top: "40%", left: "28%" }, // Putang, Malabar, Ciwidey, Garut, Mekar Wangi
    kopi: ["Putang", "Malabar", "Ciwidey", "Garut", "Mekar Wangi"] 
  },
  { 
    name: "Jawa Tengah", 
    class: "pin-jateng", 
    coords: { top: "44%", left: "35%" }, // Temanggung, Semar Mesem
    kopi: ["Temanggung", "Semar Mesem"] 
  },
  { 
    name: "Jawa Timur", 
    class: "pin-jatim", 
    coords: { top: "46%", left: "42%" }, // Dampit, Ijen Raung
    kopi: ["Dampit", "Ijen Raung"] 
  },
  { 
    name: "Sulawesi", 
    class: "pin-toraja", 
    coords: { top: "30%", left: "62%" }, // Toraja
    kopi: ["Toraja"] 
  },
  { 
    name: "Bali & NTT", 
    class: "pin-bali", 
    coords: { top: "50%", left: "50%" }, // Kintamani, Flores Bajawa
    kopi: ["Kintamani", "Flores Bajawa"] 
  }
];

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

{/* ================= MAP NUSANTARA SECTION ================= */}
<section className="kopi-tara-nusantara-section">
  <div className="kopi-tara-map-header">
    <span className="kopi-tara-map-subtitle">Eksplorasi Varian</span>
    <h2 className="kopi-tara-map-title">Koleksi Kopi Nusantara</h2>
    <p className="kopi-tara-map-desc">
      Setiap titik mewakili kekayaan tanah Indonesia. Temukan kopi pilihan dari daerah favorit Anda.
    </p>
  </div>

  <div className="kopi-tara-nusantara-map-container">
    <div className="kopi-tara-nusantara-map-wrapper">
      <img src="/images/peta-tara.png" alt="Peta Nusantara" className="kopi-tara-indonesia-map-img" />

      {regions.map((region) => (
        <div 
          key={region.name} 
          className={`kopi-pin-lokasi ${region.class}`}
          style={{ top: region.coords.top, left: region.coords.left }}
        >
          {/* Label Nama Daerah (Selalu Muncul) */}
          <div className="label-daerah">{region.name}</div>
          
          {/* Pulse Pin */}
          <div className="kopi-pulse-pin"></div>

          {/* Modal / Tooltip daftar kopi */}
          <div className="kopi-kemasan-tooltip">
            <h4 className="tooltip-title">{region.name}</h4>
            <ul className="tooltip-kopi-list">
              {region.kopi.map((nama, idx) => (
                <li key={idx} onClick={() => handleRegionClick(nama)}>
                  {nama}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
};

export default Home;