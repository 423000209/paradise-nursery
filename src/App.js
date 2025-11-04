import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import LandingPage from './pages/LandingPage';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import './ShoppingCart.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;