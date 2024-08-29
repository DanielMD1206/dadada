// src/pages/Catalogo.js
import React, { useState } from 'react';
import Eventos from '../components/Eventos'
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroEventos from '../components/HeroEventos'
import CartModal from '../components/CartModal';

const Evento = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
        <Header />
        <HeroEventos />
        <Eventos />
        <Footer toggleCart={toggleCart} />
        <CartModal isOpen={isCartOpen} toggleCart={toggleCart} />
    </div> 
  );
};

export default Evento;
