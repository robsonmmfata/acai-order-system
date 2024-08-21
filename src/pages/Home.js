import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderForm from '../components/OrderForm';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
