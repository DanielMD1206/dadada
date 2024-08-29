import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from './HeaderR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Validación del formulario con Yup
  const validationSchema = Yup.object({
    documentType: Yup.string().required('Seleccione el tipo de documento'),
    documentNumber: Yup.string().required('Ingrese su número de documento'),
    name: Yup.string().required('Ingrese su nombre'),
    lastName: Yup.string().required('Ingrese su apellido'),
    address: Yup.string().required('Ingrese su dirección'),
    phone: Yup.string().required('Ingrese su teléfono'),
    email: Yup.string().email('Correo no válido').required('Ingrese su correo'),
    password: Yup.string().required('Ingrese su contraseña'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Confirme su contraseña')
  });

  return (
    <div className="body1">
      <Header />
      <div className="wrapper2">
        <div className="form-box1 login">
          <h2>Crear Cuenta</h2>
          <Formik
            initialValues={{
              documentType: '',
              documentNumber: '',
              name: '',
              lastName: '',
              address: '',
              phone: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              // Aquí puedes manejar el envío del formulario
            }}
          >
            {({ errors, touched }) => (
              <Form className="for">
                <div className="input-box1">
                  <label htmlFor="documentType">Tipo de Documento</label>
                  <div className="input-wrapper2">
                    <span className="icon"><ion-icon name="document-text-outline"></ion-icon></span>
                    <Field as="select" name="documentType" id="documentType" className={errors.documentType && touched.documentType ? 'input-error' : ''}>
                      <option value="">Seleccione el tipo de documento</option>
                      <option value="CC">Cédula de Ciudadanía</option>
                      <option value="TI">Tarjeta de Identidad</option>
                      <option value="CE">Cédula de Extranjería</option>
                      <option value="PP">Pasaporte</option>
                    </Field>
                  </div>
                </div>

                <div className="input-box1">
                  <label htmlFor="documentNumber">Número de Documento</label>
                  <div className="input-wrapper2">
                    <span className="icon"><ion-icon name="barcode-outline"></ion-icon></span>
                    <Field type="text" name="documentNumber" id="documentNumber" placeholder="Ingrese su número de documento aquí:" className={errors.documentNumber && touched.documentNumber ? 'input-error' : ''} />
                  </div>
                </div>

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
                  <label htmlFor="address">Dirección</label>
                  <div className="input-wrapper2">
                    <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <Field type="text" name="address" id="address" placeholder="Ingrese su dirección aquí:" className={errors.address && touched.address ? 'input-error' : ''} />
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
