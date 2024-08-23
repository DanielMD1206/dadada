// src/pages/Catalogo.js
import React from 'react';
import Eventos from '../components/Eventos'
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroEventos from '../components/HeroEventos'

const Evento = () => {
  return (
    <div>
        <Header />
        <HeroEventos />
        <Eventos />
        <Footer />
    </div> 
  );
};

export default Evento;
