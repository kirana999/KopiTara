import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-navigation">
      <div className="footer-content-container">
        
        {/* KOLOM 1: Logo */}
        <div className="footer-column brand-col">
          <img src="/images/logo-kopitara.png" alt="Kopi Tara" className="footer-logo-img" />
        </div>

        {/* KOLOM 2: Navigasi */}
        <div className="footer-column nav-col">
          <h3 className="footer-col-title">Navigasi</h3>
          <div className="footer-nav-links">
            <Link to="/" className="footer-nav-item"><strong>Beranda</strong><br/><small>Menu utama</small></Link>
            <Link to="/tentang" className="footer-nav-item"><strong>Tentang Kami</strong><br/><small>Filosofi kami</small></Link>
            <Link to="/katalog" className="footer-nav-item"><strong>Katalog</strong><br/><small>Varian kopi</small></Link>
          </div>
        </div>

        {/* KOLOM 3: Alamat (Atas) & Ikon Sosmed (Bawah) */}
        <div className="footer-column address-social-col">
          <h3 className="footer-col-title">Alamat Kami</h3>
          <p className="footer-address-text">
            Jl. Kelurahan Pd. Rajeg, Pd. Rajeg,<br/>Kec. Cibinong, Kabupaten Bogor, <br/>Jawa Barat 16413
          </p>
          
          <div className="footer-social-links">
            <a href="https://www.instagram.com/kopitaraberkah?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/62817745551" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:halo@kopi-tara.id" className="social-icon" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom-bar">
        <p>&copy; {new Date().getFullYear()} Kopi Tara. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;