import React from 'react';

const AdminHeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-400 via-green-500 to-green-700 h-screen flex flex-col items-center justify-center">
      {/* Degradado overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col"></div>

      {/* Contenido del Hero */}
      <div className="relative text-center text-white z-10 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Administrador de Yesid</h1>
        <p className="text-lg md:text-2xl font-light mb-6">
          Gestiona eficientemente todos los aspectos de la distribuidora de flores.
        </p>
        <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-100 transition duration-300">
          Empezar ahora
        </button>
      </div>

      {/* Sección de Información */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6">
        {/* Estadísticas */}
        <div className="bg-white bg-opacity-80 rounded-lg p-6 flex flex-col items-center text-center shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Estadísticas</h2>
          <p className="text-gray-700">
            Visualiza reportes y estadísticas clave sobre el rendimiento de la distribuidora.
          </p>
        </div>

        {/* Gestión de Productos */}
        <div className="bg-white bg-opacity-80 rounded-lg p-6 flex flex-col items-center text-center shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Gestión de Productos</h2>
          <p className="text-gray-700">
            Administra tu inventario de flores, incluyendo precios y descripciones.
          </p>
        </div>

        {/* Gestión de Usuarios */}
        <div className="bg-white bg-opacity-80 rounded-lg p-6 flex flex-col items-center text-center shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Gestión de Usuarios</h2>
          <p className="text-gray-700">
            Gestiona los permisos y roles de los empleados en la distribuidora.
          </p>
        </div>

        {/* Configuraciones */}
        <div className="bg-white bg-opacity-80 rounded-lg p-6 flex flex-col items-center text-center shadow-lg md:col-span-3">
          <h2 className="text-2xl font-semibold mb-2">Configuraciones</h2>
          <p className="text-gray-700">
            Ajusta la configuración general del sistema para adaptarlo a tus necesidades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminHeroSection;
