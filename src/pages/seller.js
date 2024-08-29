import React from 'react';
import '../index.css';
import Header from '../components/HeaderV';
import bienvenidaImg from '../static/img/pexels-iriser-1408221 (2).jpg'; 

const SellerView = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="te2 bg-gray-50 ">
          <h1 className="titi2"><strong>Bienvenido vendedor</strong></h1>
          <p className='text2' style={{ marginBottom: '50px' }}>
            Bienvenido a tu panel de gestión, donde puedes realizar tareas clave como
            crear, actualizar y <br/> eliminar información para mantener el negocio funcionando sin problemas. Explora <br/> 
            las herramientas disponibles para optimizar tu flujo de trabajo y contribuir al éxito de la empresa.
          </p>
          <img className="bienvenido bg-gray-50" src={bienvenidaImg} alt="Bienvenido Vendedor" />
        </div>
      </div>
    </div>
  );
};

export default SellerView;
