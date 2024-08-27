import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Eventos from '../components/Eventos';
import CartModal from '../components/CartModal';

function Main() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <Eventos />
      <Footer toggleCart={toggleCart} />
      <CartModal isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
}

export default Main;
