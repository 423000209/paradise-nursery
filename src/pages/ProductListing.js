import React from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { plants } from '../data/plants';

const ProductListing = () => {

  const groupedPlants = plants.reduce((acc, plant) => {
    plant.categories.forEach(category => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(plant);
    });
    return acc;
  }, {});

  return (
    <div className="product-listing">
      <Header />
      <div className="container">
        {Object.entries(groupedPlants).map(([category, categoryPlants]) => (
          <div key={category} className="category-section">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Plants</h2>
            <div className="plants-grid">
              {categoryPlants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;