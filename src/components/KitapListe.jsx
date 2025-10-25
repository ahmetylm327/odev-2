import React from 'react';
import KitapKarti from './KitapKarti.jsx';

const KitapListe = ({ kitaplar, favoriler, onToggleFavori }) => {
    return (
        <div className="kitap-liste">
            {kitaplar.map((kitap) => (
                <KitapKarti
                    key={kitap.id}
                    {...kitap}
                    favorideMi={favoriler.includes(kitap.id)}
                    onToggleFavori={onToggleFavori}
                />
            ))}
        </div>
    );
};

export default KitapListe;