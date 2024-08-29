import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from '../components/HeaderVP';
import img1 from '../static/img/unnamed.jpg'
import img2 from '../static/img/unnamed (1).jpg'
import img3 from '../static/img/unnamed (2).jpg'


const Products = () => {
  return (
    <div>
      <Header/>
      <div>
        <span className="p1">El ramo contiene dos tipos de flores las cuales son rosas y lirios</span>
        <div className="p2">
          <span className="p3">Ramo redondo</span>
          <span className="p4">Precio</span>
        </div>
        <div className="p5">
          <div className="p6">
          <img src={img1} alt="Bienvenido Vendedor" />
          </div>
        </div>
        <div className="p7">
          <div className="p8">
            <div className="p9">
            <img src={img2} alt="Bienvenido Vendedor" />
            </div>
          </div>
        </div>
        <div className="p10">
          <span className="p11">Productos en distribución</span>
          <span className="p12">Todos los productos que están en circulación</span>
        </div>
        <div className="p13">
          <div className="p14">
            <Link to="/updateprod" className="p15 link-black">
              <span className="p16">Editar</span>
              <div className="p17" id="editar">
                <FontAwesomeIcon icon={faEdit} />
              </div>
            </Link>
            <Link to="/deletepd" className="p21 link-black">
              <span className="p22">Eliminar</span>
              <div className="p23" id="eliminar">
                <FontAwesomeIcon icon={faTrash}/>
              </div>
            </Link>
          </div>
          <div className="p24">
            <div className="p25"></div>
          </div>
        </div>
        <span className="p26">$80.000</span>
        <div className="p27">
          <span className="p28">Ramo de girasoles</span>
          <span className="p29">Precio</span>
        </div>
        <div className="p30">
          <div className="p31">
            <div className="p32">
              <img src={img3} alt="Bienvenido Vendedor" />
            </div>
          </div>
        </div>
        <div className="p33">
          <div className="p34"></div>
        </div>
        <div className="p35">
          <div className="p36">
            <Link to="/updateprod" className="p15 link-black">
              <span className="p38">Editar</span>
              <div className="p39" id="editar">
                <FontAwesomeIcon icon={faEdit} />
              </div>
            </Link>
            <Link to="/deletepd" className="p21 link-black">
              <span className="p44">Eliminar</span>
              <div className="p45" id="eliminar">
                <FontAwesomeIcon icon={faTrash}/>
              </div>
            </Link>
          </div>
          <div className="p46">
            <div className="p47"></div>
          </div>
        </div>
        <span className="p48">$35.000</span>
        <span className="p49">El ramo contiene 1 tipo de flor y 1 tipo de follaje el cual el tipo de flor son girasoles y el tipo de follaje es soliago.</span>
        <div className="p50">
          <span className="p51">Ramo en caracol</span>
          <span className="p52">Precio</span>
        </div>
        <div className="p53">
          <div className="p54">
            <Link to="/updateprod" className="p15 link-black">
              <span className="p56">Editar</span>
              <div className="p57" id="editar">
                <FontAwesomeIcon icon={faEdit} />
              </div>
            </Link>
            <Link to="/deletepd" className="p21 link-black">
              <span className="p62">Eliminar</span>
              <div className="p63" id="eliminar">
                <FontAwesomeIcon icon={faTrash}/>
              </div>
            </Link>
          </div>
          <div className="p64">
            <div className="p65"></div>
          </div>
        </div>
        <span className="p66">$60.000</span>
        <span className="p67">El ramo contiene 2 tipos de flores y 4 tipos de follaje, las cuales las flores son rosas y lirios, y el follaje es rusco, gipso, espina de pescado y canción de la india</span>
        <Link to="/addprod" className="p68 link-black">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
        <div className="p69"></div>
        <div className="p70"></div>
      </div>
    </div>
  );
};

export default Products;
