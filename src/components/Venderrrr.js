import React from 'react';

const venderHeroSection = () => {
  return (
    <div className='relative bg-cover bg-center h-screen img'>
      <div className="absolute text-white inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenido al vendedor de Yesid
        </h1>
        <p className="text-lg md:text-xl mb-6 text-center max-w-2xl">
          Administra eficientemente tus flores y eventos con nuestras herramientas intuitivas.
          Gestiona inventarios, pedidos, y mucho más, todo desde un solo lugar.
        </p>
        <button className="bg-[#252525] text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-[#1E1E1E] transition duration-300">
          Gestiones
        </button>
      </div>
    </div>
  );
};

export default venderHeroSection;
