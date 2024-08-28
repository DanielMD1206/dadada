import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Datos de ejemplo para prellenar el formulario (simula una llamada a la API)
const mockProductData = {
  id: 1,
  name: 'Orquídeas japonesas',
  price: '$40.000',
  description: 'La orquídea tiene muchos significados, dependiendo de la cultura, simbolizando el amor, la belleza, la fertilidad, la elegancia, la pureza o el lujo.',
  imageUrl: 'https://example.com/path-to-image.jpg' // Cambia esta URL a la imagen real
};

const UpdateProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    // Aquí puedes hacer una llamada a la API para obtener los datos del producto por `productId`
    // Por ahora, usamos datos de ejemplo
    setProduct(mockProductData);
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer una llamada a la API para actualizar el producto
    console.log('Producto actualizado:', product);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-[8%] pb-[80%]">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Actualizar Producto</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
              <input
                type="text"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={product.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#252525] text-white font-semibold rounded-md shadow-md hover:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Actualizar Producto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductPage;
