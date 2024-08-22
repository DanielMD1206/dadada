import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Product from '../components/Product'
import Footer from '../components/Footer'
import Eventos from '../components/Eventos'
import Contact from '../components/Contact'

function Main() {
  return (

    <div>
        <Header />
        <Hero />
        <Product/>
        <Eventos />
        <Contact />
        <Footer />
    </div>
  )
}

export default Main