import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';

const Home = () => {
  // Fungsi pembantu untuk mengarahkan ke katalog sambil membawa filter nama daerah
  const handleRegionClick = (regionName) => {
    // Pengunjung akan diarahkan ke halaman katalog dengan parameter query daerah
    window.location.href = `/katalog?daerah=${encodeURIComponent(regionName)}`;
  };

  return (
    <div className="home-page">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container">
          <h1>Setiap cangkir,<br/>diracik menuju kesempurnaan.</h1>
          <p>Temukan kenikmatan kopi premium nusantara dari petani lokal dalam nuansa yang hangat dan autentik.</p>
          {/* Mengubah tautan langsung ke halaman Katalog */}
          <a href="/katalog" className="btn-primary">Lihat Katalog Produk</a>
        </div>
      </section>

      {/* 2. PROSES KAMI SECTION */}
      <section className="process-section container">
        <h2>Kenali Proses Kami</h2>
        <p className="process-subtitle">Dedikasi kami tertuang dalam setiap langkah perjalanan kopi dari kebun hingga ke tangan Anda.</p>
        
        <div className="process-grid">
          <div className="process-card">
            <div className="card-img-placeholder"></div> {/* Nanti diisi foto/gambar */}
            <div className="card-content">
              <h3>Seleksi Petani</h3>
              <p>Kami bermitra langsung dengan petani lokal untuk memastikan biji kopi pilihan terbaik.</p>
            </div>
          </div>

          <div className="process-card">
            <div className="card-img-placeholder"></div>
            <div className="card-content">
              <h3>Sangrai Sempurna</h3>
              <p>Teknik *roasting* presisi untuk menonjolkan karakter unik setiap biji kopi.</p>
            </div>
          </div>

          <div className="process-card">
            <div className="card-img-placeholder"></div>
            <div className="card-content">
              <h3>Giling Segar</h3>
              <p>Kopi digiling tepat saat pesanan tiba, menjaga kesegaran dan aroma asli.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NARRATIVE STORY SECTION (Kutipan Owner & Foto Kemasan) */}
      <section className="story-section">
        <div className="container story-wrapper">
          
          {/* Tempat Foto Kemasan */}
          <div className="story-image-container">
            <img 
              // Ganti URL ini nanti dengan foto kemasan asli (misal: src="/images/kemasan-kopi.jpg")
              src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Kemasan Kopi Tara" 
              className="story-image"
            />
          </div>

          {/* Konten Kutipan Owner */}
          <div className="story-content">
            <h2>Mengapa Kopi Tara Tercipta?</h2>
            
            <blockquote className="owner-quote">
              "Kopi Tara lahir dari sebuah kesadaran besar untuk menjaga kelestarian alam. Berawal dari bisnis furnitur kayu jati 'Awet Jati', kami melihat urgensi untuk beralih ke komoditas yang jauh lebih ramah terhadap ekosistem hutan kita. Kopi adalah jawabannya—sebuah buah ajaib yang membawa kemakmuran tanpa merusak bumi tempatnya tumbuh."
            </blockquote>
            <p className="owner-name">— Founder, Kopi Tara</p>
            
            <p className="story-description">
              Kami memproses biji kopi murni pilihan secara tradisional dan memastikan kesegarannya dengan konsep <strong>"digiling langsung di tempat saat Anda memesan"</strong>. Setiap cangkir yang Anda nikmati merupakan bentuk dukungan nyata terhadap masa depan mahasiswa lokal yang kami berdayakan.
            </p>

            {/* Tautan Kontak & Sosial Media */}
            <div className="owner-contacts">
              <a href="https://instagram.com/kopitaraberkah" target="_blank" rel="noopener noreferrer" className="contact-link">
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

      {/* 4. REGIONS SECTION (Fitur klik interaktif diarahkan ke katalog berdasarkan daerah) */}
      <section className="regions-section">
        <div className="container">
          <h2>Kekayaan Kopi Nusantara</h2>
          <p>Kopi ibarat buah, membawa cita rasa unik dari tanah kelahirannya. Klik salah satu daerah di bawah untuk melihat koleksi produk spesifik dari wilayah tersebut:</p>
          
          <div className="regions-list">
            {[
              'Temanggung', 'Garut', 'Cianjur', 'Solo', 'Karawang', 
              'Malabar', 'Bali', 'Lampung', 'Aceh', 'Medan'
            ].map((daerah) => (
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