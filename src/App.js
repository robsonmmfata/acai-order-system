// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientLayout from './pages/ClientLayout';
import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';
import ProfilePage from './components/ProfilePage';

// Verifique se os arquivos AdminDashboard, AdminOrders e AdminProducts existem no diretório src/components
import AdminDashboard from './components/AdminDashboard'; // Verifique o nome e caminho
import AdminOrders from './components/AdminOrders'; // Verifique o nome e caminho
import AdminProducts from './components/AdminProducts'; // Verifique o nome e caminho

// Função principal do aplicativo
function App() {
  return (
    // Utilize o BrowserRouter para gerenciar as rotas
    <Router>
      
      <Routes>
        
        <Route path="/" element={<ClientLayout />}>
          
          <Route index element={<HomePage />} />
        
          <Route path="order" element={<OrderPage />} />
        
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        
        <Route path="/admin" element={<AdminDashboard />}>
          
          <Route path="orders" element={<AdminOrders />} />
          
          <Route path="products" element={<AdminProducts />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

// Adicione uma página de "Não encontrado" para lidar com URLs inválidas
function NotFoundPage() {
  return <h1>Página não encontrada</h1>;
}

// Exporte a função App como o componente principal
export default App;