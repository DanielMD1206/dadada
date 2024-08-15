import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBagShopping, faBars, faGifts, faPhone, faUser, faUserGroup, faXmark } from '@fortawesome/free-solid-svg-icons';


const navigation = [
  { name: <a href="#" className="text-sm font-semibold leading-6 text-[#3C474D] hover:text-[#000] transition ease delay-150 mt-2 tooltip" data-tooltip="Catalogo"><FontAwesomeIcon icon={faBagShopping} /></a>, href: '#' },
  { name: <a href="#" className="text-sm font-semibold leading-6 text-[#3C474D] hover:text-[#000] transition ease delay-150 tooltip" data-tooltip="Eventos"><FontAwesomeIcon icon={faGifts} /></a>, href: '#' },
  { name: <a href="#" className="text-sm font-semibold leading-6 text-[#3C474D] hover:text-[#000] transition ease delay-150 tooltip" data-tooltip="Sobre_Nosotros"><FontAwesomeIcon icon={faUserGroup} /></a>, href: '#' },
  { name: <a href="#" className="text-sm font-semibold leading-6 text-[#3C474D] hover:text-[#000] transition ease delay-150 tooltip" data-tooltip="Contactenos"><FontAwesomeIcon icon={faPhone} /></a>, href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 bg-[#fff]">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                src="../img/Captura_de_pantalla_2024-08-15_075316-removebg-preview.png" 
                className="h-8 w-auto"
              />
            </a>
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
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-[#3C474D] hover:text-[#000] transition ease delay-150">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex text-[#3C474D] lg:flex-1 lg:justify-end hover:text-[#000] transition ease delay-150">
            <a href="#" className="text-sm font-semibold leading-6 tooltip" data-tooltip="Registrate">
              <FontAwesomeIcon icon={faUser} /><span aria-hidden="true"> <FontAwesomeIcon icon={faArrowRight} /></span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
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
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Portafolio
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Eventos
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sobre Nosotros
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contactenos
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Registrate
                  </a>
                </div>

              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}