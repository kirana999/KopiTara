import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';

function App() {
  return (
    <Router>
      {/* Navbar is included per-page to allow z-index layering over cinematic hero */}
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/tentang-kami"  element={<About />} />
        <Route path="/katalog"       element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;