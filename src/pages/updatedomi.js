import React, { useState, useEffect } from 'react';
import '../index.css';
import Header from '../components/HeaderL';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateDeliveryPerson = () => {
  const { id } = useParams(); // Suponiendo que el ID del domiciliario se pasa como parámetro de la URL
  const [formData, setFormData] = useState({
    nombre_usuario: '',
    apellido_usuario: '',
    celular_usuario: '',
    correo_electronico_usuario: '',
    usuario: '',
    description: '', // Este campo no está en el modelo, pero lo hemos agregado como descripción adicional
  });

  const [notesList, setNotesList] = useState([]);
  const [note, setNote] = useState('');

  useEffect(() => {
    // Cargar los datos del domiciliario cuando el componente se monte
    axios.get(`/api/usuario/${id}`)
      .then(response => {
        const user = response.data[0]; // Ajusta esto según la estructura de la respuesta de tu API
        setFormData({
          nombre_usuario: user.nombre_usuario,
          apellido_usuario: user.apellido_usuario,
          celular_usuario: user.celular_usuario,
          correo_electronico_usuario: user.correo_electronico_usuario,
          usuario: user.usuario,
          description: '' // Inicializar el campo descripción si es necesario
        });
      })
      .catch(error => {
        console.error('Error al cargar los datos del domiciliario:', error);
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddNote = () => {
    if (note.trim() !== '') {
      setNotesList([...notesList, note]);
      setNote(''); // Limpiar el campo de nota
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { nombre_usuario, apellido_usuario, celular_usuario, correo_electronico_usuario, usuario, description } = formData;

    if (nombre_usuario.trim() === '') {
      alert('El campo Nombre es obligatorio.');
      return;
    }

    if (apellido_usuario.trim() === '') {
      alert('El campo Apellido es obligatorio.');
      return;
    }

    if (celular_usuario.trim() === '') {
      alert('El campo Celular es obligatorio.');
      return;
    }

    if (correo_electronico_usuario.trim() === '' || !correo_electronico_usuario.includes('@')) {
      alert('El campo Correo debe ser una dirección de correo electrónico válida.');
      return;
    }

    if (usuario.trim() === '') {
      alert('El campo Usuario es obligatorio.');
      return;
    }

    if (description.trim() === '') {
      alert('El campo Descripción es obligatorio.');
      return;
    }

    const confirmation = window.confirm('¿Estás seguro de que deseas actualizar esta información del domiciliario?');
    if (confirmation) {
      axios.put(`/api/usuario/${id}`, {
        nombre_usuario,
        apellido_usuario,
        celular_usuario,
        correo_electronico_usuario,
        usuario,
        description, // Enviar el campo descripción si es necesario
      })
        .then(response => {
          alert('Información del domiciliario actualizada correctamente.');
        })
        .catch(error => {
          console.error('Error al actualizar la información:', error);
          alert('Error al actualizar la información.');
        });
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
            <p>Nombre</p>
            <p>Correo</p>
          </div>
        </div>
        <form id="updateForm" onSubmit={handleSubmit}>
          <label htmlFor="nombre_usuario">Nombre</label>
          <input
            className='input8'
            type="text"
            id="nombre_usuario"
            name="nombre_usuario"
            value={formData.nombre_usuario}
            onChange={handleChange}
            placeholder="Ingrese su nombre aquí:"
            required
          />

          <label htmlFor="apellido_usuario">Apellido</label>
          <input
            className='input8'
            type="text"
            id="apellido_usuario"
            name="apellido_usuario"
            value={formData.apellido_usuario}
            onChange={handleChange}
            placeholder="Ingrese su apellido aquí:"
            required
          />

          <label htmlFor="celular_usuario">Celular</label>
          <input
            className='input8'
            type="text"
            id="celular_usuario"
            name="celular_usuario"
            value={formData.celular_usuario}
            onChange={handleChange}
            placeholder="Ingrese su número de celular aquí:"
            required
          />

          <label htmlFor="correo_electronico_usuario">Correo</label>
          <input
            className='input8'
            type="email"
            id="correo_electronico_usuario"
            name="correo_electronico_usuario"
            value={formData.correo_electronico_usuario}
            onChange={handleChange}
            placeholder="Ingrese su correo aquí:"
            required
          />

          <label htmlFor="usuario">Usuario</label>
          <input
            className='input8'
            type="text"
            id="usuario"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            placeholder="Ingrese su nombre de usuario aquí:"
            required
          />

          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Ingrese una descripción aquí:"
            required
          ></textarea>

          <label htmlFor="note">Nota</label>
          <input
            type="text"
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Ingrese una nota aquí:"
          />
          <button
            type="button"
            id="addNoteButton"
            onClick={handleAddNote}
          >
            <span className="icon"><ion-icon name="add-circle-outline"></ion-icon></span>
            Agregar Nota
          </button>

          {notesList.length > 0 && (
            <ul>
              {notesList.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          )}

          <button type="submit" className='bg-black text-white'>Actualizar domiciliario</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDeliveryPerson;
