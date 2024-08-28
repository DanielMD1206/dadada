import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Datos de ejemplo para prellenar el formulario (simula una llamada a la API)
const mockDomiciliarioData = {
  id: 1,
  nombre: '',
  telefono: '',
  direccion: ''
};

const UpdateDomiciliario = () => {
  const { domiciliarioId } = useParams();
  const navigate = useNavigate();
  const [domiciliarioData, setDomiciliarioData] = useState({
    nombre: '',
    telefono: '',
    direccion: ''
  });

  useEffect(() => {
    // Aquí puedes hacer una llamada a la API para obtener los datos del domiciliario por `domiciliarioId`
    // Por ahora, usamos datos de ejemplo
    setDomiciliarioData(mockDomiciliarioData);
  }, [domiciliarioId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDomiciliarioData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer una llamada a la API para actualizar el domiciliario
    console.log('Domiciliario actualizado:', domiciliarioData);
    navigate('/admin/domiciliarios');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-[8%] pb-[80%]">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Actualizar Domiciliario</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={domiciliarioData.nombre}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={domiciliarioData.telefono}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={domiciliarioData.direccion}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#252525] text-white font-semibold rounded-md shadow-md hover:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Actualizar Domiciliario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateDomiciliario;
