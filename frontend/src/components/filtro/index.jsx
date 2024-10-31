import React, { useState } from 'react';

export default function FiltroPreco({ onChange }) {
  const [precoMax, setPrecoMax] = useState(2000);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setPrecoMax(value)
  };

  return (
    <div className="filtro_preco">
      <div className="precinho">
        <p>Preço</p>    
        <p>R$20 - {precoMax}</p>
      </div>
      <hr />
      <input
        type="range"
        min="20"
        max="2000"
        value={precoMax}
        onChange={handleSliderChange}
        style={{ width: '100%', marginTop: '10px' }}
      />
    </div>
  );
}
