import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBagShopping,
  faBars,
  faGifts,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderV() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-[#FFDCF9]">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                src="../img/Logo copy.png"
                className="h-12 w-auto"
                alt="Company Logo"
              />
            </Link>
            <p className="pt-[11px] pl-2 font-semibold">
              Distribuidora de Flores Yesid
            </p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/domiciliary"
              className="text-sm font-semibold leading-6 text-[#3C474D] hover:text-[#000] transition ease delay-150"
            >
              <FontAwesomeIcon icon={faBagShopping} />
              <span className="ml-2">Domiciliario</span>
            </Link>
            <Link
              to="/crudli"
              className="text-sm font-semibold leading-6 text-[#3C474D] hover:text-[#000] transition ease delay-150"
            >
              <FontAwesomeIcon icon={faGifts} />
              <span className="ml-2">Cliente</span>
            </Link>
          </div>
          <div className="hidden lg:flex text-[#3C474D] lg:flex-1 lg:justify-end hover:text-[#000] transition ease delay-150">
            <Link
              to="/"
              className="text-sm font-semibold leading-6 tooltip"
              data-tooltip="Salir"
            >
              <FontAwesomeIcon icon={faUser} />
              <span aria-hidden="true">
                {" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Company Logo"
                  src="../img/Captura_de_pantalla_2024-08-15_075316-removebg-preview.png"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="" // Reemplaza `123` con el ID real del pedido
                    className="text-sm font-semibold leading-6 text-[#3C474D] hover:text-[#000] transition ease delay-150"
                  >
                    <FontAwesomeIcon icon={faBagShopping} />
                    <span className="ml-2">Domiciliario</span>
                  </Link>

                  <Link
                    to=""
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <FontAwesomeIcon icon={faGifts} />
                    <span className="ml-2">Clientes</span>
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
