import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import Main from "./pages/Main";
import Evento from "./pages/Evento";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import ProductDetail from "./pages/Detalle";
import EventDetail from "./pages/DetalleEventos";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SellerView from './pages/seller';
import Orders from './pages/orders';
import Products from './pages/prod';
import UpdateProduct from './pages/updateprod';
import DeleteProduct from './pages/deletepd';
import AddProduct from './pages/addprod';
import Couriers from './pages/domiciliary';
import UpdateDeliveryPerson from './pages/updatedomi';
import DeleteCourier from './pages/deletedom';
import Clients from './pages/crudcli';
import AddDeliveryPerson from './pages/adddomi';
import TerminsAndConditions from "./components/TerminsAndConditions";
import PolityPrivacity from "./components/PolityPrivacity";
import Admin from "./pages/Admin";
import EventoC from "./pages/EventoC"
import EventoG from "./pages/EventoG";
import EventoB from "./pages/EventoB";
import EventoF from "./pages/EventoF"
import EventoM from "./pages/EventoM";
import EventoSV from "./pages/EventoSV";
import EventoDM from "./pages/EventoDM";
import EventoH from "./pages/EventoH";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/evento" element={<Evento />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/evento/:id" element={<EventDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrate" element={<Register />} />
          <Route path="/seller" element={<SellerView />} />
          <Route path="/orders" element={<Orders />} /> 
          <Route path="/prod" element={<Products />} /> 
          <Route path="/updateprod" element={<UpdateProduct />} /> 
          <Route path="/deletepd" element={<DeleteProduct />} /> 
          <Route path="/addprod" element={<AddProduct />} /> 
          <Route path="/domiciliary" element={<Couriers />} /> 
          <Route path="/updatedomi" element={<UpdateDeliveryPerson />} />
          <Route path="/deletedom" element={<DeleteCourier />} />
          <Route path="/crudli" element={<Clients />} /> 
          <Route path="/adddomi" element={<AddDeliveryPerson />} />
          <Route path="/terminos" element={<TerminsAndConditions />} />
          <Route path="/privacy-policy" element={<PolityPrivacity />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/eventoC" element={<EventoC />} />
          <Route path="/eventoG" element={<EventoG />} />
          <Route path="/eventoB" element={<EventoB />} />
          <Route path="/eventof" element={<EventoF />} />
          <Route path="/eventoM" element={<EventoM />} />
          <Route path="/eventoSV" element={<EventoSV />} />
          <Route path="/eventoDM" element={<EventoDM />} />
          <Route path="/eventoH" element={<EventoH />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
