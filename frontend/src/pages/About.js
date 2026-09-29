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

  {/* Dekorasi background */}
  <div className="hero-decor-left" aria-hidden="true">
    <span>OUR STORY</span>
    <i></i>
    <span>KOPI TARA</span>
  </div>

  <div className="hero-coffee-bean hero-bean-one" aria-hidden="true"></div>
  <div className="hero-coffee-bean hero-bean-two" aria-hidden="true"></div>
  <div className="hero-curved-line hero-line-right" aria-hidden="true"></div>
  <div className="hero-curved-line hero-line-left" aria-hidden="true"></div>

  {/* Teks hero */}
  <div className="kopi-tara-hero-text">
    <div className="kopi-tara-hero-eyebrow">
      <span></span>
      <p>TENTANG KAMI</p>
      <span></span>
    </div>

    <h1 className="kopi-tara-hero-title">
      CERITA DI BALIK RASA
    </h1>

    <p className="kopi-tara-hero-tagline">
      Lebih dari sekadar cangkir kopi harian Anda. Kenali lebih dekat
      perjalanan Kopi Tara dalam menghadirkan buah ajaib Nusantara
      yang membawa kebaikan untuk alam dan sesama.
    </p>
  </div>

  {/* Cangkir kopi */}
  <div className="kopi-tara-cup-container">
    <div className="kopi-uap-wrapper">
      <span style={{ "--i": 1 }}></span>
      <span style={{ "--i": 3 }}></span>
      <span style={{ "--i": 2 }}></span>
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

    <div className="kopi-tara-story-eyebrow">
      <span></span>
      FILOSOFI KAMI
      <span></span>
    </div>

    <h2 className="kopi-tara-story-title">
      Langkah Baru untuk Bumi
    </h2>

    <div className="kopi-tara-story-text">
      <p>
        Kopi Tara lahir dari sebuah kesadaran besar untuk menjaga
        kelestarian alam. Berawal dari bisnis furnitur kayu jati
        'Awet Jati', kami melihat urgensi untuk beralih ke komoditas
        yang jauh lebih ramah terhadap ekosistem hutan kita. Kopi
        adalah jawabannya—sebuah buah ajaib yang membawa kemakmuran
        tanpa merusak bumi tempatnya tumbuh.
      </p>

      <p className="owner-name">
        <span></span>
        Founder, Kopi Tara
        <span></span>
      </p>
    </div>

  </div>

  {/* Dekorasi section krem */}
  <div className="story-coffee-bean story-bean-one" aria-hidden="true"></div>
  <div className="story-coffee-bean story-bean-two" aria-hidden="true"></div>
  <div className="story-quote-mark" aria-hidden="true">“</div>

</section>

{/* ================= ABOUT SECTION (VISI & MISI) ================= */}
<section className="kopi-tara-about-section">
  <div className="kopi-tara-about-container">

    {/* ================= KOLOM KIRI ================= */}
    <div className="kopi-tara-about-content">

      <span className="kopi-tara-about-subtitle">
        Arah & Tujuan Kami
      </span>

      <h2 className="kopi-tara-about-title">
        Visi <span>&</span> Misi
      </h2>

      <div className="kopi-tara-title-line"></div>

      {/* ================= VISI ================= */}
      <div className="visi-misi-block visi-block">

        <div className="visi-misi-heading">
          <div className="visi-misi-icon">
            ◉
          </div>

          <div>
            <span className="visi-misi-small-title">
              Arah Kami
            </span>

            <h3>Visi</h3>
          </div>
        </div>

        <p>
          Menjadi pelopor komoditas kopi Nusantara yang mandiri dan
          berkelanjutan, sekaligus menjadi pilar utama dalam pemulihan
          serta pelestarian ekosistem hutan Indonesia.
        </p>

      </div>


      {/* ================= MISI ================= */}
      <div className="visi-misi-block misi-block">

        <div className="visi-misi-heading">
          <div className="visi-misi-icon misi-icon">
            ✦
          </div>

          <div>
            <span className="visi-misi-small-title">
              Langkah Kami
            </span>

            <h3>Misi</h3>
          </div>
        </div>


        <div className="misi-list">

          {/* Misi 1 */}
          <div className="misi-item">

            <div className="misi-number">
              01
            </div>

            <p>
              Mengalihkan pemanfaatan hasil hutan kayu ke komoditas
              kopi yang ramah terhadap ekosistem.
            </p>

          </div>


          {/* Misi 2 */}
          <div className="misi-item">

            <div className="misi-number">
              02
            </div>

            <p>
              Menghadirkan produk kopi Nusantara berkualitas tinggi
              yang diproduksi secara etis dan bertanggung jawab.
            </p>

          </div>


          {/* Misi 3 */}
          <div className="misi-item">

            <div className="misi-number">
              03
            </div>

            <p>
              Membangun kesadaran konsumen akan pentingnya menjaga
              kelestarian alam lewat setiap cangkir kopi.
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* ================= KOLOM KANAN ================= */}
    <div className="kopi-tara-map-wrapper">

      <div className="kopi-tara-image-decoration decoration-one"></div>
      <div className="kopi-tara-image-decoration decoration-two"></div>

      <div className="kopi-tara-map-box">

        <div className="kopi-tara-image-label">
          <span>☕</span>
          <p>Kopi untuk<br />Alam</p>
        </div>

        <img
          src="/images/tangan-petani.png"
          alt="Petani memetik buah kopi Nusantara"
          className="kopi-tara-map-img"
        />

        <div className="kopi-tara-image-caption">
          <span>☼</span>
          <p>
            Dari alam,<br />
            untuk masa depan.
          </p>
        </div>

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