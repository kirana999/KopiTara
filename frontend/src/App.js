import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog'; // Siapkan untuk integrasi katalog

// Import Components (Jika ada Navbar/Footer global)
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
      {/* Navbar diletakkan di luar Routes agar muncul di semua halaman */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/katalog" element={<Catalog />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;