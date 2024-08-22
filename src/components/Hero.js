import React from 'react';
import img from '../static/img/pexels-anna-romanova-1406375-17887747.jpg'

function Hero() {
  return (
    <div className="img h-screen w-full bg-cover bg-center flex items-center justify-center">
      <div className="text-center p-[30px]">
        <h1 className="text-4xl text-white font-bold leading-tight">Bienvenido a Yesid, tu distribuidora de flores</h1>
        <p className="text-lg text-white">Descubre la belleza y la frescura de nuestras flores, seleccionadas con cuidado para ti.</p>
        <p className="text-lg text-white">En Yesid, nos enfocamos en proporcionar la mejor calidad y variedad de flores, para que puedas disfrutar de la naturaleza en todo su esplendor.</p>
        <p className="text-lg text-white">Explora nuestra selección de flores frescas, plantas y arreglo de flores, y descubre por qué somos la distribuidora de flores preferida de muchos.</p>
      </div>
    </div>
  );
}

export default Hero;