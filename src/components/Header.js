import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png'; 

const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src={logo} alt="Paradise Nursery Logo" className="logo-img" />
          <div className="logo-text">
            <h1>Paradise Nursery</h1>
            <p className="tagline">Bringing Nature Home</p>
          </div>
        </Link>

        <Link to="/cart" className="cart-icon">
          🛒 <span className="cart-count">{getTotalItems()}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
