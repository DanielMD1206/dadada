import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from './HeaderR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Correo inválido').required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    // Aquí puedes manejar el envío del formulario
  };

  return (
    <div className="body1">
      <Header />
      <div className="wrapper2">
        <div className="form-box1 login">
          <h2>Iniciar Sesión</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="for">
                <div className="input-box1">
                  <label htmlFor="email">Correo</label>
                  <div className="input-wrapper2">
                    <span className="icon">
                      <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    <Field
                      type="email"
                      id="email"
                      name="email"
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
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
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
                    <Field type="checkbox" name="rememberMe" /> Recordar contraseña
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
