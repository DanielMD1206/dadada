import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../index.css';
import Header from './HeaderL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Inicializa useNavigate

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

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        correo_electronico_usuario: values.email,
        contrasena_usuario: values.password,
      });

      // Guardar el token en el almacenamiento local
      localStorage.setItem('token', response.data.token);

      // Determinar la ruta de redirección basada en el rol del usuario
      const { rol_usuario } = response.data.Usuario;
      console.log('Rol del usuario:', rol_usuario);

      switch (rol_usuario) {
        case 'Administrador':
          navigate('/admin');
          break;
        case 'Cliente':
          navigate('/');
          break;
        case 'Vendedor':
          navigate('/seller');
          break;
        case 'Domiciliario':
          navigate('/domiciliary');
          break;
        default:
          navigate('/login');
          break;
      }

      console.log('Inicio de sesión exitoso:', response.data);
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response ? error.response.data : error.message);

      // Mostrar mensaje de error en la interfaz y alerta
      const errorMessage = error.response ? error.response.data.message : 'Correo o contraseña incorrectos.';
      setError(errorMessage);
      window.alert(errorMessage); // Mostrar alerta
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="body1">
      <Header />
      <div className="wrapper2">
        <div className="form-box1 login">
          <h2>Iniciar Sesión</h2>
          {error && <div className="error-message">{error}</div>}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
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
                <button type="submit" className="btn0" disabled={isSubmitting}>
                  Iniciar sesión
                </button>
                <div className="login-registerr">
                  <p>
                    ¿No tiene una cuenta?{' '}
                    <Link to="/register" className="register-link">
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
