import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sección de Pedidos */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#000] mb-4">Pedidos</h2>
          <p className="text-gray-600 mb-6">
            Administra tus pedidos de flores, revisa y gestiona los pedidos realizados por los clientes, procesa envíos y actualiza estados.
          </p>
          <Link
            to="/vendedor/pedidos" // Ruta a la que redirige el enlace
            className="bg-[#252525] text-white py-2 px-4 rounded-lg hover:bg-[#1E1E1E] transition duration-300"
          >
            Gestionar pedidos
          </Link>
        </div>

        {/* Sección de Productos */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#000] mb-4">Productos</h2>
          <p className="text-gray-600 mb-6">
            Administra tus productos y gestiona los productos faltantes.
          </p>
          <Link
            to="/admin/products" // Ruta a la que redirige el enlace
            className="bg-[#252525] text-white py-2 px-4 rounded-lg hover:bg-[#1E1E1E] transition duration-300"
          >
            Ver Productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
