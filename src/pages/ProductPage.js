import React from 'react';

const products = [
  {
    id: 1,
    name: 'Produto 1',
    description: 'Descrição do Produto 1',
    price: 'R$10,00',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Produto 2',
    description: 'Descrição do Produto 2',
    price: 'R$15,00',
    imageUrl: 'https://via.placeholder.com/150'
  },
  // Adicione mais produtos aqui
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>Produtos</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>{product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
