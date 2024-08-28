import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareXmark, faTrash } from '@fortawesome/free-solid-svg-icons';

// Componente DomiciliarioCard que representa una tarjeta de domiciliario
const DomiciliarioCard = ({ domiciliarioId, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este domiciliario?')) {
      console.log(`Domiciliario con ID ${domiciliarioId} eliminado`);
      if (onDelete) onDelete(domiciliarioId);
      navigate('/admin/domiciliarios');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Domiciliario {domiciliarioId}</h3>
        <p className="text-gray-600 mb-4">Información del domiciliario</p>
        <div className="flex justify-between items-center">
          <Link to={`/admin/domiciliarios/update/${domiciliarioId}`}>
            <FontAwesomeIcon 
              icon={faPenToSquare} 
              className="cursor-pointer transition duration-300" 
            />
          </Link>
          <Link to={`/admin/domiciliarios/deactivate/${domiciliarioId}`}>
            <FontAwesomeIcon 
              icon={faSquareXmark} 
              className="cursor-pointer transition duration-300" 
            />
          </Link>
          <FontAwesomeIcon 
            icon={faTrash} 
            className="cursor-pointer transition duration-300" 
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

// Componente DomiciliariosView que muestra una lista de tarjetas de domiciliarios
const DomiciliariosView = () => {
  const [domiciliarios, setDomiciliarios] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);

  const handleDeleteDomiciliario = (id) => {
    setDomiciliarios(domiciliarios.filter(domiciliario => domiciliario.id !== id));
  };

  return (
    <div className="container mx-auto pt-[8%] pb-[80%]">
      <h1 className="text-5xl font-extrabold text-center mb-8">Gestión de Domiciliarios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {domiciliarios.map(domiciliario => (
          <DomiciliarioCard 
            key={domiciliario.id} 
            domiciliarioId={domiciliario.id} 
            onDelete={handleDeleteDomiciliario} 
          />
        ))}
      </div>
    </div>
  );
};

export default DomiciliariosView;
