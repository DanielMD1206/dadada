import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Manejar el error de coincidencia de contraseñas
      return;
    }
    if (!acceptedTerms) {
      // Manejar el error si no se aceptaron los términos
      return;
    }
    // Implementar la lógica de registro aquí
  };

  return (
    <div className="register flex items-center justify-center bg-gray-100 py-[10%] relative bg-cover bg-center">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Regístrate</h2>
        <form onSubmit={handleSubmit}>
          {/* Acordeón para el tipo de documento */}
          <div className="mb-4">
            <label htmlFor="document-type" className="block text-sm font-medium text-gray-700">
              Tipo de Documento
            </label>
            <select
              id="document-type"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            >
              <option value="" disabled>Selecciona un tipo de documento</option>
              <option value="cc">Cédula de Ciudadanía</option>
              <option value="nit">NIT</option>
              <option value="pasaporte">Pasaporte</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>

          {/* Campo para el nombre */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>

          {/* Campo para el correo electrónico */}
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

          {/* Campo para la dirección */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>

          {/* Campo para el teléfono */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>

          {/* Campo para la contraseña */}
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

          {/* Campo para confirmar la contraseña */}
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>

          {/* Aceptación de términos y condiciones */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
              required
              className="mr-2 h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              He leído y acepto los <a href="/terminos" className="text-[#FFB4F3] transition duration-300 ease-in-out hover:underline">términos y condiciones</a>
            </label>
          </div>

          {/* Botón de registro */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#FFDCF9] text-black font-semibold rounded-md shadow-sm hover:bg-[#FFB4F3] transition duration-300 ease-in-out"
          >
            Regístrate
          </button>
          <p className="mt-4 text-sm text-gray-600">
            ¿Ya tienes una cuenta? <a href="/login" className="text-[#FFDCF9] transition duration-300 ease-in-out hover:underline">Inicia sesión</a>
          </p>
        </form>
      </div>
    </div>
  );
}
