import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../index.css';
import Header from './HeaderR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Inicializa useNavigate

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Validación del formulario con Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Ingrese su nombre'),
    lastName: Yup.string().required('Ingrese su apellido'),
    phone: Yup.string().required('Ingrese su teléfono'),
    email: Yup.string().email('Correo no válido').required('Ingrese su correo'),
    password: Yup.string().required('Ingrese su contraseña'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Confirme su contraseña'),
    rol: Yup.string().oneOf(['Cliente', 'Administrador', 'Vendedor', 'Domiciliario'], 'Rol no válido').required('Seleccione un rol')
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:4000/api/register', {
        nombre_usuario: values.name,
        apellido_usuario: values.lastName,
        celular_usuario: values.phone,
        correo_electronico_usuario: values.email,
        usuario: values.email,
        contrasena_usuario: values.password,
        rol_usuario: values.rol
      });
      console.log('Usuario registrado exitosamente:', response.data);
      window.alert('Registro exitoso. Ahora puedes iniciar sesión.'); // Muestra la alerta
      navigate('/login'); // Redirige al login
    } catch (error) {
      console.error('Error al enviar la solicitud:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="body1">
      <Header />
      <div className="wrapper2">
        <div className="form-box1 login">
          <h2>Crear Cuenta</h2>
          {error && <div className="error-message">{error}</div>}
          <Formik
            initialValues={{
              name: '',
              lastName: '',
              phone: '',
              email: '',
              password: '',
              confirmPassword: '',
              rol: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="for">
                <div className="input-box1">
                  <label htmlFor="name">Nombre</label>
                  <div className="input-wrapper2">
                    <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <Field type="text" name="name" id="name" placeholder="Ingrese su nombre aquí:" className={errors.name && touched.name ? 'input-error' : ''} />
                  </div>
                </div>

                <div className="input-box1">
                  <label htmlFor="lastName">Apellido</label>
                  <div className="input-wrapper2">
                    <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <Field type="text" name="lastName" id="lastName" placeholder="Ingrese su apellido aquí:" className={errors.lastName && touched.lastName ? 'input-error' : ''} />
                  </div>
                </div>

                <div className="input-box1">
                  <label htmlFor="phone">Teléfono</label>
                  <div className="input-wrapper2">
                    <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
                    <Field type="tel" name="phone" id="phone" placeholder="Ingrese su teléfono aquí:" className={errors.phone && touched.phone ? 'input-error' : ''} />
                  </div>
                </div>

                <div className="input-box1">
                  <label htmlFor="email">Correo</label>
                  <div className="input-wrapper2">
                    <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <Field type="email" name="email" id="email" placeholder="Ingrese su correo aquí:" className={errors.email && touched.email ? 'input-error' : ''} />
                  </div>
                </div>

                <div className="input-box1">
                  <label htmlFor="password">Contraseña</label>
                  <div className="input-wrapper2">
                    <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder="Ingrese su contraseña aquí:"
                      className={errors.password && touched.password ? 'input-error' : ''}
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

                <div className="input-box1">
                  <label htmlFor="confirmPassword">Confirmación de contraseña</label>
                  <div className="input-wrapper2">
                    <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <Field
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirme su contraseña aquí:"
                      className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>

                <div className="input-box1">
                  <label htmlFor="rol">Rol</label>
                  <div className="input-wrapper2">
                    <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <Field as="select" name="rol" id="rol" className={errors.rol && touched.rol ? 'input-error' : ''}>
                      <option value="">Seleccione un rol</option>
                      <option value="Cliente">Cliente</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Vendedor">Vendedor</option>
                      <option value="Domiciliario">Domiciliario</option>
                    </Field>
                  </div>
                </div>

                <button type="submit" className="btn0">Crear Cuenta</button>
                <div className="login-registerr">
                  <p>¿Ya tiene una cuenta? <Link to="/login" className="login-registerr">Iniciar sesión</Link></p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
