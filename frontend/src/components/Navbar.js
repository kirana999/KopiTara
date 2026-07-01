import React from 'react';
import '../styles/global.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-wrapper">
        
       {/* Bagian Logo Kopi Tara - Ganti teks dengan gambar */}
        <a href="/" className="logo-brand">
          <img src="/images/logo-kopitara.png" alt="Logo Kopi Tara" className="logo-img" />
        </a>

        {/* Tautan Navigasi Tengah */}
        <ul className="nav-links">
          <li><a href="/">Beranda</a></li>
          <li><a href="/tentang-kami">Tentang Kami</a></li>
          <li><a href="/katalog">Katalog Produk</a></li>
        </ul>

        {/* Tombol Aksi Kanan */}
        <div className="nav-actions">
          <a href="/katalog" className="btn-pesan">Beli Sekarang</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;