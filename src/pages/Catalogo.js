// src/pages/Catalogo.js
import React, { useState } from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroProduct from '../components/HeroProduct'
import CartModal from '../components/CartModal';


const Catalogo = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header />
      <HeroProduct />
      <Product />
      <Footer toggleCart={toggleCart} />
      <CartModal isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
};

export default Catalogo;
