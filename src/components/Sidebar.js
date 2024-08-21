// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Certifique-se de que o caminho está correto

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="/images/logoacai.png" alt="Logo" className="logo" /> {/* Referência direta */}
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
