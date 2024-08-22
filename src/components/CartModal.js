import React from "react";

function CartModal({ isOpen, toggleCart }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50">
          <div className="w-1/2 h-full bg-white p-6 shadow-lg">
            <button onClick={toggleCart} className="text-red-500">
              Cerrar
            </button>
            <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
            {/* Aquí va el contenido del carrito */}
          </div>
        </div>
      )}
    </>
  );
}

export default CartModal;
