import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css'; // Memanggil global.css tempat style berada

const About = () => {
  return (
    <div className="kopi-tara-page-wrapper">
      <Navbar />

      {/* ================= HERO SECTION (BAGIAN ATAS) ================= */}
      <header className="kopi-tara-hero">
        <div className="kopi-tara-hero-text">
          <h1 className="kopi-tara-hero-title">CERITA DI BALIK RASA</h1>
          <p className="kopi-tara-hero-tagline">
            Lebih dari sekadar cangkir kopi harian Anda. Kenali lebih dekat perjalanan Kopi Tara dalam menghadirkan buah ajaib Nusantara yang membawa kebaikan untuk alam dan sesama.
          </p>
        </div>

        {/* Cangkir Kopi di Tengah yang Mengambang */}
        <div className="kopi-tara-cup-container">
            {/* ─── TAMBAHAN: ELEMEN UAP ANIMASI ─── */}
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

        {/* ─── BARU: SECTION CERITA ASAL USUL (SANGAT COCOK DI SINI) ─── */}
      <section className="kopi-tara-intro-story">
        <div className="kopi-tara-story-container">
          <h2 className="kopi-tara-story-title">Langkah Baru untuk Bumi</h2>
          <div className="kopi-tara-story-text">
            <p>
              Kopi Tara lahir dari sebuah kesadaran besar untuk menjaga kelestarian alam Indonesia. 
              Berawal dari bisnis furnitur kayu jati "Awet Jati", kami melihat urgensi yang mendalam 
              untuk beralih ke komoditas yang jauh lebih ramah terhadap ekosistem hutan kita.
            </p>
            <p>
              Kopi adalah jawaban terbaik yang kami temukan—sebuah buah ajaib yang mampu membawa 
              kemakmuran dan kesejahteraan bagi para petani lokal, tanpa harus merusak atau menebang 
              pohon di bumi tempatnya tumbuh. Setiap seduhan Kopi Tara adalah simbol komitmen kami 
              untuk hijau yang abadi.
            </p>
          </div>
        </div>
      </section>

{/* ================= ABOUT SECTION (VISI & MISI) ================= */}
      <section className="kopi-tara-about-section">
        <div className="kopi-tara-about-container">
          
          {/* Kolom Kiri: Visi & Misi */}
          <div className="kopi-tara-about-content">
            <span className="kopi-tara-about-subtitle">Arah & Tujuan Kami</span>
            <h2 className="kopi-tara-about-title">Visi & Misi</h2>
            
            <div className="kopi-tara-about-text">
              {/* Blok Visi */}
              <div className="visi-misi-block">
                <h3>Visi</h3>
                <p>
                  Menjadi pelopor komoditas kopi Nusantara yang mandiri dan berkelanjutan, 
                  sekaligus menjadi pilar utama dalam pemulihan serta pelestarian ekosistem hutan Indonesia.
                </p>
              </div>

              {/* Blok Misi */}
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

          {/* Kolom Kanan: Gambar Biji Kopi Nusantara */}
          <div className="kopi-tara-map-wrapper">
            <div className="kopi-tara-map-box">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&auto=format&fit=crop&q=80" 
                alt="Biji Kopi Nusantara" 
                className="kopi-tara-map-img" 
              />
              <div className="kopi-tara-map-tooltip">
                <div className="kopi-tara-tooltip-content">
                  <span className="kopi-tara-tooltip-title">BIJI PILIHAN</span>
                  <div className="kopi-tara-tooltip-stars">★★★★★</div>
                </div>
                <div className="kopi-tara-tooltip-arrow"></div>
                <div className="kopi-tara-map-pin"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* ================= MAP NUSANTARA SECTION ================= */}
      <section className="kopi-tara-nusantara-section">
        <div className="kopi-tara-map-header">
          <span className="kopi-tara-map-subtitle">Eksplorasi Varian</span>
          <h2 className="kopi-tara-map-title">Koleksi Kopi Nusantara</h2>
          <p className="kopi-tara-map-desc">
            Nikmati kekayaan cita rasa autentik dari berbagai penjuru Indonesia. 
            Setiap varian membawa karakter unik tanah asalnya langsung ke cangkir Anda.
          </p>
        </div>

        <div className="kopi-tara-nusantara-map-container">
          <div className="kopi-tara-nusantara-map-wrapper">
            
            {/* Gambar Peta Emas yang Baru */}
            <img 
              src="/images/peta-tara.png" // ◄ Pastikan file download (5).jfif sudah disimpan dengan nama ini di folder public/images/
              alt="Peta Nusantara Kopi Tara" 
              className="kopi-tara-indonesia-map-img" 
            />

            {/* PIN 1: ACEH GAYO (Ujung Kiri Atas Sumatera) */}
            <div className="kopi-pin-lokasi pin-gayo">
              <div className="kopi-kemasan-tooltip">
                <img src="/images/cangkir-kopi-tara.png" alt="Kopi Gayo" className="kopi-kemasan-mini-img" />
                <span className="kopi-nama-daerah">Aceh Gayo</span>
              </div>
              <div className="kopi-pulse-pin"></div>
            </div>

            {/* PIN 2: SULAWESI TORAJA (Bagian Tengah Pulau Sulawesi) */}
            <div className="kopi-pin-lokasi pin-toraja">
              <div className="kopi-kemasan-tooltip">
                <img src="/images/cangkir-kopi-tara.png" alt="Kopi Toraja" className="kopi-kemasan-mini-img" />
                <span className="kopi-nama-daerah">Toraja</span>
              </div>
              <div className="kopi-pulse-pin"></div>
            </div>

            {/* PIN 3: BALI KINTAMANI (Pulau Kecil di Bawah Timur Jawa) */}
            <div className="kopi-pin-lokasi pin-kintamani">
              <div className="kopi-kemasan-tooltip">
                <img src="/images/cangkir-kopi-tara.png" alt="Kopi Kintamani" className="kopi-kemasan-mini-img" />
                <span className="kopi-nama-daerah">Kintamani</span>
              </div>
              <div className="kopi-pulse-pin"></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );

  {/* Filter SVG Rahasia untuk Membuat Uap Meliuk Alami */}
<svg width="0" height="0" style={{ position: 'absolute' }}>
  <filter id="kopi-uap-alami" x="0%" y="0%" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
  </filter>
</svg>
};

export default About;