import React from 'react';

const AramaCubugu = ({ aramaMetni, onArama }) => {
    return (
        <input
            type="text"
            className="arama-cubugu"
            placeholder="Başlık veya yazar ara..."
            value={aramaMetni}
            onChange={onArama}
        />
    );
};

export default AramaCubugu;