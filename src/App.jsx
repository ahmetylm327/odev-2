import React, { useState, useEffect } from 'react';
import AramaCubugu from './components/AramaCubugu.jsx';
import KategoriFiltre from './components/KategoriFiltre.jsx';
import KitapListe from './components/KitapListe.jsx';
import FavoriPaneli from './components/FavoriPaneli.jsx';
import { BASTAKI_KITAPLAR } from './data'; // .js uzantısı önemli
import './App.css';

// localStorage'dan veriyi okumak için yardımcı fonksiyonlar
const getBaslangicArama = () => {
  return localStorage.getItem('sonArama') || '';
};

const getBaslangicFavoriler = () => {
  const kayitliFavoriler = localStorage.getItem('favoriler');
  return kayitliFavoriler ? JSON.parse(kayitliFavoriler) : [];
};

function App() {
  const [aramaMetni, setAramaMetni] = useState(getBaslangicArama);
  const [kategori, setKategori] = useState('Tümü');
  const [favoriler, setFavoriler] = useState(getBaslangicFavoriler);

  // Ödev Gereksinimi: sonArama ve favoriler localStorage'a kaydedilmeli
  useEffect(() => {
    localStorage.setItem('sonArama', aramaMetni);
  }, [aramaMetni]);

  useEffect(() => {
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [favoriler]);

  // Filtreleme mantığı
  const goruntulenecekKitaplar = BASTAKI_KITAPLAR.filter((kitap) => {
    const kategoriFiltresiGecti =
      kategori === 'Tümü' || kitap.kategori === kategori;
    const aramaFiltresiGecti = kitap.baslik
      .toLowerCase()
      .includes(aramaMetni.toLowerCase());
    return kategoriFiltresiGecti && aramaFiltresiGecti;
  });

  const favoriKitaplar = BASTAKI_KITAPLAR.filter((kitap) =>
    favoriler.includes(kitap.id)
  );

  const kategoriler = [
    'Tümü',
    ...new Set(BASTAKI_KITAPLAR.map((k) => k.kategori)),
  ];

  const handleToggleFavori = (id) => {
    if (favoriler.includes(id)) {
      setFavoriler(favoriler.filter((favId) => favId !== id));
    } else {
      setFavoriler([...favoriler, id]);
    }
  };

  const handleFavoriKaldir = (id) => {
    setFavoriler(favoriler.filter((favId) => favId !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Mini Kitaplık</h1>
      </header>
      <div className="filtre-alani">
        <AramaCubugu
          aramaMetni={aramaMetni}
          onArama={(e) => setAramaMetni(e.target.value)}
        />
        <KategoriFiltre
          seciliKategori={kategori}
          kategoriler={kategoriler}
          onKategoriDegistir={(e) => setKategori(e.target.value)}
        />
      </div>
      <main className="icerik-alani">
        <KitapListe
          kitaplar={goruntulenecekKitaplar}
          favoriler={favoriler}
          onToggleFavori={handleToggleFavori}
        />
        <FavoriPaneli
          favoriKitaplar={favoriKitaplar}
          onFavoriKaldir={handleFavoriKaldir}
        />
      </main>
    </div>
  );
}

export default App;