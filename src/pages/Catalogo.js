// src/pages/Catalogo.js
import React from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroProduct from '../components/HeroProduct'

const Catalogo = () => {
  return (
    <div>
        <Header />
        <HeroProduct />
        <Product />
        <Footer /> 
    </div>
  );
};

export default Catalogo;
