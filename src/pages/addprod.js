/* eslint-disable no-undef */
import React, { useState } from 'react';
import '../index.css';
import Header from '../components/HeaderL';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: ''
  }); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Producto agregado:', product);
    setProduct({ name: '', price: '', description: '' });
  };

  return (
    <div>
      <Header />

      <div className="b1">
        <div className="b2">
          <img src="../img/tulipan" alt="Imagen de Flores" />
        </div>
        <div className="b3">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              placeholder="Ingrese el nombre del Producto aquí:"
            />

            <label htmlFor="price">Precio</label>
            <input
              type="text"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              placeholder="Ingrese el precio del Producto aquí:"
            />

            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              placeholder="Ingrese la descripción del Producto aquí:"
            ></textarea>

            <button type="submit" style={{ width: '70px' }}>Añadir</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;