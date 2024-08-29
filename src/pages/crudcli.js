import { faEdit, faPlus, faToggleOff, faToggleOn, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../index.css';
import Header from '../components/HeaderV';

const App = () => {
  const [clients, setClients] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);
  const [nextId, setNextId] = useState(1);

  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);
  
  const openEditModal = (client) => {
    setCurrentClient(client);
    setShowEditModal(true);
  };
  
  const closeEditModal = () => setShowEditModal(false);

  const handleAddClient = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newClient = {
      id: nextId,
      tipoDoc: formData.get('campo_tipoDoc'),
      noDoc: formData.get('campo_noDoc'),
      nombre: formData.get('campo_nombreU'),
      apellido: formData.get('campo_apellido'),
      direccion: formData.get('campo_direccion'),
      telefono: formData.get('campo_telefono'),
      correo: formData.get('campo_correo'),
    };
    setClients([...clients, newClient]);
    setNextId(nextId + 1);
    closeAddModal();
  };  

  const handleEditClient = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedClient = {
      id: currentClient.id,
      tipoDoc: formData.get('campo_tipoDoc'),
      noDoc: formData.get('campo_noDoc'),
      nombre: formData.get('campo_nombreU'),
      apellido: formData.get('campo_apellido'),
      direccion: formData.get('campo_direccion'),
      telefono: formData.get('campo_telefono'),
      correo: formData.get('campo_correo'),
    };
    setClients(clients.map(client => client.id === updatedClient.id ? updatedClient : client));
    closeEditModal();
  };

  const handleDeleteClient = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este Cliente?')) {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    if (window.confirm('¿Estás seguro de que deseas cambiar el estado de este Cliente?')) {
      setClients(clients.map(client => client.id === id ? { ...client, inactive: !client.inactive } : client));
    }
  };

  return (
    <div>
      <Header />

      <div className="c1">
        <div className="c12">
          <h1 className="fw-bold">Clientes</h1><br />

          {/* Modal Add Client */}
          {showAddModal && (
            <div id="modalAgregar" className="modal-overlay">
              <div className="modal-content">
                <span className="modal-close" onClick={closeAddModal}>&times;</span>
                <h2>Agregar Cliente</h2>
                <form id="userForm" onSubmit={handleAddClient}>
                  <div className="form-group">
                    <label htmlFor="tipDocCliente">Tipo Documento</label>
                    <input type="text" id="tipDocCliente" name="campo_tipoDoc" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="noDocCliente">Número Documento</label>
                    <input type="number" id="noDocCliente" name="campo_noDoc" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nombreCliente">Nombre</label>
                    <input type="text" id="nombreCliente" name="campo_nombreU" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apellidoCliente">Apellido</label>
                    <input type="text" id="apellidoCliente" name="campo_apellido" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="direccionCliente">Dirección</label>
                    <input type="text" id="direccionCliente" name="campo_direccion" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefonoCliente">Telefono</label>
                    <input type="number" id="telefonoCliente" name="campo_telefono" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="correoCliente">Correo</label>
                    <input type="email" id="correoCliente" name="campo_correo" required />
                  </div>
                  <input type="submit" className="btn btn-primary" value="Guardar Cliente" />
                </form>
              </div>
            </div>
          )}

          {/* Modal Edit Client */}
          {showEditModal && currentClient && (
            <div id="modalEditar" className="modal-overlay">
              <div className="modal-content">
                <span className="modal-close" onClick={closeEditModal}>&times;</span>
                <h2>Editar Cliente</h2>
                <form id="editForm" onSubmit={handleEditClient}>
                  <input type="hidden" id="editId" name="editId" value={currentClient.id} />
                  <div className="form-group">
                    <label htmlFor="editTipDocCliente">Tipo Documento</label>
                    <input type="text" id="editTipDocCliente" name="campo_tipoDoc" defaultValue={currentClient.tipoDoc} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editNoDocCliente">Número Documento</label>
                    <input type="number" id="editNoDocCliente" name="campo_noDoc" defaultValue={currentClient.noDoc} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editNombreCliente">Nombre</label>
                    <input type="text" id="editNombreCliente" name="campo_nombreU" defaultValue={currentClient.nombre} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editApellidoCliente">Apellido</label>
                    <input type="text" id="editApellidoCliente" name="campo_apellido" defaultValue={currentClient.apellido} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editDireccionCliente">Dirección</label>
                    <input type="text" id="editDireccionCliente" name="campo_direccion" defaultValue={currentClient.direccion} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editTelefonoCliente">Telefono</label>
                    <input type="number" id="editTelefonoCliente" name="campo_telefono" defaultValue={currentClient.telefono} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editCorreoCliente">Correo</label>
                    <input type="email" id="editCorreoCliente" name="campo_correo" defaultValue={currentClient.correo} required />
                  </div>
                  <input type="submit" className="btn btn-primary" value="Actualizar Cliente" />
                </form>
              </div>
            </div>
          )}

          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Tipo doc</th>
                <th>Numero doc</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Dirección</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id} className={client.inactive ? 'inactive' : ''}>
                  <td>{client.id}</td>
                  <td>{client.tipoDoc}</td>
                  <td>{client.noDoc}</td>
                  <td>{client.nombre}</td>
                  <td>{client.apellido}</td>
                  <td>{client.direccion}</td>
                  <td>{client.telefono}</td>
                  <td>{client.correo}</td>
                  <td>
                    <div className="actions">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="icon-edit"
                        onClick={() => openEditModal(client)} 
                      />
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        className="icon-delete" 
                        onClick={() => handleDeleteClient(client.id)} 
                      />
                      <FontAwesomeIcon 
                        icon={client.inactive ? faToggleOff : faToggleOn} 
                        className="icon-toggle" 
                        onClick={() => handleToggleStatus(client.id)} 
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-primary" onClick={openAddModal}>
            <FontAwesomeIcon icon={faPlus} /> Agregar Cliente
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;