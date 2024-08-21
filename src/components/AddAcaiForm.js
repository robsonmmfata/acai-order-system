// src/components/AddAcaiForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddAcaiForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSmall, setPriceSmall] = useState('');
  const [priceMedium, setPriceMedium] = useState('');
  const [priceLarge, setPriceLarge] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('priceSmall', priceSmall);
    formData.append('priceMedium', priceMedium);
    formData.append('priceLarge', priceLarge);
    formData.append('image', image);

    try {
      await axios.post('/api/acais', formData);
      alert('Açaí adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar açaí', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do Açaí" className="border p-2 w-full" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" className="border p-2 w-full" required />
      <input type="number" value={priceSmall} onChange={(e) => setPriceSmall(e.target.value)} placeholder="Preço Pequeno" className="border p-2 w-full" required />
      <input type="number" value={priceMedium} onChange={(e) => setPriceMedium(e.target.value)} placeholder="Preço Médio" className="border p-2 w-full" required />
      <input type="number" value={priceLarge} onChange={(e) => setPriceLarge(e.target.value)} placeholder="Preço Grande" className="border p-2 w-full" required />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} className="border p-2 w-full" required />
      <button type="submit" className="bg-acaiPurple text-white p-2 rounded">Adicionar Açaí</button>
    </form>
  );
};

export default AddAcaiForm;
