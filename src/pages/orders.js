import React from 'react';
import '../index.css';
import Header from '../components/HeaderL';

const Orders = () => {
  return (
    <div>
      <Header/>
      <div className="v1">
        <div className="v2">
          <div className="v3">
            <span className="v4">
              <label>
                <input id="descripcion" className="btn1" type="text" name="text" style={{textAlign: "center"}} placeholder="(Color, cantidad, tipo y detalles)" />
              </label>
            </span>
          </div>
          <span className="descripcion3">Descripción del pedido</span>
        </div>
        <div className="v5">
          <div className="v6">
            <div className="v7">
              <div className="img3">
                <img style={{ height: '476px', width: '100%' }} src="../img/pedido.jpeg" alt="" />
              </div>
            </div>
          </div>
          <span className="v8">Flores</span>
        </div>
      </div>
      <div className="v9">
        <div className="v10">
          <span className="pedido3" id="pedido-en-curso">Pedido en curso</span>
        </div>
        <div className="v11">
          <span className="precio3">Precio</span>
          <span className="v12">$40.000</span>
        </div>
        <div className="v13">
          <span className="model3">Model</span>
          <div className="v14">
            <input className="btn2" type="text" name="text" placeholder="model-1..." />
            <div className="v15"></div>
          </div>
        </div>
        <div className="v16">
          <h3 className="instrucciones3">Instrucciones</h3>
          <input className="btn3" type="text" name="text" placeholder="" />
        </div>
      </div>
    </div>
  );
};

export default Orders;
