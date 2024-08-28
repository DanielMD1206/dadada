import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import img from '../static/img/pexels-iriser-1408221 (2).jpg';

// Componente ProductCard que representa una tarjeta de producto
const ProductCard = ({ productId, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      // Aquí puedes manejar la lógica de eliminación (ej. llamada a la API)
      console.log(`Producto con ID ${productId} eliminado`);
      // Llamar a la función onDelete para actualizar el estado en AdminProductsView
      if (onDelete) onDelete(productId);
      // Redirigir después de eliminar
      navigate('/admin/products');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <img 
        src={img}
        alt="Orquídeas japonesas"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Orquídeas japonesas</h3>
        <p className="text-gray-600">Precio recomendado</p>
        <p className="text-gray-900 font-semibold mb-4">$40.000</p>
        <p className="text-gray-700 mb-4">
          La orquídea tiene muchos significados, dependiendo de la cultura, simbolizando el amor, la belleza, la fertilidad, la elegancia, la pureza o el lujo.
        </p>
        <div className="flex justify-between items-center">
          <Link to={`/admin/products/update/${productId}`}>
            <FontAwesomeIcon 
              icon={faPenToSquare} 
              className="text-gray-500 hover:text-gray-800 cursor-pointer" 
            />
          </Link>
          <Link to={`/admin/products/deactivate/${productId}`}>
            <FontAwesomeIcon 
              icon={faSquareXmark} 
              className="text-gray-500 hover:text-gray-800 cursor-pointer" 
            />
          </Link>
          <FontAwesomeIcon 
            icon={faTrash} 
            className="text-gray-500 hover:text-gray-800 cursor-pointer" 
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

// Componente AdminProductsView que muestra una lista de tarjetas de productos
const AdminProductsView = () => {
  const [products, setProducts] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="container mx-auto pt-[8%] pb-[80%]">
      <h1 className="text-4xl font-bold mb-4">Productos del Administrador</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            productId={product.id} 
            onDelete={handleDeleteProduct} 
          />
        ))}
      </div>
    </div>
  );
};

export default AdminProductsView;
