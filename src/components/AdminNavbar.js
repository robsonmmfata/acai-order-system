// src/components/AdminNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-acaiPurple text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/admin/dashboard" className="text-2xl font-bold">
          Admin Dashboard
        </Link>
        <div className="space-x-4">
          <Link to="/admin/orders" className="hover:underline">Pedidos</Link>
          <Link to="/admin/products" className="hover:underline">Produtos</Link>
          <Link to="/admin/profile" className="hover:underline">Perfil</Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
