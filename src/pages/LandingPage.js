import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          At Paradise Nursery, we believe that bringing nature into your home can transform your living space.
          Our curated collection of beautiful house plants will add life, color, and freshness to any room.
          Whether you're a seasoned plant parent or just starting your green journey, we have the perfect plants for you.
        </p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;