import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css';
import Header from '../components/HeaderVP';

const ChangeProductState = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/producto/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleToggleState = async () => {
    if (!product) return;

    const newState = product.estado_producto === '1' ? '0' : '1'; // Alternar entre activo e inactivo

    try {
      await axios.patch(`http://localhost:4000/api/producto/${id}`, { estado_producto: newState });
      alert('Estado del producto actualizado correctamente.');
      navigate('/prod');
    } catch (error) {
      console.error('Error al cambiar el estado del producto:', error);
      alert('Error al cambiar el estado del producto.');
    }
  };

  return (
    <div>
      <Header />
      <div className="change-product-state-container pt-[200px] px-12">
        <h2>{product ? product.nombre_producto : 'Cargando...'}</h2>
        <p>Estado actual: {product ? (product.estado_producto === '1' ? 'Activo' : 'Inactivo') : 'Cargando...'}</p>
        <button className='bg-black' onClick={handleToggleState}>Cambiar Estado</button>
      </div>
    </div>
  );
};

export default ChangeProductState;