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
{/* HERO SECTION */}
<section className="hero">
  <div className="container hero-inner">

    {/* BAGIAN TEKS */}
    <div className="hero-content">
      <span className="hero-label">
        KOPI NUSANTARA • DARI PETANI LOKAL
      </span>

      <h1>
        Setiap cangkir,
        <br />
        diracik menuju kesempurnaan.
      </h1>

      <p>
        Temukan kenikmatan kopi premium nusantara dari petani lokal
        dalam nuansa yang hangat dan autentik.
      </p>

      <Link to="/katalog" className="btn-primary">
        Lihat Katalog Produk
      </Link>
    </div>

    {/* BAGIAN FOTO ORGANIK */}
    <div className="hero-visual">
      <div className="hero-image-shape"></div>

      <img
        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        alt="Kopi dan proses penyeduhan"
        className="hero-image"
      />

      <div className="hero-image-caption">
        <span>Authentic Taste</span>
        <small>From Local Farmers</small>
      </div>
    </div>

  </div>
</section>

{/* 2. PROSES KAMI SECTION */}
<section className="process-section container">
  <div className="process-heading">
    <h2>Kenali Proses Kami</h2>
    <p className="process-subtitle">
      Dedikasi kami tertuang dalam setiap langkah perjalanan kopi
      dari kebun hingga ke tangan Anda.
    </p>
  </div>

  <div className="process-grid">

    {/* Kartu 1 */}
    <div className="process-card">
      <div
        className="card-img-placeholder"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80')"
        }}
      ></div>

      <div className="card-content">
        <h3>Seleksi Petani</h3>
        <p>
          Kami bermitra langsung dengan petani lokal untuk
          memastikan biji kopi pilihan terbaik.
        </p>
      </div>
    </div>

    {/* Kartu 2 */}
    <div className="process-card">
      <div
        className="card-img-placeholder"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&w=400&q=80')"
        }}
      ></div>

      <div className="card-content">
        <h3>Sangrai Sempurna</h3>
        <p>
          Teknik <em>roasting</em> presisi untuk menonjolkan
          karakter unik setiap biji kopi.
        </p>
      </div>
    </div>

    {/* Kartu 3 */}
    <div className="process-card">
      <div
        className="card-img-placeholder"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&q=80')"
        }}
      ></div>

      <div className="card-content">
        <h3>Giling Segar</h3>
        <p>
          Kopi digiling tepat saat pesanan tiba, menjaga
          kesegaran dan aroma asli.
        </p>
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
{/* 4. BEST SELLER PRODUCT SLIDER SECTION */}
<section className="product-slider-section">
  <div className="container mx-auto px-4 text-center product-slider-content">

    {/* Judul Seksi */}
    <div className="section-title">
      <span className="section-eyebrow">Produk Terlaris</span>

      <h2>Koleksi Kemasan Kopi Unggulan</h2>

      <p>
        Varian kopi terbaik yang paling banyak diminati oleh para
        penikmat kopi nusantara.
      </p>
    </div>

    {/* Slider Produk */}
    <div className="showcase-slider-wrap">
      <Slider {...sliderSettings}>
        {[
          {
            nama: "KOPI TEMANGGUNG",
            img: "/images/robusta-temanggung.png",
            tag: "Best Seller",
          },
          {
            nama: "KOPI MALABAR",
            img: "/images/robusta-malabar.png",
            tag: "Best Seller",
          },
          {
            nama: "KOPI GARUT",
            img: "/images/arabica-garut.png",
            tag: "Favorit",
          },
          {
            nama: "KOPI CIWIDEY", 
            img: "/images/arabica-ciwidey.png",
            tag: "Favorit",
          },
        
        ].map((produk, index) => (
          <div className="showcase-card" key={index}>

            {/* Badge Produk */}
            {produk.tag && (
              <span className="showcase-badge">
                {produk.tag}
              </span>
            )}

            {/* Area Gambar */}
<div className={`showcase-img-container showcase-bg-${index + 1}`}>
  <div className="abstract-shape" aria-hidden="true"></div>

  <img
    src={produk.img}
    alt={produk.nama}
    className="showcase-img"
  />
</div>

            {/* Informasi Produk */}
            <div className="showcase-info">
              <h4>{produk.nama}</h4>

              <span className="showcase-category">
                Premium Pack
              </span>
            </div>

          </div>
        ))}
      </Slider>
    </div>

  </div>
</section>

{/* ================= SECTION 5: PETA KOPI NUSANTARA ================= */}
<section className="kopi-tara-nusantara-section">

  {/* Dekorasi organik di background */}
  <div className="kopi-tara-section-curve"></div>
  {/* Dekorasi section map */}
<div className="map-decor-text map-decor-text-left" aria-hidden="true">
  FROM THE EARTH
</div>

<div className="map-decor-text map-decor-text-right" aria-hidden="true">
  TO YOUR CUP
</div>

<span className="map-coffee-bean bean-decor-one" aria-hidden="true"></span>
<span className="map-coffee-bean bean-decor-two" aria-hidden="true"></span>

<div className="map-decor-line map-decor-line-left" aria-hidden="true"></div>
<div className="map-decor-line map-decor-line-right" aria-hidden="true"></div>
  <div className="kopi-tara-organic-shape organic-shape-one"></div>
  <div className="kopi-tara-organic-shape organic-shape-two"></div>

  {/* Header */}
  <div className="kopi-tara-map-header">
    <span className="kopi-tara-map-subtitle">
      Eksplorasi Varian
    </span>

    <h2 className="kopi-tara-map-title">
      Koleksi Kopi Nusantara
    </h2>

    <p className="kopi-tara-map-desc">
      Setiap titik menyimpan cerita dari tanah Indonesia.
      Temukan kekayaan rasa kopi pilihan dari berbagai daerah Nusantara.
    </p>
  </div>

  {/* Peta */}
  <div className="kopi-tara-nusantara-map-container">
    <div className="kopi-tara-nusantara-map-wrapper">

      <img
        src="/images/peta-tara.png"
        alt="Peta asal kopi Nusantara"
        className="kopi-tara-indonesia-map-img"
      />

      {/* Pin lokasi kopi */}
      {daerahKopi.map((daerah, index) => (
        <div
          key={index}
          className="kopi-pin-lokasi"
          style={{
            top: daerah.koordinat.top,
            left: daerah.koordinat.left,
          }}
          tabIndex={0}
          aria-label={`Lokasi kopi ${daerah.nama}`}
        >
          <div className="label-daerah-minimal">
            {daerah.nama}
          </div>

          <div className="kopi-pulse-pin">
            <span className="pin-pulse-ring"></span>
            <span className="pin-pulse-dot"></span>
          </div>
        </div>
      ))}

    </div>

    {/* Keterangan */}
    <div className="kopi-tara-map-caption">
      <span className="caption-line"></span>
      <span>Jelajahi titik untuk mengenal asal kopi</span>
      <span className="caption-line"></span>
    </div>
  </div>

</section>
<Footer/>
    </div>
  );
};

export default Home;