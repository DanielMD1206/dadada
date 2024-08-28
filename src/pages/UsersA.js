import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareXmark, faTrash } from '@fortawesome/free-solid-svg-icons';

// Datos de ejemplo
const dummyCustomers = [
  { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', priority: 'Alta', purchased: 'Laptop' },
  { id: 2, name: 'Ana García', email: 'ana.garcia@example.com', priority: 'Media', purchased: 'Smartphone' },
  { id: 3, name: 'Juan Pérez', email: 'juan.perez@example.com', priority: 'Alta', purchased: 'Laptop' },
  { id: 4, name: 'Ana García', email: 'ana.garcia@example.com', priority: 'Media', purchased: 'Smartphone' },
  { id: 5, name: 'Juan Pérez', email: 'juan.perez@example.com', priority: 'Alta', purchased: 'Laptop' },
  { id: 6, name: 'Ana García', email: 'ana.garcia@example.com', priority: 'Media', purchased: 'Smartphone' },
  { id: 7, name: 'Juan Pérez', email: 'juan.perez@example.com', priority: 'Alta', purchased: 'Laptop' },
  { id: 8, name: 'Ana García', email: 'ana.garcia@example.com', priority: 'Media', purchased: 'Smartphone' },
  { id: 9, name: 'Juan Pérez', email: 'juan.perez@example.com', priority: 'Alta', purchased: 'Laptop' },
  { id: 10, name: 'Ana García', email: 'ana.garcia@example.com', priority: 'Media', purchased: 'Smartphone' },
];

const CustomerList = () => {
  const [customers, setCustomers] = useState(dummyCustomers);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      // Lógica de eliminación aquí (ej. llamada a la API)
      console.log(`Cliente con ID ${id} eliminado`);
      // Actualizar el estado para reflejar la eliminación en la UI
      setCustomers(customers.filter(customer => customer.id !== id));
    }
  };

  return (
    <div className="pt-[8%] pb-[80%] px-[4%]">
      <h1 className="text-2xl font-bold mb-4">Lista de Clientes</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Prioridad</th>
            <th className="py-2 px-4 border-b">Compró</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td className="py-2 px-4 text-center border-b">{customer.name}</td>
              <td className="py-2 px-4 text-center border-b">{customer.email}</td>
              <td className="py-2 px-4 text-center border-b">{customer.priority}</td>
              <td className="py-2 px-4 text-center border-b">{customer.purchased}</td>
              <td className="py-2 px-4 text-center border-b flex justify-around items-center">
                <Link
                  to={`/admin/users/update/${customer.id}`}
                  className="text-gray-500 hover:text-gray-800"
                  aria-label="Actualizar"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <Link
                  to={`/admin/users/deactivate/${customer.id}`}
                  className="text-gray-500 hover:text-gray-800"
                  aria-label="Desactivar"
                >
                  <FontAwesomeIcon icon={faSquareXmark} />
                </Link>
                <button
                  onClick={() => handleDelete(customer.id)}
                  className="text-gray-500 hover:text-gray-800"
                  aria-label="Eliminar"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
