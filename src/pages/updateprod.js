import React, { useState } from 'react';
import '../index.css';
import Header from '../components/HeaderL';

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, price, description } = formData;

    if (name.trim() === '') {
      alert('El campo Nombre es obligatorio.');
      return;
    }

    const priceValue = parseFloat(price);
    if (price.trim() === '' || isNaN(priceValue) || priceValue <= 0) {
      alert('El campo Precio debe ser un número válido y mayor a 0.');
      return;
    }

    if (description.trim() === '') {
      alert('El campo Descripción es obligatorio.');
      return;
    }

    const confirmation = window.confirm('¿Estás seguro de que deseas actualizar este producto?');
    if (confirmation) {
      alert('Producto actualizado correctamente.');
    } else {
      alert('Actualización cancelada.');
    }
  };

  return (
    <div>
      <Header/>

      <div className="b1">
        <div className="b2">
          <img src="../img/tulipan" alt="Imagen de Flores" />
        </div>
        <div className="b3">
          <form id="updateForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ingrese el nombre del Producto aquí:"
            />

            <label htmlFor="price">Precio</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Ingrese el precio del Producto aquí:"
            />

            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Ingrese la descripción del Producto aquí:"
            ></textarea>

            <button type="submit" className='text-white bg-black' style={{ width: '89px' }}>Actualizar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;