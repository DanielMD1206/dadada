import React, { useState } from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartModal from '../components/CartModal';

function AboutUs() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header />
      <About />
      <Footer toggleCart={toggleCart} />
      <CartModal isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  )
}

export default AboutUs
