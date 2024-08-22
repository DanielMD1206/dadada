// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalogo from "./pages/Catalogo"; // Asegúrate de que la importación sea correcta
import Main from "./pages/Main";
import Evento from "./pages/Evento";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/evento" element={<Evento />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
