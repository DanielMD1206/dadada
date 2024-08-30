import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css';
import Header from '../components/HeaderL';
 
const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre_producto: '',
    precio_producto: '',
    descripcion_producto: '',
    foto_Producto: null,
    tipo_producto: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/producto/${id}`);
        const product = response.data;
        console.log('Producto cargado:', product);
        setFormData({
          nombre_producto: product.nombre_producto,
          precio_producto: product.precio_producto.toString(),
          descripcion_producto: product.descripcion_producto,
          tipo_producto: product.tipo_producto,
          foto_Producto: product.foto_Producto
        });
        setImagePreview(product.foto_ProductoURL);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === 'foto_Producto') {
      setFormData({ ...formData, [name]: files[0] });
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: name === 'precio_producto' ? value.toString() : value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { nombre_producto, precio_producto, descripcion_producto, tipo_producto, foto_Producto } = formData;

    if (nombre_producto.trim() === '') {
      alert('El campo Nombre es obligatorio.');
      return;
    }

    const priceValue = parseFloat(precio_producto);
    if (precio_producto.trim() === '' || isNaN(priceValue) || priceValue <= 0) {
      alert('El campo Precio debe ser un número válido y mayor a 0.');
      return;
    }

    if (descripcion_producto.trim() === '') {
      alert('El campo Descripción es obligatorio.');
      return;
    }

    const confirmation = window.confirm('¿Estás seguro de que deseas actualizar este producto?');
    if (confirmation) {
      const formDataToSend = new FormData();
      formDataToSend.append('nombre_producto', nombre_producto);
      formDataToSend.append('precio_producto', precio_producto);
      formDataToSend.append('descripcion_producto', descripcion_producto);
      formDataToSend.append('tipo_producto', tipo_producto);

      if (foto_Producto) {
        formDataToSend.append('foto_Producto', foto_Producto);
      }

      try {
        await axios.patch(`http://localhost:4000/api/producto/${id}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Producto actualizado correctamente.');
        navigate('/prod');
      } catch (error) {
        console.error('Error al actualizar el producto:', error);
        alert('Error al actualizar el producto.');
      }
    } else {
      alert('Actualización cancelada.');
    }
  };

  return (
    <div>
      <Header />

      <div className="update-product-container pt-[200px] px-12">
        <div className="image-section">
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Vista previa"
            />
          )}
        </div>
        <div className="form-section">
          <form id="updateForm" onSubmit={handleSubmit}>
            <label htmlFor="nombre_producto">Nombre</label>
            <input
              type="text"
              id="nombre_producto"
              name="nombre_producto"
              value={formData.nombre_producto}
              onChange={handleChange}
              required
              placeholder="Ingrese el nombre del Producto aquí:"
            />

            <label htmlFor="precio_producto">Precio</label>
            <input
              type="number"
              id="precio_producto"
              name="precio_producto"
              value={formData.precio_producto}
              onChange={handleChange}
              required
              placeholder="Ingrese el precio del Producto aquí:"
            />

            <label htmlFor="descripcion_producto">Descripción</label>
            <textarea
              id="descripcion_producto"
              name="descripcion_producto"
              value={formData.descripcion_producto}
              onChange={handleChange}
              required
              placeholder="Ingrese la descripción del Producto aquí:"
            ></textarea>

            <label htmlFor="foto_Producto">Imagen del Producto</label>
            <input
              type="file"
              id="foto_Producto"
              name="foto_Producto"
              accept="image/*"
              onChange={handleChange}
            />

            <label htmlFor="tipo_producto">Tipo</label>
            <input
              type="text"
              id="tipo_producto"
              name="tipo_producto"
              value={formData.tipo_producto}
              onChange={handleChange}
              required
              placeholder="Ingrese el tipo del Producto aquí:"
            />

            <button type="submit">Actualizar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
