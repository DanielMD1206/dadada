import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import Header from '../components/HeaderVP';

const Products = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/producto');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } 
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {productos.map(producto => (
          <div key={producto.id_producto} className="product-container">
            <span className="p1">
              {producto.descripcion_producto}
            </span>
            <div className="p2">
              <span className="p3">{producto.nombre_producto}</span>
              <span className="p4">Precio</span>
            </div>
            <div className="p5">
              <div className="p6">
                <img className="imagen2" src={producto.foto_ProductoURL} alt={producto.nombre_producto} />
              </div>
            </div>
            <div className="p7">
              <div className="p8">
                <div className="p9">
                  <img className="imagen1" src={producto.foto_ProductoURL} alt={producto.nombre_producto} />
                </div>
              </div>
            </div>
            <div className="p10">
              <span className="p11">Productos en distribución</span>
              <span className="p12">Todos los productos que están en circulación</span>
            </div>
            <div className="p13">
              <div className="p14">
                <Link to={`/updateprod/${producto.id_producto}`} className="p15 link-black">
                  <span className="p16">Editar</span>
                  <div className="p17" id="editar">
                    <FontAwesomeIcon icon={faEdit} />
                  </div>
                </Link>
                <Link to={`/changeProductState/${producto.id_producto}`} className="p21 link-black">
                  <span className="p22">Cambiar Estado</span>
                  <div className="p23" id="eliminar">
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </Link>
              </div>
              <div className="p24">
                <div className="p25"></div>
              </div>
            </div>
            <span className="p26">${producto.precio_producto}</span>
            <span className="p49">{producto.descripcion_producto}</span>
            <div className="p50">
              <span className="p51">Tipo: {producto.tipo_producto}</span>
              <span className="p52">Precio</span>
            </div>
            <div className="p53">
              <div className="p54">
                <Link to={`/updateprod/${producto.id_producto}`} className="p15 link-black">
                  <span className="p56">Editar</span>
                  <div className="p57" id="editar">
                    <FontAwesomeIcon icon={faEdit} />
                  </div>
                </Link>
                <Link to={`/changeProductState/${producto.id_producto}`} className="p21 link-black">
                  <span className="p62">Cambiar Estado</span>
                  <div className="p63" id="eliminar">
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </Link>
              </div>
              <div className="p64">
                <div className="p65"></div>
              </div>
            </div>
            <span className="p66">${producto.precio_producto}</span>
            <span className="p67">{producto.descripcion_producto}</span>
          </div>
        ))}
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
