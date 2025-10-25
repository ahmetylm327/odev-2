import React from 'react';

const FavoriPaneli = ({ favoriKitaplar, onFavoriKaldir }) => {
    return (
        <div className="favori-paneli">
            <h3>Favoriler ({favoriKitaplar.length})</h3>
            <ul>
                {favoriKitaplar.length === 0 ? (
                    <li>Henüz favori kitap eklenmedi.</li>
                ) : (
                    favoriKitaplar.map((kitap) => (
                        <li key={kitap.id}>
                            <span>{kitap.baslik}</span>
                            <button
                                className="kaldir-butonu"
                                onClick={() => onFavoriKaldir(kitap.id)}
                            >
                                Kaldır
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default FavoriPaneli;