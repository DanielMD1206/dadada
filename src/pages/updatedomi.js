import React, { useState } from 'react';
import '../index.css';
import Header from '../components/HeaderL';

const UpdateDeliveryPerson = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: '',
    description: '',
  });

  const [notesList, setNotesList] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddNote = () => {
    if (formData.notes.trim() !== '') {
      setNotesList([...notesList, formData.notes]);
      setFormData({ ...formData, notes: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, description } = formData;

    if (name.trim() === '') {
      alert('El campo Nombre es obligatorio.');
      return;
    }

    if (email.trim() === '' || !email.includes('@')) {
      alert('El campo Correo debe ser una dirección de correo electrónico válida.');
      return;
    }

    if (description.trim() === '') {
      alert('El campo Descripción es obligatorio.');
      return;
    }

    const confirmation = window.confirm('¿Estás seguro de que deseas actualizar esta información del domiciliario?');
    if (confirmation) {
      alert('Información del domiciliario actualizada correctamente.');
    } else {
      alert('Actualización cancelada.');
    }
  };

  return (
    <div>
      <Header/>

      <div className="a1">
        <center>
          <h1>Actualizar domiciliario</h1>
        </center>
        <div className="a3">
          <span className="a4"><ion-icon name="person-outline"></ion-icon></span>
          <div className="a6">
            <p>Nombre..</p>
            <p>Correo</p>
          </div>
        </div>
        <form id="updateForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            className='input8'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre aquí:"
            required
          />

          <label htmlFor="email">Correo</label>
          <input
            className='input8'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su correo aquí:"
            required
          />

          <label htmlFor="notes">Anotaciones</label>
          <input
            className='input8'
            type="text"
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Ingrese sus anotaciones aquí:"
          />
          <button
            type="button"
            id="addNoteButton"
            onClick={handleAddNote}
          >
            <span className="icon"><ion-icon name="add-circle-outline"></ion-icon></span>
            Agregar Anotaciones
          </button>

          {notesList.length > 0 && (
            <ul>
              {notesList.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          )}

          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Ingrese su descripción aquí:"
            required
          ></textarea>

          <button type="submit">Actualizar domiciliario</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDeliveryPerson;