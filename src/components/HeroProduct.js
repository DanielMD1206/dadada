import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CatalogHeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center img">
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold mb-4">Explora Nuestro Catálogo</h1>
        <p className="text-white text-lg mb-6 text-center max-w-2xl">
          Descubre una selección exclusiva de nuestras flores más frescas y hermosas, perfectas para cada ocasión.
        </p>
        <a href="#productos" className="text-white">
          <FontAwesomeIcon icon={faChevronDown} className="text-3xl animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default CatalogHeroSection;
