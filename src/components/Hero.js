import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen img">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold mb-4">Distribuidora de Flores Yesid</h1>
        <p className="text-white text-xl mb-6 text-center">
          Flores frescas y hermosas para cada ocasión especial.
        </p>
        <div className="flex space-x-4">
          <Link to="/about" className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center hover:bg-green-600">
            <FontAwesomeIcon icon={faLeaf} className="mr-2" />
            Conócenos
          </Link>
          <Link to="/catalogo" className="bg-white text-green-500 px-6 py-3 rounded-full flex items-center hover:bg-gray-200">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Compra Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
