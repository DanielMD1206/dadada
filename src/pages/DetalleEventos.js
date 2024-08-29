import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Product from '../components/FloresE'
import CartModal from '../components/CartModal';

function DetalleEventos() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header />
      <Product />
      <Footer toggleCart={toggleCart} />
      <CartModal isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  )
}

export default DetalleEventos;
