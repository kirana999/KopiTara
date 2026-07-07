import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // ◄ Pastikan Footer sudah dibuat
import '../styles/global.css';

const About = () => {
  return (
    <div className="kopi-tara-page-wrapper">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <header className="kopi-tara-hero">
        <div className="kopi-tara-hero-text">
          <h1 className="kopi-tara-hero-title">CERITA DI BALIK RASA</h1>
          <p className="kopi-tara-hero-tagline">
            Lebih dari sekadar cangkir kopi harian Anda. Kenali lebih dekat perjalanan Kopi Tara dalam menghadirkan buah ajaib Nusantara yang membawa kebaikan untuk alam dan sesama.
          </p>
        </div>

        <div className="kopi-tara-cup-container">
          <div className="kopi-uap-wrapper">
            <span style={{ '--i': 1 }}></span>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 2 }}></span>
          </div>
          <img 
            src="/images/cangkir-kopi-tara.png" 
            alt="Cangkir Kopi Tara" 
            className="kopi-tara-cup-img" 
          />
        </div>
      </header>

      {/* ================= STORY SECTION ================= */}
      <section className="kopi-tara-intro-story">
        <div className="kopi-tara-story-container">
          <h2 className="kopi-tara-story-title">Langkah Baru untuk Bumi</h2>
          <div className="kopi-tara-story-text">
            <p>
              Kopi Tara lahir dari sebuah kesadaran besar untuk menjaga kelestarian alam. Berawal dari bisnis furnitur kayu jati 'Awet Jati', kami melihat urgensi untuk beralih ke komoditas yang jauh lebih ramah terhadap ekosistem hutan kita. Kopi adalah jawabannya—sebuah buah ajaib yang membawa kemakmuran tanpa merusak bumi tempatnya tumbuh.
            </p>
            <p className="owner-name">— Founder, Kopi Tara</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION (VISI & MISI) ================= */}
      <section className="kopi-tara-about-section">
        <div className="kopi-tara-about-container">
          <div className="kopi-tara-about-content">
            <span className="kopi-tara-about-subtitle">Arah & Tujuan Kami</span>
            <h2 className="kopi-tara-about-title">Visi & Misi</h2>
            <div className="kopi-tara-about-text">
              <div className="visi-misi-block">
                <h3>Visi</h3>
                <p>Menjadi pelopor komoditas kopi Nusantara yang mandiri dan berkelanjutan, sekaligus menjadi pilar utama dalam pemulihan serta pelestarian ekosistem hutan Indonesia.</p>
              </div>
              <div className="visi-misi-block">
                <h3>Misi</h3>
                <ul>
                  <li>Mengalihkan pemanfaatan hasil hutan kayu ke komoditas kopi yang ramah terhadap ekosistem.</li>
                  <li>Menghadirkan produk kopi Nusantara berkualitas tinggi yang diproduksi secara etis dan bertanggung jawab.</li>
                  <li>Membangun kesadaran konsumen akan pentingnya menjaga kelestarian alam lewat setiap cangkir kopi.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="kopi-tara-map-wrapper">
            <div className="kopi-tara-map-box">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&auto=format&fit=crop&q=80" 
                alt="Biji Kopi Nusantara" 
                className="kopi-tara-map-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* Filter SVG Rahasia untuk Uap */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="kopi-uap-alami">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" />
        </filter>
      </svg>
    </div>
  );
};

export default About;