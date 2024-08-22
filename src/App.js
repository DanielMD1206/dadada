// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Catalogo from './pages/Catalogo'; // Asegúrate de que la importación sea correcta
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalogo" element={<Catalogo />} />
          {/* Agrega más rutas aquí si es necesario */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
