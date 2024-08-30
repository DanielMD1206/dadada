import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import Header from '../components/HeaderL';

const Orders = () => {
  const [pedidos, setPedidos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/pedido');
        setPedidos(response.data);
      } catch (error) {
        setError('Error al obtener los pedidos');
        console.error('Error al obtener los pedidos:', error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div>
      <Header />
      <div className="orders-container">
        <h1>Lista de Pedidos</h1>
        {error && <p className="error">{error}</p>}
        <div className="pedidos-list">
          {pedidos.length > 0 ? (
            pedidos.map(pedido => (
              <div key={pedido.id_pedido} className="pedido-item">
                <h3>Pedido ID: {pedido.id_pedido}</h3>
                <p><strong>Fecha:</strong> {new Date(pedido.fecha_pedido).toLocaleDateString()}</p>
                <p><strong>Estado:</strong> {pedido.estado_pedido}</p>
                <p><strong>Total Pagado:</strong> ${pedido.total_pagado}</p>
                {pedido.foto_Pedido && (
                  <img
                    src={`http://localhost:4000/${pedido.foto_Pedido}`}
                    alt={`Foto del pedido ${pedido.id_pedido}`}
                    className="pedido-image"
                  />
                )}
              </div>
            ))
          ) : (
            <p>No hay pedidos disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
