import React, { useState } from 'react'
import DetalleProducto from '../components/ProductDetalil'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartModal from '../components/CartModal';

function Detalle() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header />
      <DetalleProducto />
      <Footer toggleCart={toggleCart} />
      <CartModal isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  )
}

export default Detalle
