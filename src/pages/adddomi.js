import React, { useState } from 'react';
import '../index.css';

const AddDeliveryPerson = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: '',
    description: '',
    additionalNotes: []
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleAddNote = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      additionalNotes: [...prevFormData.additionalNotes, '']
    }));
  };

  const handleNoteChange = (index, value) => {
    setFormData(prevFormData => {
      const updatedNotes = [...prevFormData.additionalNotes];
      updatedNotes[index] = value;
      return { ...prevFormData, additionalNotes: updatedNotes };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del domiciliario:', formData);
    setFormData({
      name: '',
      email: '',
      notes: '',
      description: '',
      additionalNotes: []
    });
  };

  return (
    <div>
      <header className='navbar8 header1'>
        <div className="logo8">
        <img className="img8" src="../img/Logo.png" alt="" />
          <h2 className="logo-text8">Distribuidora De Flores Yesid</h2>
        </div>
        <nav className="gota8">
          <a className="inicio8" href="../domiciliary">Volver</a>
          <div className="animation8 start-home8"></div>
        </nav>
      </header>

      <div className="a1">
        <center>
          <h1>Añadir domiciliario</h1>
        </center>
        <div className="a3">
          <span className="a4"><ion-icon name="person-outline"></ion-icon></span>
          <div className="a6">
            <p>Nombre..</p>
            <p>Correo</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input className='input8'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre aquí:"
            required
          />

          <label htmlFor="email">Correo</label>
          <input className='input8'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su correo aquí:"
            required
          />

          <label htmlFor="notes">Anotaciones</label>
          <input className='input8'
            type="text"
            id="notes1"
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

          {formData.additionalNotes.map((note, index) => (
            <input
            className='input8'
              key={index}
              type="text"
              name={`notes-${index}`}
              value={note}
              onChange={(e) => handleNoteChange(index, e.target.value)}
              placeholder={`Anotación ${index + 2}`}
            />
          ))}

          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Ingrese su descripción aquí:"
            required
          ></textarea>

          <button type="submit">Añadir domiciliario</button>
        </form>
      </div>
    </div>
  );
};

export default AddDeliveryPerson;
