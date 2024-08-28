import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Datos de ejemplo para prellenar el formulario (simula una llamada a la API)
const mockUserData = {
  id: 1,
  name: 'Juan Pérez',
  email: 'juan.perez@example.com',
  priority: 'Alta',
  purchased: 'Laptop'
};

const UpdateUserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    name: '',
    email: '',
    priority: '',
    purchased: ''
  });

  useEffect(() => {
    // Aquí puedes hacer una llamada a la API para obtener los datos del usuario por `userId`
    // Por ahora, usamos datos de ejemplo
    setUser(mockUserData);
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer una llamada a la API para actualizar el usuario
    console.log('Usuario actualizado:', user);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-[8%] pb-[80%] px-[4%]">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Actualizar Usuario</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Prioridad</label>
              <input
                type="text"
                id="priority"
                name="priority"
                value={user.priority}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="purchased" className="block text-sm font-medium text-gray-700">Compró</label>
              <input
                type="text"
                id="purchased"
                name="purchased"
                value={user.purchased}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#252525] text-white font-semibold rounded-md shadow-md hover:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Actualizar Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserPage;
