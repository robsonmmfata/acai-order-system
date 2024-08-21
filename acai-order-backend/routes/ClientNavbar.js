// src/components/ClientNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const ClientNavbar = () => {
  return (
    <nav className="bg-acaiPurple text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Açaí Delivery
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/order" className="hover:underline">Fazer Pedido</Link>
          <Link to="/profile" className="hover:underline">Perfil</Link>
        </div>
      </div>
    </nav>
  );
};

export default ClientNavbar;
