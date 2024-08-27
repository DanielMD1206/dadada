import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalogo from "./pages/Catalogo"; 
import Main from "./pages/Main";
import Evento from "./pages/Evento";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import ProductDetail from "./pages/Detalle"
import EventDetail from "./pages/DetalleEventos";
import Login from "./pages/Login";
import Register from "./pages/Register";


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

        </Routes>
      </main>
    </div>
  );
}

export default App;
