import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sección de Inventario */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#000] mb-4">Inventario</h2>
          <p className="text-gray-600 mb-6">
            Administra tu inventario de flores, verifica stock y agrega nuevos productos.
          </p>
          <button className="bg-[#252525] text-white py-2 px-4 rounded-lg hover:bg-[#1E1E1E] transition duration-300">
            Gestionar Inventario
          </button>
        </div>

        {/* Sección de Pedidos */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#000] mb-4">Pedidos</h2>
          <p className="text-gray-600 mb-6">
            Revisa y gestiona los pedidos realizados por los clientes, procesa envíos y actualiza estados.
          </p>
          <button className="bg-[#252525] text-white py-2 px-4 rounded-lg hover:bg-[#1E1E1E] transition duration-300">
            Ver Pedidos
          </button>
        </div>

        {/* Sección de Eventos */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#000] mb-4">Eventos</h2>
          <p className="text-gray-600 mb-6">
            Organiza eventos florales, programa fechas y gestiona participantes y recursos.
          </p>
          <button className="bg-[#252525] text-white py-2 px-4 rounded-lg hover:bg-[#1E1E1E] transition duration-300">
            Administrar Eventos
          </button>
        </div>

        {/* Sección de Proveedores */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#000] mb-4">Proveedores</h2>
          <p className="text-[#000] mb-6">
            Mantén el control sobre tus proveedores, gestiona contratos y revisa entregas de productos.
          </p>
          <button className="bg-[#252525] text-white py-2 px-4 rounded-lg hover:bg-[#1E1E1E] transition duration-300">
            Gestionar Proveedores
          </button>
        </div>

        {/* Sección de Usuarios */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold text-[#000] mb-4">Usuarios</h2>
          <p className="text-[#000] mb-6">
            Gestiona cuentas de usuarios, define roles y controla permisos de acceso.
          </p>
          <button className="bg-[#252525] text-white py-2 px-4 rounded-lg hover:bg-[#1E1E1E] transition duration-300">
            Administrar Usuarios
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
