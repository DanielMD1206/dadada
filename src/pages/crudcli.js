import { faEdit, faToggleOff, faToggleOn, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import Header from '../components/HeaderV';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [filteredUsuarios, setFilteredUsuarios] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUsuario, setCurrentUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/usuario');
        setUsuarios(response.data);
        setFilteredUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  useEffect(() => {
    const results = usuarios.filter(usuario =>
      usuario.nombre_usuario.toLowerCase().includes(searchQuery.toLowerCase()) ||
      usuario.id_usuario.toString().includes(searchQuery)
    );
    setFilteredUsuarios(results);
  }, [searchQuery, usuarios]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const openEditModal = (usuario) => {
    setCurrentUsuario(usuario);
    setShowEditModal(true);
  };

  const closeEditModal = () => setShowEditModal(false);

  const handleEditUsuario = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedUsuario = {
      nombre_usuario: formData.get('campo_nombreU'),
      apellido_usuario: formData.get('campo_apellido'),
      celular_usuario: formData.get('campo_celular'),
      correo_electronico_usuario: formData.get('campo_correo'),
      usuario: formData.get('campo_usuario'),
      contrasena_usuario: formData.get('campo_contrasena'),
      rol_usuario: formData.get('campo_rol'),
      estado_usuario: formData.get('campo_estado')
    };
    try {
      await axios.put(`http://localhost:4000/api/usuario/${currentUsuario.id_usuario}`, updatedUsuario);
      setUsuarios(usuarios.map(usuario => usuario.id_usuario === currentUsuario.id_usuario ? { ...updatedUsuario, id_usuario: currentUsuario.id_usuario } : usuario));
      closeEditModal();
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  const handleToggleStatus = async (id_usuario) => {
    if (window.confirm('¿Estás seguro de que deseas cambiar el estado de este usuario?')) {
      try {
        await axios.patch(`http://localhost:4000/api/usuario/${id_usuario}/estado`);
        const updatedUsuarios = usuarios.map(usuario =>
          usuario.id_usuario === id_usuario ? {
            ...usuario,
            estado_usuario: usuario.estado_usuario === '1' ? '0' : '1'
          } : usuario
        );
        setUsuarios(updatedUsuarios);
        setFilteredUsuarios(updatedUsuarios.filter(usuario =>
          usuario.nombre_usuario.toLowerCase().includes(searchQuery.toLowerCase()) ||
          usuario.id_usuario.toString().includes(searchQuery)
        ));
      } catch (error) {
        console.error('Error al cambiar el estado del usuario:', error);
      }
    }
  };

  return (
    <div>
      <Header />

      <div className="c1">
        <div className="c12">
          <h1 className="fw-bold">Usuarios</h1><br />

          {/* Barra de búsqueda */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar por ID o nombre"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          {/* Modal Edit Usuario */}
          {showEditModal && currentUsuario && (
            <div id="modalEditar" className="modal-overlay">
              <div className="modal-content">
                <span className="modal-close" onClick={closeEditModal}>&times;</span>
                <h2>Editar Usuario</h2>
                <form id="editForm" onSubmit={handleEditUsuario}>
                  <input type="hidden" name="id_usuario" value={currentUsuario.id_usuario} />
                  <div className="form-group">
                    <label htmlFor="editNombreUsuario">Nombre</label>
                    <input type="text" id="editNombreUsuario" name="campo_nombreU" defaultValue={currentUsuario.nombre_usuario} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editApellidoUsuario">Apellido</label>
                    <input type="text" id="editApellidoUsuario" name="campo_apellido" defaultValue={currentUsuario.apellido_usuario} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editCelularUsuario">Celular</label>
                    <input type="number" id="editCelularUsuario" name="campo_celular" defaultValue={currentUsuario.celular_usuario} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editCorreoUsuario">Correo</label>
                    <input type="email" id="editCorreoUsuario" name="campo_correo" defaultValue={currentUsuario.correo_electronico_usuario} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editUsuario">Usuario</label>
                    <input type="text" id="editUsuario" name="campo_usuario" defaultValue={currentUsuario.usuario} required />
                  </div>
                  {/* Los campos de rol, contraseña y estado han sido eliminados */}
                  <input type="submit" className="btn btn-primary" value="Actualizar Usuario" />
                </form>
              </div>
            </div>
          )}

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Celular</th>
                <th>Correo</th>
                <th>Usuario</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsuarios.length > 0 ? (
                filteredUsuarios.map(usuario => (
                  <tr key={usuario.id_usuario} className={usuario.estado_usuario === '0' ? 'inactive' : ''}>
                    <td>{usuario.id_usuario}</td>
                    <td>{usuario.nombre_usuario}</td>
                    <td>{usuario.apellido_usuario}</td>
                    <td>{usuario.celular_usuario}</td>
                    <td>{usuario.correo_electronico_usuario}</td>
                    <td>{usuario.usuario}</td>
                    <td>{usuario.rol_usuario}</td>
                    <td>{usuario.estado_usuario === '1' ? 'Activo' : 'Inactivo'}</td>
                    <td>
                      <div className="actions">
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="icon-edit"
                          onClick={() => openEditModal(usuario)}
                        />
                        <FontAwesomeIcon
                          icon={usuario.estado_usuario === '1' ? faToggleOn : faToggleOff}
                          className="icon-toggle"
                          onClick={() => handleToggleStatus(usuario.id_usuario)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No hay usuarios disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;