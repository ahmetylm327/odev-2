import React from 'react';
import FavoriButonu from './FavoriButonu.jsx';

const KitapKarti = ({
    id,
    baslik,
    yazar,
    kategori,
    favorideMi,
    onToggleFavori,
}) => {
    return (
        <div className="kitap-karti">
            <div className="kitap-bilgisi">
                <h3>{baslik}</h3>
                <p>
                    {yazar} - {kategori}
                </p>
            </div>
            <FavoriButonu
                favorideMi={favorideMi}
                onClick={() => onToggleFavori(id)}
            />
        </div>
    );
};

export default KitapKarti;