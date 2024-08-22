import React from "react";
import banner from "../static/img/pexels-anna-romanova-1406375-17887747.jpg";

export default function Hero() {
  return (
    <div className="HeroBanner relative">
      <img src={banner} alt="banner con flores" />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-left text-left justify-center">
        <h1 className="text-4xl font-bold text-[#fff]">Distribuimos en funza</h1>
      </div>
      <div className="text-center pt-[90px]">
        <h1 className="font-bold text-gray-900 text-3xl relative flex items-center justify-center">
          {/*<span className="w-[200px] h-[1px] bg-gray-900 inline-block mr-4"></span>*/}
          Distribuimos en Funza
          {/*<span className="w-[200px] h-[1px] bg-gray-900 inline-block ml-4"></span>*/}
        </h1>
        <p className="pt-[40px] text-gray-700 text-lg p-12">
          Bienvenidos a Yesid Distribuidora de Flores, su aliado ideal en el
          mundo de la floricultura. Ubicados en Funza, <br /> un municipio
          estratégico cerca de Bogotá, ofrecemos una amplia variedad de flores
          tropicales, con un enfoque especial en heliconias. <br /> Nuestra
          ubicación nos permite acceder a las mejores fincas productoras y a las
          principales rutas de distribución, asegurando frescura y calidad en
          cada entrega. <br /> Estamos comprometidos a brindarle un servicio
          excepcional y a mantener una comunicación cercana con nuestros
          clientes. <br /> En Yesid, nuestra pasión por las flores se refleja en
          cada producto que ofrecemos, y estamos aquí para ayudarle a encontrar
          las flores perfectas para cualquier ocasión. <br />
          ¡Contáctenos y descubra todo lo que podemos ofrecerle!
        </p>
      </div>
    </div>
  );
}
