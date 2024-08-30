import React, { useState } from 'react';
import '../index.css';
import Header from '../components/HeaderL';
import axios from 'axios';

const DeleteCourier = () => {
  const [isActive, setIsActive] = useState(false);

  // Asume que el ID del domiciliario se pasa como prop o se obtiene de alguna manera
  const domiciliarioId = 1; // Ejemplo: reemplaza con el ID real del domiciliario

  const handleToggle = () => {
    const action = isActive ? 'Inactivar' : 'Activar';
    if (window.confirm(`¿Estás seguro de que deseas ${action} al domiciliario?`)) {
      axios.patch(`/api/usuario/${domiciliarioId}/estado`)
        .then(response => {
          setIsActive(!isActive);
          alert('Estado del domiciliario actualizado.');
        })
        .catch(error => {
          console.error('Error al actualizar el estado:', error);
          alert('Error al actualizar el estado.');
        });
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (window.confirm('¿Estás seguro de que deseas eliminar a este domiciliario?')) {
      axios.delete(`/api/usuario/${domiciliarioId}`)
        .then(response => {
          alert('Domiciliario eliminado.');
          // Redirige o actualiza la vista según sea necesario
        })
        .catch(error => {
          console.error('Error al eliminar el domiciliario:', error);
          alert('Error al eliminar el domiciliario.');
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="a1">
        <center>
          <h1>Eliminar domiciliario</h1>
        </center>
        <div className="a3">
          <span className="a4">
            <ion-icon name="person-outline"></ion-icon>
          </span>
          <div className="a6">
            <p>Nombre..</p>
            <p>Correo</p>
          </div>
        </div>
        <form id="deleteForm">
          <div className="a7">
            <button type="submit" id="deleteButton" className="a8 text-white bg-black" onClick={handleDelete}>
              Eliminar
            </button>
            <button
              type="button"
              id="toggleButton"
              className={isActive ? 'activate-button' : 'deactivate-button bg-[#ccc]'}
              onClick={handleToggle}
            >
              {isActive ? 'Activo' : 'Inactivo'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteCourier;
