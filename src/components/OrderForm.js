import React, { useState } from 'react';

function OrderForm() {
  const [order, setOrder] = useState({ size: '', toppings: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar pedido para o backend
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-4">Faça seu pedido</h2>
      <label className="block mb-2">
        Tamanho:
        <select name="size" onChange={handleChange} className="border p-2">
          <option value="">Escolha um tamanho</option>
          <option value="pequeno">Pequeno</option>
          <option value="medio">Médio</option>
          <option value="grande">Grande</option>
        </select>
      </label>
      <label className="block mb-4">
        Coberturas:
        <input
          type="text"
          name="toppings"
          onChange={handleChange}
          className="border p-2"
          placeholder="Digite as coberturas"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Enviar Pedido
      </button>
    </form>
  );
}

export default OrderForm;
