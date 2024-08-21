import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';

function Admin() {
  return (
    <div>
      <Header />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default Admin;
