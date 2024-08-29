import React, { useState } from 'react';
import '../index.css';
import Header from '../components/HeaderL';

const DeleteCourier = () => {
  const [notes, setNotes] = useState(['']);
  const [isActive, setIsActive] = useState(false);

  const addNote = () => {
    setNotes([...notes, '']);
  };

  const handleNoteChange = (index, event) => {
    const newNotes = notes.slice();
    newNotes[index] = event.target.value;
    setNotes(newNotes);
  };

  const handleToggle = () => {
    const action = isActive ? 'Inactivar' : 'Activar';
    if (window.confirm(`¿Estás seguro de que deseas ${action} al domiciliario?`)) {
      setIsActive(!isActive);
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (window.confirm('¿Estás seguro de que deseas eliminar a este domiciliario?')) {
      alert('Domiciliario eliminado.');
    }
  };

  return (
    <div >
      <Header/>
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
        <label htmlFor="notes">Anotaciones</label>
        {notes.map((note, index) => (
          <input
            key={index}
            type="text"
            id={`notes${index + 1}`}
            name="notes"
            placeholder="Ingrese sus anotaciones aquí:"
            value={note}
            onChange={(event) => handleNoteChange(index, event)}
          />
        ))}
        <button type="button" onClick={addNote}>
          <span className="icon">
            <ion-icon name="add-circle-outline"></ion-icon>
          </span>
          Agregar Anotaciones
        </button>
        <div className="a7">
          <button type="submit" id="deleteButton" className="a8" onClick={handleDelete}>
            Eliminar
          </button>
          <button
            type="button"
            id="toggleButton"
            className={isActive ? 'activate-button' : 'deactivate-button'}
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
