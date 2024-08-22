// src/pages/Catalogo.js
import React from 'react';
import Eventos from '../components/Eventos'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Evento = () => {
  return (
    <div>
        <Header />
        <Eventos />
        <Footer />
    </div>
  );
};

export default Evento;
