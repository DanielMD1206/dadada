import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';
import Header from '../components/HeaderL';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const AddProduct = () => {
  const [product, setProduct] = useState({
    nombre_producto: '',
    precio_producto: '',
    descripcion_producto: '',
    foto_Producto: null,
    tipo_producto: '',
    evento_id: '',
    estado_producto: '1',
  });

  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate(); // Usa useNavigate para redirección

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === 'foto_Producto') {
      setProduct({ ...product, [name]: files[0] });
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nombre_producto', product.nombre_producto);
    formData.append('precio_producto', product.precio_producto);
    formData.append('descripcion_producto', product.descripcion_producto);
    formData.append('foto_Producto', product.foto_Producto);
    formData.append('tipo_producto', product.tipo_producto);
    formData.append('evento_id', product.evento_id);
    formData.append('estado_producto', product.estado_producto);

    try {
      await axios.post('http://localhost:4000/api/producto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Producto agregado correctamente');
      setProduct({
        nombre_producto: '',
        precio_producto: '',
        descripcion_producto: '',
        foto_Producto: null,
        tipo_producto: '',
        evento_id: '',
        estado_producto: '1',
      });
      setImagePreview(null);

      navigate('/prod'); 
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      alert('Error al agregar el producto');
    }
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
            <label htmlFor="nombre_producto">Nombre del Producto</label>
            <input
              type="text"
              id="nombre_producto"
              name="nombre_producto"
              value={product.nombre_producto}
              onChange={handleChange}
              required
              placeholder="Ingrese el nombre del Producto aquí:"
            />

            <label htmlFor="precio_producto">Precio</label>
            <input
              type="number"
              id="precio_producto"
              name="precio_producto"
              value={product.precio_producto}
              onChange={handleChange}
              required
              placeholder="Ingrese el precio del Producto aquí:"
            />

            <label htmlFor="descripcion_producto">Descripción</label>
            <textarea
              id="descripcion_producto"
              name="descripcion_producto"
              value={product.descripcion_producto}
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
            {imagePreview && (
              <div className="image-preview">
                <img
                  src={imagePreview}
                  alt="Vista previa"
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              </div>
            )}

            <label htmlFor="tipo_producto">Tipo</label>
            <input
              type="text"
              id="tipo_producto"
              name="tipo_producto"
              value={product.tipo_producto}
              onChange={handleChange}
              required
              placeholder="Ingrese el tipo del Producto aquí:"
            />

            <label htmlFor="evento_id">ID del Evento</label>
            <input
              type="number"
              id="evento_id"
              name="evento_id"
              value={product.evento_id}
              onChange={handleChange}
              placeholder="Ingrese el ID del Evento (opcional):"
            />

            <label htmlFor="estado_producto">Estado</label>
            <select
              id="estado_producto"
              name="estado_producto"
              value={product.estado_producto}
              onChange={handleChange}
            >
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>

            <button type="submit" style={{ width: '70px' }}>Añadir</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
