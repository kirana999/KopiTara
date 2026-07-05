import React, { useEffect, useRef } from 'react';
import '../styles/global.css';

const Navbar = () => {
  const navRef = useRef(null);

  // Add 'scrolled' class when user has scrolled down past the initial viewport
  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 80) {
        navRef.current.classList.add('scrolled');
      } else {
        navRef.current.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav ref={navRef} className="navbar" id="main-navbar">
      <div className="container nav-wrapper">

        {/* Logo */}
        <a href="/" className="logo-brand">
          <img src="/images/logo-kopitara.png" alt="Logo Kopi Tara" className="logo-img" />
        </a>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="/">Beranda</a></li>
          <li><a href="/tentang-kami">Tentang Kami</a></li>
          <li><a href="/katalog">Katalog Produk</a></li>
        </ul>

        {/* CTA */}
        <div className="nav-actions">
          <a href="/katalog" className="btn-pesan">Beli Sekarang</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;