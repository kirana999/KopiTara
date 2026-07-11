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
  
const daerahKopi = [
  { nama: 'Gayo (Aceh)', singkat: 'Gayo', koordinat: { top: '15%', left: '12%' }, varian: ['Arabika Gayo'] },
  { nama: 'Lintong (Sumatera Utara)', singkat: 'Lintong', koordinat: { top: '23%', left: '16%' }, varian: ['Arabika Lintong'] },
  { nama: 'Sidikalang (Dairi, Sumut)', singkat: 'Sidikalang', koordinat: { top: '25%', left: '14%' }, varian: ['Arabika Sidikalang', 'Robusta Sidikalang'] },
  { nama: 'Kerinci (Jambi)', singkat: 'Kerinci', koordinat: { top: '38%', left: '23%' }, varian: ['Robusta Kerinci', 'Robusta Kerinci (Sachet)'] },
  { nama: 'Pagar Alam (Sumsel)', singkat: 'Pagar Alam', koordinat: { top: '48%', left: '26%' }, varian: ['Robusta Pagar Alam'] },
  { nama: 'Lampung', singkat: 'Lampung', koordinat: { top: '56%', left: '32%' }, varian: ['Robusta Lampung'] },
  { nama: 'Puntang (Bandung, Jabar)', singkat: 'Puntang', koordinat: { top: '67%', left: '36%' }, varian: ['Arabika Puntang'] },
  { nama: 'Mekar Wangi (Bandung Barat)', singkat: 'Mekar Wangi', koordinat: { top: '68%', left: '38%' }, varian: ['Arabika Mekar Wangi'] },
  { nama: 'Malabar (Bandung, Jabar)', singkat: 'Malabar', koordinat: { top: '71%', left: '37%' }, varian: ['Arabika Malabar', 'Robusta Malabar'] },
  { nama: 'Ciwidey (Bandung, Jabar)', singkat: 'Ciwidey', koordinat: { top: '72%', left: '35%' }, varian: ['Arabika Ciwidey'] },
  { nama: 'Garut (Jabar)', singkat: 'Garut', koordinat: { top: '71%', left: '39%' }, varian: ['Arabika Garut'] },
  { nama: 'Temanggung (Jateng)', singkat: 'Temanggung', koordinat: { top: '69%', left: '44%' }, varian: ['Arabika Temanggung', 'Robusta Temanggung', 'Robusta Temanggung (Sachet)'] },
  { nama: 'Dampit (Malang, Jatim)', singkat: 'Dampit', koordinat: { top: '72%', left: '49%' }, varian: ['Robusta Dampit', 'Robusta Dampit (Sachet)'] },
  { nama: 'Ijen Raung (Jatim)', singkat: 'Ijen Raung', koordinat: { top: '71%', left: '52%' }, varian: ['Arabika Ijen Raung'] },
  { nama: 'Bali Kintamani', singkat: 'Kintamani', koordinat: { top: '72%', left: '55%' }, varian: ['Arabika Bali Kintamani'] },
  { nama: 'Flores Bajawa (NTT)', singkat: 'Flores', koordinat: { top: '75%', left: '61%' }, varian: ['Arabika Flores Bajawa'] },
  { nama: 'Toraja (Sulsel)', singkat: 'Toraja', koordinat: { top: '46%', left: '65%' }, varian: ['Robusta Toraja', 'Robusta Toraja (Sachet)'] }
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
    <img src="/images/section-kopitara.jpeg" alt="Kopi Tara" className="bg-image" />
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

{/* ================= SECTION 5: MAP NUSANTARA ================= */}
<section className="kopi-tara-nusantara-section">
  <div className="kopi-tara-map-header">
    <span className="kopi-tara-map-subtitle">Eksplorasi Varian</span>
    <h2 className="kopi-tara-map-title">Koleksi Kopi Nusantara</h2>
    <p className="kopi-tara-map-desc">
      Setiap titik mewakili kekayaan tanah Indonesia. Sorot pin untuk menemukan kopi pilihan dari daerah favorit Anda.
    </p>
  </div>

  <div className="kopi-tara-nusantara-map-container">
    <div className="kopi-tara-nusantara-map-wrapper">
      {/* Gambar latar peta emas yang kamu upload */}
      <img 
        src="/images/peta-tara.png" 
        alt="Peta Nusantara Kopintara" 
        className="kopi-tara-indonesia-map-img"
      />

      {/* Mapping Pin di atas Peta */}
      {daerahKopi.map((daerah, index) => (
        <div 
          key={index}
          className="kopi-pin-lokasi"
          style={{ top: daerah.koordinat.top, left: daerah.koordinat.left }}
        >
          {/* Label Singkat Nama Daerah yang Selalu Muncul */}
          <div className="label-daerah-minimal">{daerah.singkat}</div>

          {/* Efek Pin Berdenyut */}
          <div className="kopi-pulse-pin">
            <div className="pin-pulse-ring"></div>
            <div className="pin-pulse-dot"></div>
          </div>

          {/* Tooltip Detail Kopi (Muncul saat Hover) */}
          <div className="kopi-kemasan-tooltip">
            <h4 className="tooltip-title">{daerah.nama}</h4>
            <ul className="tooltip-kopi-list">
              {daerah.varian.map((varian, idx) => (
                <li key={idx} onClick={() => console.log(`Klik: ${varian}`)}>
                  {varian}
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