import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeactivateCustomer = () => {
  const { userId } = useParams(); // Obtiene el ID del cliente de la URL
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para desactivar el cliente con la razón proporcionada
    console.log(`Cliente ${userId} desactivado por la siguiente razón: ${reason}`);
    navigate('/admin/usuarios'); // Redirige a la lista de clientes después de desactivar el cliente
  };

  const handleCancel = () => {
    navigate('/admin/usuarios'); // Redirige a la lista de clientes si se cancela la acción
  };

  return (
    <div className="container mx-auto pt-[8%] pb-[80%] px-[4%]">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#000]">Desactivar Cliente</h1>
        <p className="mb-6 text-gray-700 text-center">
          ¿Estás seguro de que quieres desactivar al cliente con ID: <span className="font-semibold">{userId}</span>?
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="reason">
              Razón para desactivar el cliente
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Escribe la razón aquí..."
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#252525] hover:bg-[#1E1E1E] text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Desactivar Cliente
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeactivateCustomer;
