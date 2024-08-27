import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar la lógica de inicio de sesión aquí
  };

  return (
    <div className="login flex items-center justify-center bg-gray-100 relative h-screen bg-cover bg-center">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#FFDCF9] text-black font-semibold rounded-md shadow-sm hover:bg-[#FFB4F3] transition duration-300 ease-in-out"
          >
            Iniciar Sesión
          </button>
          <p className="mt-4 text-sm text-gray-600">
            ¿No tienes una cuenta? <Link to="/registrate" className="text-[#FFDCF9] transition duration-300 ease-in-out hover:underline">Regístrate</Link>
          </p>
        </form> 
      </div>
    </div>
  );
}
