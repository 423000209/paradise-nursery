import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === plant.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (plantId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== plantId));
  };

  const updateQuantity = (plantId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(plantId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === plantId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const isInCart = (plantId) => {
    return cart.some(item => item.id === plantId);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getTotalPrice,
      isInCart
    }}>
      {children}
    </CartContext.Provider>
  );
};