import React, { useState } from 'react';
import Modal from 'react-modal';

// Dados dos produtos
const products = [
  {
    id: 1,
    name: 'Açaí Médio',
    description: 'Açaí em copo médio com opções de cobertura.',
    price: 'R$ 18,00',
    image: '/images/acai-medium.png'
  },
  {
    id: 2,
    name: 'Açaí Grande',
    description: 'Açaí em copo grande com várias coberturas.',
    price: 'R$ 20,00',
    image: '/images/acai-medium.png'
  },
  {
    id: 3,
    name: 'Açaí Pequeno com Nutella',
    description: 'Açaí pequeno com Nutella e frutas.',
    price: 'R$ 14,00',
    image: '/images/acai-medium.png'
  },
  {
    id: 4,
    name: 'Refrigerantes Lata 350ml',
    description: 'Opções de refrigerante em lata.',
    price: 'R$ 5,00',
    image: '/images/refrigentelata.png'
  },
  {
    id: 5,
    name: 'Refrigerantes 600ml',
    description: 'Opções de refrigerante 600ml.',
    price: 'R$ 7,00',
    image: '/images/refrigerantes-600ml.png'
  },
  {
    id: 6,
    name: 'Refrigerantes 1 litro',
    description: 'Opções de refrigerante 1 litro.',
    price: 'R$ 10,00',
    image: '/images/refrigerantes-1l.png'
  },
];

// Opções de refrigerantes
const sodaOptions = [
  'Coca-Cola', 'Fanta', 'Sprite', 'Paulistinha', 'Tubaína', 'Pepsi'
];

// Opções de acréscimos com preços aleatórios
const toppingsOptions = [
  { name: 'Frutas frescas', price: 'R$ 3,00', options: ['Banana', 'Morango', 'Kiwi', 'Framboesa', 'Abacaxi'] },
  { name: 'Granola sem açúcar', price: 'R$ 2,00' },
  { name: 'Mel ou melado de cana', price: 'R$ 2,50' },
  { name: 'Leite', price: 'R$ 1,50' },
  { name: 'Mousse', price: 'R$ 4,00', options: ['Maracujá', 'Morango', 'Limão'] },
  { name: 'Creme', price: 'R$ 3,50', options: ['Creme de Cupuaçu', 'Creme de Leite em Pó'] },
  { name: 'Outros itens', price: 'R$ 2,50', options: ['Leite Condensado', 'Paçoca', 'Confeitos de Chocolate', 'Castanhas', 'Gotas de Chocolate', 'Granulados'] },
];

function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addToppingsModalIsOpen, setAddToppingsModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSoda, setSelectedSoda] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
    setSelectedSoda([]);
    setSelectedToppings([]);
  };

  const openAddToppingsModal = () => {
    setAddToppingsModalIsOpen(true);
  };

  const closeAddToppingsModal = () => {
    setAddToppingsModalIsOpen(false);
  };

  const handleSodaSelect = (soda) => {
    setSelectedSoda(prevState =>
      prevState.includes(soda)
        ? prevState.filter(item => item !== soda)
        : [...prevState, soda]
    );
  };

  const handleToppingSelect = (topping) => {
    setSelectedToppings(prevState =>
      prevState.includes(topping)
        ? prevState.filter(item => item !== topping)
        : [...prevState, topping]
    );
  };

  const handleProceed = () => {
    openAddToppingsModal();
    closeModal();
  };

  const handleBack = () => {
    closeAddToppingsModal();
    openModal(selectedProduct);
  };

  const handleConfirm = () => {
    const totalPrice = calculateTotalPrice();
    console.log("Produto adicionado ao carrinho:", {
      product: selectedProduct,
      sodas: selectedSoda,
      toppings: selectedToppings,
      totalPrice
    });
    closeAddToppingsModal();
  };

  const calculateTotalPrice = () => {
    const productPrice = parseFloat(selectedProduct.price.replace('R$ ', '').replace(',', '.'));
    const toppingPrice = selectedToppings.reduce((total, topping) => {
      const toppingOption = toppingsOptions.find(option => option.name === topping);
      return total + (toppingOption ? parseFloat(toppingOption.price.replace('R$ ', '').replace(',', '.')) : 0);
    }, 0);
    return productPrice + toppingPrice;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Produtos de Açaí e Bebidas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg flex flex-col items-center bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover mb-4 rounded"
              style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
            />
            <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>
            <p className="text-gray-600 mb-2 text-center">{product.description}</p>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
              onClick={() => openModal(product)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>

      {/* Modal de seleção de refrigerantes */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Opções de Produto"
        className="max-w-lg w-full mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        {selectedProduct && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">{selectedProduct.name}</h2>
            <p className="text-gray-600 mb-4 text-center">{selectedProduct.description}</p>
            <p className="text-xl font-bold mb-4 text-center">{selectedProduct.price}</p>

            {selectedProduct.name.includes('Refrigerante') && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-center">Escolha o tipo de refrigerante:</h3>
                <ul className="list-disc pl-6">
                  {sodaOptions.map((soda, index) => (
                    <li key={index} className="mb-2 flex items-center">
                      <input
                        type="checkbox"
                        id={`soda-${index}`}
                        checked={selectedSoda.includes(soda)}
                        onChange={() => handleSodaSelect(soda)}
                        className="mr-2"
                      />
                      <label htmlFor={`soda-${index}`}>{soda}</label>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex justify-end mt-6">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition mr-4"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                onClick={handleProceed}
              >
                Prosseguir
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal de seleção de acréscimos */}
      <Modal
        isOpen={addToppingsModalIsOpen}
        onRequestClose={closeAddToppingsModal}
        contentLabel="Selecione seus Acréscimos"
        className="w-[600px] h-[500px] mx-auto bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Escolha seus acréscimos:</h2>
        {toppingsOptions.map((topping, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{topping.name} - {topping.price}</h3>
            <ul className="space-y-2">
              {topping.options ? (
                topping.options.map((option, i) => (
                  <li key={i} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`topping-${index}-${i}`}
                      checked={selectedToppings.includes(option)}
                      onChange={() => handleToppingSelect(option)}
                      className="mr-2"
                    />
                    <label htmlFor={`topping-${index}-${i}`}>{option}</label>
                  </li>
                ))
              ) : (
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    id={`topping-${index}`}
                    checked={selectedToppings.includes(topping.name)}
                    onChange={() => handleToppingSelect(topping.name)}
                    className="mr-2"
                  />
                  <label htmlFor={`topping-${index}`}>{topping.name}</label>
                </li>
              )}
            </ul>
          </div>
        ))}

        <div className="flex justify-between mt-6">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
            onClick={handleBack}
          >
            Voltar
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default HomePage;
