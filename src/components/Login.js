import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from './HeaderL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="body1">
      <Header />
      <div className="wrapper2">
        <div className="form-box1 login">
          <h2>Iniciar Sesión</h2>
          <form action="#" className="for">
            <div className="input-box1">
              <label htmlFor="email">Correo</label>
              <div className="input-wrapper2">
                <span className="icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="Ingrese su correo aquí:"
                  required
                />
              </div>
            </div>
            <div className="input-box1">
              <label htmlFor="password">Contraseña</label>
              <div className="input-wrapper2">
                <span className="icon">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Ingrese su contraseña aquí:"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <div className="remember-forgot3">
              <label className="remember-me">
                <input type="checkbox" /> Recordar contraseña
              </label>
              <Link to="#">¿Olvidó su contraseña?</Link>
            </div>
            <button type="submit" className="btn0">
              Iniciar sesión
            </button>
            <div className="login-registerr">
              <p>
                ¿No tiene una cuenta?{' '}
                <Link to="/registrate" className="register-link">
                  Registrarse
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
