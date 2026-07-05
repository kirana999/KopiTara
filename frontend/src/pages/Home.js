import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Navbar from '../components/Navbar';
import CinematicHero from '../components/CinematicHero';
import '../styles/global.css';

const WA_NUMBER = '628177455551'; // +62 817-745-551
const WA_MESSAGE = encodeURIComponent('Halo Kopi Tara! Saya ingin memesan Kapal Otok-Otok Robusta Kerinci. 🚢☕');

const Home = () => {
  const handleRegionClick = (regionName) => {
    window.location.href = `/katalog?daerah=${encodeURIComponent(regionName)}`;
  };

  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, arrows: false } }
    ]
  };

  return (
    <div className="home-page">
      {/* Navbar floats above the cinematic hero */}
      <Navbar />

      {/* ════════════════════════════════════════════════════════════════════
          1. CINEMATIC HERO — Scroll-driven frame animation
          ════════════════════════════════════════════════════════════════════ */}
      <CinematicHero />

      {/* ════════════════════════════════════════════════════════════════════
          2. TENTANG PRODUK — Revealed after hero
          ════════════════════════════════════════════════════════════════════ */}
      <section className="about-produk-section" id="tentang-produk">
        <span className="about-produk-eyebrow">Tentang Produk</span>
        <h2 className="about-produk-title">Cita Rasa Dataran Tinggi</h2>
        <p className="about-produk-body">
          Kapal Otok-Otok hadir sebagai simbol perjalanan panjang biji kopi Kerinci—dari kebun di atas awan
          hingga ke cangkir Anda. Setiap tegukan membawa aroma tanah vulkanik dan kesegaran udara pegunungan.
        </p>

        <div className="about-produk-grid">
          <div className="ap-card">
            <span className="ap-card-icon">🌿</span>
            <h3 className="ap-card-title">100% Robusta Kerinci</h3>
            <p className="ap-card-body">Dipetik tangan dari kebun organik di ketinggian 1.500–2.000 mdpl.</p>
          </div>
          <div className="ap-card">
            <span className="ap-card-icon">⚙️</span>
            <h3 className="ap-card-title">Giling Segar</h3>
            <p className="ap-card-body">Digiling tepat saat pesanan masuk. Kesegaran aroma terjaga sempurna.</p>
          </div>
          <div className="ap-card">
            <span className="ap-card-icon">🚢</span>
            <h3 className="ap-card-title">Kapal Otok-Otok</h3>
            <p className="ap-card-body">Kemasan ikonik terinspirasi kapal uap tradisional Nusantara.</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. PROSES KAMI SECTION
          ════════════════════════════════════════════════════════════════════ */}
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
              <p>Teknik roasting presisi untuk menonjolkan karakter unik setiap biji kopi.</p>
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

      {/* ════════════════════════════════════════════════════════════════════
          4. NARRATIVE STORY SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="story-section">
        <div className="container story-wrapper">
          <div className="story-image-container">
            <img
              src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Sejarah Kopi Tara"
              className="story-image"
            />
          </div>

          <div className="story-content">
            <h2>Mengapa Kopi Tara Tercipta?</h2>
            <blockquote className="owner-quote">
              "Kopi Tara lahir dari sebuah kesadaran besar untuk menjaga kelestarian alam. Berawal dari bisnis furnitur kayu jati 'Awet Jati', kami melihat urgensi untuk beralih ke komoditas yang jauh lebih ramah terhadap ekosistem hutan kita. Kopi adalah jawabannya—sebuah buah ajaib yang membawa kemakmuran tanpa merusak bumi tempatnya tumbuh."
            </blockquote>
            <p className="owner-name">— Founder, Kopi Tara</p>

            <p className="story-description">
              Kami memproses biji kopi murni pilihan secara tradisional dan memastikan kesegarannya dengan konsep <strong>"digiling langsung di tempat saat Anda memesan"</strong>. Setiap cangkir yang Anda nikmati merupakan bentuk dukungan nyata terhadap masa depan mahasiswa lokal yang kami berdayakan.
            </p>

            <div className="owner-contacts">
              <a href="https://instagram.com/kopitara" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <a href="mailto:halo@coffetara.id" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Email
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Telepon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. PRODUCT SLIDER SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="product-slider-section">
        <div className="container">
          <Slider {...sliderSettings}>
            {[
              { nama: "KOPI TEMANGGUNG", img: "/images/kopi-1.png" },
              { nama: "KOPI MALABAR",    img: "/images/kopi-2.png" },
              { nama: "KOPI ACEH GAYO",  img: "/images/kopi-3.png" },
              { nama: "KOPI TORAJA",     img: "/images/kopi-4.png" },
              { nama: "KOPI KINTAMANI",  img: "/images/kopi-5.png" }
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

      {/* ════════════════════════════════════════════════════════════════════
          6. REGIONS SECTION
          ════════════════════════════════════════════════════════════════════ */}
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

      {/* ════════════════════════════════════════════════════════════════════
          PREMIUM FLOATING WHATSAPP CTA
          260 × 74 px pill — z-index: 99999 — always above everything
          ════════════════════════════════════════════════════════════════════ */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
        className="whatsapp-float"
        id="wa-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Kopi Tara — +62 817-745-551"
      >
        {/* Left: WhatsApp icon */}
        <span className="whatsapp-float__icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.816.733 5.461 2.018 7.76L0 32l8.455-2.217A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.32 22.587c-.347.974-2.02 1.866-2.782 1.987-.713.114-1.616.162-2.606-.164-.601-.194-1.373-.453-2.355-.887-4.147-1.79-6.86-5.968-7.068-6.246-.208-.278-1.693-2.251-1.693-4.296 0-2.044 1.075-3.05 1.455-3.464.38-.415.83-.519 1.106-.519.278 0 .554.003.797.015.256.013.6-.097.938.716.347.834 1.177 2.878 1.28 3.087.104.208.173.451.035.728-.139.278-.208.451-.416.694-.208.243-.437.543-.624.73-.208.208-.425.433-.183.85.243.416 1.08 1.781 2.318 2.884 1.593 1.42 2.936 1.86 3.353 2.068.416.208.659.174.902-.104.243-.278 1.04-1.213 1.318-1.63.278-.416.554-.347.936-.208.381.139 2.43 1.144 2.846 1.352.416.208.694.313.797.486.104.174.104 1.005-.243 1.979z"/>
          </svg>
        </span>

        {/* Divider */}
        <span className="whatsapp-float__divider" aria-hidden="true" />

        {/* Right: text */}
        <span className="whatsapp-float__text">
          <span className="wa-title">Chat WhatsApp</span>
          <span className="wa-subtitle">Pesan Sekarang</span>
        </span>

        {/* Right: arrow indicator */}
        <span className="whatsapp-float__arrow" aria-hidden="true">›</span>
      </a>

    </div>


  );
};

export default Home;