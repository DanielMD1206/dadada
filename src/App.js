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
import HeaderA from "./components/HeaderA";
import AdminD from "./components/AdminD";
import Admin from "./components/Admin";
import AdminProductsView from './pages/ProductA';
import UpdateProductPage from './pages/ProductM';
import DeactivateProduct from './pages/ProductD';
import DomiciliariosView from "./pages/DomiciliarioA";
import UpdateDomiciliario from "./pages/DomiciliarioM";
import DeactivateDomiciliario from "./pages/DomiciliarioD";
import CustomerList from "./pages/UsersA";
import UpdateUserPage from "./pages/UserM";
import DeactivateCustomer from "./pages/UserD";
import VendedoresA from "./pages/VendedorA";
import HeaderV from "./components/HeaderV";
import VVendedorV from "./components/VVendedorV";
import Vender from "./components/Venderrrr";
import VendedorPedidos from "./pages/VendedorP";

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
          <Route
            path="/admin/*"
            element={<AdminLayout />}
          />
          <Route
            path="/vendedor/*"
            element={<VendedorLayout />}
          />
        </Routes>
      </main>
    </div>
  );
}

const AdminLayout = () => (
  <>
    <HeaderA />
    <Routes>
      <Route path="products" element={<AdminProductsView />} />
      <Route path="products/update/:productId" element={<UpdateProductPage />} />
      <Route path="products/deactivate/:productId" element={<DeactivateProduct />} />
      <Route path="domiciliarios" element={<DomiciliariosView />} />
      <Route path="domiciliarios/update/:domiciliarioId" element={<UpdateDomiciliario />} />
      <Route path="domiciliarios/deactivate/:domiciliarioId" element={<DeactivateDomiciliario />} />
      <Route path="usuarios" element={<CustomerList />} />
      <Route path="users/update/:userId" element={<UpdateUserPage />} />
      <Route path="users/deactivate/:userId" element={<DeactivateCustomer />} />
      <Route path="*" element={<Admin />} />
    </Routes>
    <AdminD />
  </>
);

const VendedorLayout = () => (
  <>
    <HeaderV />
    <Routes>
      <Route path="pedidos" element={<VendedorPedidos />} />
      <Route path="productos" element={<VendedoresA />} />
    </Routes>
    <Vender />
    <VVendedorV />
  </>
);

export default App;
