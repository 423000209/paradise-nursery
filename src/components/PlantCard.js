import React from 'react';
import { useCart } from '../context/CartContext';

const PlantCard = ({ plant }) => {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(plant.id);

  const handleAddToCart = () => {
    if (!inCart) {
      addToCart(plant);
    }
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <h3>{plant.name}</h3>
      <p className="price">${plant.price}</p>
      <p className="description">{plant.description}</p>
      <button
        onClick={handleAddToCart}
        disabled={inCart}
        className={`add-to-cart-btn ${inCart ? 'added' : ''}`}
      >
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;