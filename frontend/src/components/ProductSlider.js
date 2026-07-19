import React, { useState } from 'react';

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 text-[#D7A86E]">
        Tidak ada produk ditemukan.
      </div>
    );
  }

  const currentProduct = products[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-[#2A160E] text-white flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* SISI KIRI: SLIDER GAMBAR */}
        <div className="relative flex justify-center items-center group">
          {/* Tombol Kiri */}
          <button
            onClick={handlePrev}
            className="absolute left-2 z-10 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all focus:outline-none"
          >
            &#10094;
          </button>

          {/* Frame Gambar */}
          <div className="w-full max-w-[400px] aspect-[3/4] overflow-hidden rounded-lg shadow-2xl bg-[#1F0F0A] flex items-center justify-center">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-full h-full object-cover select-none transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Tombol Kanan */}
          <button
            onClick={handleNext}
            className="absolute right-2 z-10 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all focus:outline-none"
          >
            &#10095;
          </button>
        </div>

        {/* SISI KANAN: DETAIL PRODUK */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <span className="text-[#D7A86E] text-sm font-semibold uppercase tracking-wider">
              Kopitara Eksklusif
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-1">
              {currentProduct.name}
            </h1>
          </div>
          
          <div className="h-[2px] w-full bg-[#D7A86E]/30" />

          {/* Deskripsi & Taste Notes */}
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {currentProduct.description}
          </p>

          {/* Varian Harga */}
          <div className="bg-[#1F0F0A] p-4 rounded-lg border border-[#D7A86E]/20 space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Estimasi Harga / 100gr:</span>
              <span className="text-white font-medium">Rp {currentProduct.price100g?.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Estimasi Harga / 1kg:</span>
              <span className="text-white font-medium">Rp {currentProduct.price1kg?.toLocaleString('id-ID')}</span>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="pt-4">
            <a
              href={currentProduct.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#D7A86E] hover:text-[#f4c68f] font-bold text-lg transition-colors group"
            >
              Beli Sekarang / Hubungi Kami
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                &gt;&gt;
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductSlider;