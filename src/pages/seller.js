import React from 'react';
import '../index.css';
import Header from '../components/HeaderV';

const SellerView = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="te2">
          <h1 className="titi2"><strong>Bienvenido vendedor</strong></h1>
          <p className='text2' style={{ marginBottom: '50px' }}>
            Bienvenido a tu panel de gestión, donde puedes realizar tareas clave como
            crear, actualizar y <br/> eliminar información para mantener el negocio funcionando sin problemas. Explora <br/> 
            las herramientas disponibles para optimizar tu flujo de trabajo y contribuir al éxito de la empresa.
          </p>
          <center>
            <img className="bienvenido" style={{ height: '500px' }} src="../static/img/pexels-iriser-1408221 (2).jpg" alt="Bienvenido Vendedor" />
          </center>
        </div>
      </div>
    </div>
  );
};

export default SellerView;
