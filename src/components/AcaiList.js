// src/components/AcaiList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AcaiList = () => {
  const [acais, setAcais] = useState([]);

  useEffect(() => {
    axios.get('/api/acais')
      .then(response => setAcais(response.data))
      .catch(error => console.error('Erro ao carregar açaís', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {acais.map(acai => (
        <div key={acai._id} className="border p-4 rounded">
          <img src={acai.imageUrl} alt={acai.name} className="w-full h-48 object-cover rounded mb-2" />
          <h2 className="text-xl font-bold">{acai.name}</h2>
          <p>{acai.description}</p>
          <div className="mt-2">
            <span className="block">Pequeno: R${acai.priceSmall}</span>
            <span className="block">Médio: R${acai.priceMedium}</span>
            <span className="block">Grande: R${acai.priceLarge}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcaiList;
