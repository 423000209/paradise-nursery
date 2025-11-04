import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, getTotalItems, getTotalPrice } = useCart();

  return (
    <div className="shopping-cart">
      <Header />
      <div className="container">
        <h2>Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/products" className="continue">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="cart-summary">
              <p>Total Items: {getTotalItems()}</p>
              <p>Total Cost: ${getTotalPrice().toFixed(2)}</p>
              <div className="cart-actions">
                <Link to="/products" className="get-started-btn">Continue Shopping</Link>
                <button className="checkout-btn">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
