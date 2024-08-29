import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from './HeaderR';

const Register = () => {
  return (
    <div className="body1">
      <Header/>
      <div className="wrapper2">
        <div className="form-box1 login">
          <h2>Crear Cuenta</h2>
          <form action="#" className="for">

            <div className="input-box1">
              <label htmlFor="documentType">Tipo de Documento</label>
              <div className="input-wrapper2">
                <span className="icon"><ion-icon name="document-text-outline"></ion-icon></span>
                <select id="documentType" required>
                  <option value="">Seleccione el tipo de documento</option>
                  <option value="CC">Cédula de Ciudadanía</option>
                  <option value="TI">Tarjeta de Identidad</option>
                  <option value="CE">Cédula de Extranjería</option>
                  <option value="PP">Pasaporte</option>
                </select>
              </div>
            </div>

            <div className="input-box1">
              <label htmlFor="documentNumber">Número de Documento</label>
              <div className="input-wrapper2">
                <span className="icon"><ion-icon name="barcode-outline"></ion-icon></span>
                <input type="text" id="documentNumber" placeholder="Ingrese su número de documento aquí:" required />
              </div>
            </div>

            <div className="input-box1">
              <label htmlFor="name">Nombre</label>
              <div className="input-wrapper2">
                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                <input type="text" id="name" placeholder="Ingrese su nombre aquí:" required />
              </div>
            </div>

            <div className="input-box1">
              <label htmlFor="lastName">Apellido</label>
              <div className="input-wrapper2">
                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                <input type="text" id="lastName" placeholder="Ingrese su apellido aquí:" required />
              </div>
            </div>

            <div className="input-box1">
              <label htmlFor="address">Dirección</label>
              <div className="input-wrapper2">
                <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                <input type="text" id="address" placeholder="Ingrese su dirección aquí:" required />
              </div>
            </div>

            <div className="input-box1">
              <label htmlFor="phone">Teléfono</label>
              <div className="input-wrapper2">
                <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
                <input type="tel" id="phone" placeholder="Ingrese su teléfono aquí:" required />
              </div>
            </div>

            <div className="input-box1">
              <label htmlFor="email">Correo</label>
              <div className="input-wrapper2">
                <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                <input type="email" id="email" placeholder="Ingrese su correo aquí:" required />
              </div>
            </div>

            <div className="input-box1">
              <label htmlFor="password">Contraseña</label>
              <div className="input-wrapper2">
                <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                <input type="password" id="password" placeholder="Ingrese su contraseña aquí:" required />
              </div>
            </div>

            <div className="input-box1">
              <label htmlFor="confirmPassword">Confirmación de contraseña</label>
              <div className="input-wrapper2">
                <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                <input type="password" id="confirmPassword" placeholder="Confirme su contraseña aquí:" required />
              </div>
            </div>

            <button type="submit" className="btn0">Crear Cuenta</button>
            <div className="login-registerr">
              <p>¿Ya tiene una cuenta? <Link to="/login" className="login-registerr">Iniciar sesión</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
