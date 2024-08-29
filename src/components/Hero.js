import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen img">
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold mb-4">Distribuidora de Flores Yesid</h1>
        <p className="text-white text-xl mb-6 text-center">
          Flores frescas y hermosas para cada ocasión especial.
        </p>
        <div className="flex space-x-4">
          <Link to="/about" className=" bg-[#FFDCF9] transition duration-300 ease-in-out text-black px-6 py-3 rounded-full flex items-center hover:bg-[#FDABF0] ">
            <FontAwesomeIcon icon={faLeaf} className="mr-2" />
            Conócenos
          </Link>
          <Link to="/catalogo" className="bg-[#fff] transition duration-300 ease-in-out text-black px-6 py-3 rounded-full flex items-center hover:bg-[#D6D6D6] ">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Compra Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
