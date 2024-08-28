import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VendedorPedidos = () => {
  const { pedidoId } = useParams();
  const [pedidos, setPedidos] = useState([]);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

  useEffect(() => {
    // Simula una llamada a la API para obtener todos los pedidos
    const fetchPedidos = async () => {
      // Aquí debes hacer una llamada a tu API para obtener todos los pedidos
      const data = [
        { id: 1, imagen: "https://via.placeholder.com/150", estado: "Enviado", descripcion: "Detalles del pedido 1" },
        { id: 2, imagen: "https://via.placeholder.com/150", estado: "Pendiente", descripcion: "Detalles del pedido 2" },
        { id: 3, imagen: "https://via.placeholder.com/150", estado: "Entregado", descripcion: "Detalles del pedido 3" },
        // Añadir más pedidos aquí
      ];
      setPedidos(data);
      // Si hay un ID de pedido específico en los parámetros, selecciona ese pedido
      if (pedidoId) {
        const pedido = data.find(p => p.id === parseInt(pedidoId));
        setPedidoSeleccionado(pedido);
      }
    };
    fetchPedidos();
  }, [pedidoId]);

  const handleEstadoChange = (nuevoEstado) => {
    // Lógica para actualizar el estado del pedido seleccionado
    setPedidoSeleccionado(prevPedido => ({ ...prevPedido, estado: nuevoEstado }));
  };

  if (!pedidos.length) return <div>Cargando...</div>;

  return (
    <div className="p-6 pt-[8%] pb-[80%] bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Pedidos</h1>
      
      {/* Lista de pedidos */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Lista de Pedidos</h2>
        <ul>
          {pedidos.map(pedido => (
            <li
              key={pedido.id}
              onClick={() => setPedidoSeleccionado(pedido)}
              className={`cursor-pointer p-2 mb-2 border ${pedido.id === (pedidoSeleccionado?.id || -1) ? 'bg-gray-200' : ''}`}
            >
              Pedido #{pedido.id} - Estado: {pedido.estado}
            </li>
          ))}
        </ul>
      </div>

      {/* Detalles del pedido seleccionado */}
      {pedidoSeleccionado && (
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">Detalles del Pedido #{pedidoSeleccionado.id}</h1>
          <img src={pedidoSeleccionado.imagen} alt="Imagen del pedido" className="w-32 h-32 object-cover mb-4" />
          <p className="mb-4">{pedidoSeleccionado.descripcion}</p>
          <p className="mb-4">Estado actual: <strong>{pedidoSeleccionado.estado}</strong></p>
          <div className="flex gap-4">
            <button
              onClick={() => handleEstadoChange("Enviado")}
              className="bg-[#252525] hover:bg-[#1E1E1E] text-white px-4 py-2 rounded"
            >
              Marcar como Enviado
            </button>
            <button
              onClick={() => handleEstadoChange("Entregado")}
              className="bg-[#252525] hover:bg-[#1E1E1E] text-white px-4 py-2 rounded"
            >
              Marcar como Entregado
            </button>
            <button
              onClick={() => handleEstadoChange("Llegando")}
              className="bg-[#252525] hover:bg-[#1E1E1E] text-white px-4 py-2 rounded"
            >
              Marcar como Llegando
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendedorPedidos;
