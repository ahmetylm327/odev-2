import React from 'react';

const KategoriFiltre = ({ seciliKategori, kategoriler, onKategoriDegistir }) => {
    return (
        <select
            className="kategori-filtre"
            value={seciliKategori}
            onChange={onKategoriDegistir}
        >
            {kategoriler.map((kat) => (
                <option key={kat} value={kat}>
                    {kat}
                </option>
            ))}
        </select>
    );
};

export default KategoriFiltre;