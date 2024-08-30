import React, { useState } from 'react';
import '../index.css';
import Header from '../components/HeaderL';

const DeleteProduct = () => {
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
    if (window.confirm(`¿Estás seguro de que deseas ${action} el Producto?`)) {
      setIsActive(!isActive);
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      alert('Producto eliminado.');
    }
  };

  return (
    <div>
      <Header/>
      <div className='b1'>
      <div className="b2">
        <img src="../img/tulipan" alt="Imagen de Flores" />
      </div>
      <div className="b3">
        <form>
          <label htmlFor="notes">Anotaciones</label>
          <div id="notesContainer">
            {notes.map((note, index) => (
              <input
                key={index}
                type="text"
                id={`notes${index + 1}`}
                name="notes"
                className="note-input"
                placeholder="Ingrese sus anotaciones aquí:"
                value={note}
                onChange={(event) => handleNoteChange(index, event)}
              />
            ))}
          </div>
          <button type="button" onClick={addNote}>
            <span className="b4">
              <ion-icon name="add-circle-outline"></ion-icon>
            </span>
            Agregar Anotaciones
          </button>

          <div className="b5">
            <button type="submit" id="deleteButton" className="b6 text-white bg-black" onClick={handleDelete}>
              Eliminar
            </button>
            <button
              type="button"
              id="toggleButton"
              className= {isActive ? 'activate-button' : 'deactivate-button text-white bg-red-600' }
              onClick={handleToggle}
            >
              {isActive ? 'Activo' : 'Inactivo'}
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
