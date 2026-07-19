const pool = require('./db');

const seedDatabase = async () => {
  try {
    console.log('Memulai migrasi penuh 33 baris menu KopiTara...');

    // 1. Reset tabel
    await pool.query('DROP TABLE IF EXISTS products;');

    // 2. Buat ulang struktur tabel
    await pool.query(`
      CREATE TABLE products (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          image_url VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          packaging_type VARCHAR(50) NOT NULL,
          weight VARCHAR(50) NOT NULL,
          price INTEGER NOT NULL
      );
    `);

    // 3. Masukkan data dengan deskripsi presisi sesuai karakter rasa kopi masing-masing
    const insertQuery = `
      INSERT INTO products (name, image_url, description, packaging_type, weight, price)
      VALUES 
      -- 1. Arabika Pieberry (2 Varian Berat)
      ('Arabika Pieberry', '/images/produk-1.png', 'Kopi biji tunggal (lanang) langka dengan konsentrasi rasa yang intens, keasaman cerah, serta aroma bunga yang elegan.', 'Biji', '100 gr', 40000),
      ('Arabika Pieberry', '/images/produk-1.png', 'Kopi biji tunggal (lanang) langka dengan konsentrasi rasa yang intens, keasaman cerah, serta aroma bunga yang elegan.', 'Biji', '1 kg', 400000),
      
      -- 2. Arabika Longberry (2 Varian Berat)
      ('Arabika Longberry', '/images/produk-2.png', 'Biji kopi memanjang khas dataran tinggi dengan body ringan hingga medium, rasa buah yang manis, serta keasaman bersih.', 'Biji', '100 gr', 40000),
      ('Arabika Longberry', '/images/produk-2.png', 'Biji kopi memanjang khas dataran tinggi dengan body ringan hingga medium, rasa buah yang manis, serta keasaman bersih.', 'Biji', '1 kg', 400000),

      -- 3. Arabika Sidikalang (2 Varian Berat)
      ('Arabika Sidikalang', '/images/produk-3.png', 'Cita rasa klasik Sumatra yang legendaris, keasaman yang halus dan seimbang, dibalut aroma karamel manis yang legit.', 'Biji', '100 gr', 25000),
      ('Arabika Sidikalang', '/images/produk-3.png', 'Cita rasa klasik Sumatra yang legendaris, keasaman yang halus dan seimbang, dibalut aroma karamel manis yang legit.', 'Biji', '1 kg', 250000),

      -- 4. Arabika Gayo (2 Varian Berat)
      ('Arabika Gayo', '/images/produk-4.png', 'Ciri khas earthy spice yang kompleks, bodi tebal, tingkat keasaman rendah, dengan sentuhan akhir dark chocolate yang mewah.', 'Biji', '100 gr', 22000),
      ('Arabika Gayo', '/images/produk-4.png', 'Ciri khas earthy spice yang kompleks, bodi tebal, tingkat keasaman rendah, dengan sentuhan akhir dark chocolate yang mewah.', 'Biji', '1 kg', 220000),

      -- 5. Arabika Luwak (2 Varian Berat)
      ('Arabika Luwak', '/images/produk-5.png', 'Kopi premium eksklusif dengan rasa yang sangat lembut (smooth), bebas dari rasa pahit berlebih, keasaman sangat rendah, dan sentuhan aroma melati.', 'Biji', '100 gr', 55000),
      ('Arabika Luwak', '/images/produk-5.png', 'Kopi premium eksklusif dengan rasa yang sangat lembut (smooth), bebas dari rasa pahit berlebih, keasaman sangat rendah, dan sentuhan aroma melati.', 'Biji', '1 kg', 550000),

      -- 6. Arabika Malabar (2 Varian Berat)
      ('Arabika Malabar', '/images/produk-6.png', 'Sensasi rasa cokelat susu yang manis berpadu dengan body medium, keasaman buah tropis, serta aroma roasted nut yang memikat.', 'Biji', '100 gr', 25000),
      ('Arabika Malabar', '/images/produk-6.png', 'Sensasi rasa cokelat susu yang manis berpadu dengan body medium, keasaman buah tropis, serta aroma roasted nut yang memikat.', 'Biji', '1 kg', 250000),

      -- 7. Arabika Colombia (2 Varian Berat)
      ('Arabika Colombia', '/images/produk-7.png', 'Kopi standar internasional dengan keseimbangan rasa yang sempurna antara keasaman jeruk citrus segar dan rasa manis karamel yang lembut.', 'Biji', '100 gr', 50000),
      ('Arabika Colombia', '/images/produk-7.png', 'Kopi standar internasional dengan keseimbangan rasa yang sempurna antara keasaman jeruk citrus segar dan rasa manis karamel yang lembut.', 'Biji', '1 kg', 500000),

      -- 8. Arabika Temanggung (2 Varian Berat)
      ('Arabika Temanggung', '/images/produk-8.png', 'Perpaduan unik rasa cokelat pekat (bold dark chocolate) dengan sentuhan rempah pegunungan dan keasaman bersih khas Temanggung.', 'Biji', '100 gr', 25000),
      ('Arabika Temanggung', '/images/produk-8.png', 'Perpaduan unik rasa cokelat pekat (bold dark chocolate) dengan sentuhan rempah pegunungan dan keasaman bersih khas Temanggung.', 'Biji', '1 kg', 250000),

      -- 9. Arabika Geisha (2 Varian Berat)
      ('Arabika Geisha', '/images/produk-9.png', 'Varietas bangsawan kopi dunia, menyajikan aroma floral melati yang sangat wangi, body menyerupai teh, dan kejernihan rasa buah yang elegan.', 'Biji', '100 gr', 45000),
      ('Arabika Geisha', '/images/produk-9.png', 'Varietas bangsawan kopi dunia, menyajikan aroma floral melati yang sangat wangi, body menyerupai teh, dan kejernihan rasa buah yang elegan.', 'Biji', '1 kg', 450000),

      -- 10. Arabika Ijen Raung (2 Varian Berat)
      ('Arabika Ijen Raung', '/images/produk-10.png', 'Kopi khas Banyuwangi dengan tingkat keasaman jeruk yang renyah (clean crisp acidity) disertai aroma rempah dan gula aren.', 'Biji', '100 gr', 27000),
      ('Arabika Ijen Raung', '/images/produk-10.png', 'Kopi khas Banyuwangi dengan tingkat keasaman jeruk yang renyah (clean crisp acidity) disertai aroma rempah dan gula aren.', 'Biji', '1 kg', 270000),

      -- 11. Arabika Ciwidey (2 Varian Berat)
      ('Arabika Ciwidey', '/images/produk-11.png', 'Menawarkan aroma floral manis yang harum, bodi ringan hingga medium, dengan setelah rasa (aftertaste) jeruk citrus yang segar.', 'Biji', '100 gr', 25000),
      ('Arabika Ciwidey', '/images/produk-11.png', 'Menawarkan aroma floral manis yang harum, bodi ringan hingga medium, dengan setelah rasa (aftertaste) jeruk citrus yang segar.', 'Biji', '1 kg', 250000),

      -- 12. Arabika Puntang (2 Varian Berat)
      ('Arabika Puntang', '/images/produk-12.png', 'Kopi berprestasi asal Jawa Barat dengan rasa manis alami menyerupai madu, keasaman buah tropis yang clean, serta aroma harum yang tahan lama.', 'Biji', '100 gr', 30000),
      ('Arabika Puntang', '/images/produk-12.png', 'Kopi berprestasi asal Jawa Barat dengan rasa manis alami menyerupai madu, keasaman buah tropis yang clean, serta aroma harum yang tahan lama.', 'Biji', '1 kg', 300000),

      -- 13. Arabika Lintong (2 Varian Berat)
      ('Arabika Lintong', '/images/produk-13.png', 'Kopi dengan aroma kayu cedar yang mendalam, body tebal herbal, keasaman rendah, khas metode pemrosesan tradisional giling basah.', 'Biji', '100 gr', 25000),
      ('Arabika Lintong', '/images/produk-13.png', 'Kopi dengan aroma kayu cedar yang mendalam, body tebal herbal, keasaman rendah, khas metode pemrosesan tradisional giling basah.', 'Biji', '1 kg', 250000),

      -- 14. Arabika Brazil (2 Varian Berat)
      ('Arabika Brazil', '/images/produk-14.png', 'Kopi impor populer berkarakter ramah dengan body tebal, keasaman rendah, serta dominasi rasa kacang hazelnut dan cokelat krim.', 'Biji', '100 gr', 50000),
      ('Arabika Brazil', '/images/produk-14.png', 'Kopi impor populer berkarakter ramah dengan body tebal, keasaman rendah, serta dominasi rasa kacang hazelnut dan cokelat krim.', 'Biji', '1 kg', 500000),

      -- 15. Arabika Mekar Wangi (2 Varian Berat)
      ('Arabika Mekar Wangi', '/images/produk-15.png', 'Sesuai namanya, menyuguhkan ledakan aroma wangi bunga segar saat diseduh, body lembut, dengan keasaman buah yang manis seimbang.', 'Biji', '100 gr', 25000),
      ('Arabika Mekar Wangi', '/images/produk-15.png', 'Sesuai namanya, menyuguhkan ledakan aroma wangi bunga segar saat diseduh, body lembut, dengan keasaman buah yang manis seimbang.', 'Biji', '1 kg', 250000),

      -- 16. Arabika Bali Kintamani (2 Varian Berat)
      ('Arabika Bali Kintamani', '/images/produk-16.png', 'Keunikan rasa buah jeruk (citrusy) alami yang kuat akibat ditanam berdampingan dengan kebun jeruk, bodi bersih dan menyegarkan.', 'Biji', '100 gr', 25000),
      ('Arabika Bali Kintamani', '/images/produk-16.png', 'Keunikan rasa buah jeruk (citrusy) alami yang kuat akibat ditanam berdampingan dengan kebun jeruk, bodi bersih dan menyegarkan.', 'Biji', '1 kg', 250000),

      -- 17. Arabika Flores Bajawa (2 Varian Berat)
      ('Arabika Flores Bajawa', '/images/produk-17.png', 'Kopi Indonesia timur berkarakter body medium kuat, aroma caramel manis, rasa kacang-kacangan, dengan tingkat keasaman sedang.', 'Biji', '100 gr', 27000),
      ('Arabika Flores Bajawa', '/images/produk-17.png', 'Kopi Indonesia timur berkarakter body medium kuat, aroma caramel manis, rasa kacang-kacangan, dengan tingkat keasaman sedang.', 'Biji', '1 kg', 270000),

      -- 18. Arabika Garut (2 Varian Berat)
      ('Arabika Garut', '/images/produk-18.png', 'Kopi berkarakter unik dengan paduan aroma sereh herbal (lemongrass), body ringan yang jernih, serta manis tebu alami di akhir.', 'Biji', '100 gr', 25000),
      ('Arabika Garut', '/images/produk-18.png', 'Kopi berkarakter unik dengan paduan aroma sereh herbal (lemongrass), body ringan yang jernih, serta manis tebu alami di akhir.', 'Biji', '1 kg', 250000),

      -- 19. Robusta Dampit (2 Varian Berat)
      ('Robusta Dampit', '/images/produk-19.png', 'Robusta unggulan dengan aroma kacang manis dan body cokelat pekat. Sangat cocok sebagai bahan dasar kopi susu kekinian atau espresso.', 'Biji', '100 gr', 16000),
      ('Robusta Dampit', '/images/produk-19.png', 'Robusta unggulan dengan aroma kacang manis and body cokelat pekat. Sangat cocok sebagai bahan dasar kopi susu kekinian atau espresso.', 'Biji', '1 kg', 160000),

      -- 20. Robusta Kerinci (2 Varian Berat)
      ('Robusta Kerinci', '/images/produk-20.png', 'Ditanam di lereng gunung api, menghasilkan body yang sangat tebal, crema melimpah, serta aroma kayu manis dan rempah hangat.', 'Biji', '100 gr', 16000),
      ('Robusta Kerinci', '/images/produk-20.png', 'Ditanam di lereng gunung api, menghasilkan body yang sangat tebal, crema melimpah, serta aroma kayu manis dan rempah hangat.', 'Biji', '1 kg', 160000),

      -- 21. Robusta Toraja (2 Varian Berat)
      ('Robusta Toraja', '/images/produk-21.png', 'Robusta berkarakter tangguh dari pulau Sulawesi, menawarkan bodi penuh yang mantap berpadu rasa dark cocoa terstruktur.', 'Biji', '100 gr', 16000),
      ('Robusta Toraja', '/images/produk-21.png', 'Robusta berkarakter tangguh dari pulau Sulawesi, menawarkan bodi penuh yang mantap berpadu rasa dark cocoa terstruktur.', 'Biji', '1 kg', 160000),

      -- 22. Robusta Pagar Alam (2 Varian Berat)
      ('Robusta Pagar Alam', '/images/produk-22.png', 'Menyuguhkan rasa pahit kopi yang solid dan bersih, aroma jagung bakar yang khas, dengan bodi tebal tanpa asam.', 'Biji', '100 gr', 16000),
      ('Robusta Pagar Alam', '/images/produk-22.png', 'Menyuguhkan rasa pahit kopi yang solid dan bersih, aroma jagung bakar yang khas, dengan bodi tebal tanpa asam.', 'Biji', '1 kg', 160000),

      -- 23. Robusta Vietnam (2 Varian Berat)
      ('Robusta Vietnam', '/images/produk-23.png', 'Kopi dengan tendangan kafein tinggi dan rasa pahit pekat yang kuat. Pilihan utama untuk racikan kopi susu drip tradisional (Ca phe sua da).', 'Biji', '100 gr', 16000),
      ('Robusta Vietnam', '/images/produk-23.png', 'Kopi dengan tendangan kafein tinggi dan rasa pahit pekat yang kuat. Pilihan utama untuk racikan kopi susu drip tradisional (Ca phe sua da).', 'Biji', '1 kg', 160000),

      -- 24. Robusta Malabar (2 Varian Berat)
      ('Robusta Malabar', '/images/produk-24.png', 'Memiliki rasa pahit cokelat pekat yang bersih (clean bitter), aroma earthy yang hangat, serta tingkat kekentalan body yang memuaskan.', 'Biji', '100 gr', 16000),
      ('Robusta Malabar', '/images/produk-24.png', 'Memiliki rasa pahit cokelat pekat yang bersih (clean bitter), aroma earthy yang hangat, serta tingkat kekentalan body yang memuaskan.', 'Biji', '1 kg', 160000),

      -- 25. Robusta Temanggung (2 Varian Berat)
      ('Robusta Temanggung', '/images/produk-25.png', 'Robusta juara beraroma tembakau murni yang unik, body sangat pekat berkarakter bold, dengan sentuhan rasa cokelat hitam tradisional.', 'Biji', '100 gr', 16000),
      ('Robusta Temanggung', '/images/produk-25.png', 'Robusta juara beraroma tembakau murni yang unik, body sangat pekat berkarakter bold, dengan sentuhan rasa cokelat hitam tradisional.', 'Biji', '1 kg', 160000),

      -- 26. Robusta sidikalang (2 Varian Berat)
      ('Robusta sidikalang', '/images/produk-26.png', 'Legenda robusta Sumatra dengan aroma wangi cokelat yang harum, tekstur sangat kental (creamy), dan minim rasa asam.', 'Biji', '100 gr', 16000),
      ('Robusta sidikalang', '/images/produk-26.png', 'Legenda robusta Sumatra dengan aroma wangi cokelat yang harum, tekstur sangat kental (creamy), dan minim rasa asam.', 'Biji', '1 kg', 160000),

      -- 27. Robusta Semar Mesem (2 Varian Berat)
      ('Robusta Semar Mesem', '/images/produk-27.png', 'Kopi racikan pusaka berkarakter pemanggangan gelap (dark roast), body sangat mantap, memberikan rasa pahit klasik yang bikin kangen.', 'Biji', '100 gr', 16000),
      ('Robusta Semar Mesem', '/images/produk-27.png', 'Kopi racikan pusaka berkarakter pemanggangan gelap (dark roast), body sangat mantap, memberikan rasa pahit klasik yang bikin kangen.', 'Biji', '1 kg', 160000),

      -- 28. Robusta Lampung (2 Varian Berat)
      ('Robusta Lampung', '/images/produk-28.png', 'Kopi ikonik Sumatra berbody tebal pekat, aroma khas roasting tradisional yang kuat, dengan rasa kakao pahit yang tahan lama.', 'Biji', '100 gr', 16000),
      ('Robusta Lampung', '/images/produk-28.png', 'Kopi ikonik Sumatra berbody tebal pekat, aroma khas roasting tradisional yang kuat, dengan rasa kakao pahit yang tahan lama.', 'Biji', '1 kg', 160000),

      -- 29. Kapal Otok-Otok Robusta Dampit
      ('Kapal Otok-Otok Robusta Dampit', '/images/produk-29.png', 'Varian kopi bubuk saset praktis racikan khas nusantara menggunakan biji Robusta Dampit murni yang wangi dan gurih.', 'Saset', '50 gr', 5000),

      -- 30. Kapal Otok-Otok Robusta Toraja
      ('Kapal Otok-Otok Robusta Toraja', '/images/produk-30.png', 'Kopi saset instan dengan kepekatan penuh beraroma dark cocoa khas Toraja, nikmat diseduh kapan pun.', 'Saset', '50 gr', 5000),

      -- 31. Kapal Otok-Otok Robusta Kerinci
      ('Kapal Otok-Otok Robusta Kerinci', '/images/produk-31.png', 'Kopi saset siap saji yang membawa sensasi body tebal beraroma rempah gunung berapi khas Kerinci.', 'Saset', '50 gr', 5000),

      -- 32. Kapal Otok-Otok Robusta Temanggung
      ('Kapal Otok-Otok Robusta Temanggung', '/images/produk-32.png', 'Kenikmatan saset kopi hitam beraroma roasted tobacco khas Temanggung yang kuat dengan takaran manis pas.', 'Saset', '50 gr', 5000),

      -- 33. Excelsa Ijen (2 Varian Berat)
      ('Excelsa Ijen', '/images/produk-33.png', 'Spesies kopi langka (asri ijen) berkarakter rasa eksotis menyerupai buah nangka, keasaman buah yang unik, dengan setelah rasa woody yang kaya.', 'Biji', '100 gr', 30000),
      ('Excelsa Ijen', '/images/produk-33.png', 'Spesies kopi langka (asri ijen) berkarakter rasa eksotis menyerupai buah nangka, keasaman buah yang unik, dengan setelah rasa woody yang kaya.', 'Biji', '1 kg', 300000)
    `;

    await pool.query(insertQuery);
    console.log('Seluruh 33 data menu KopiTara berhasil diperbarui di PostgreSQL Docker!');

  } catch (err) {
    console.error('Eror saat proses seeding:', err);
  } finally {
    await pool.end();
    console.log('Proses selesai.');
  }
};

seedDatabase();