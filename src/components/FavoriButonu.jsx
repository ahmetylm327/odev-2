import React from 'react';

const FavoriButonu = ({ favorideMi, onClick }) => {
    return (
        <button className="favori-butonu" onClick={onClick}>
            {favorideMi ? '★ Favoride' : '☆ Favori Ekle'}
        </button>
    );
};

export default FavoriButonu;