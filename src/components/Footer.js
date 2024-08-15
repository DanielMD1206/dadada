import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDay,
  faEnvelope,
  faPhone,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Nuestras<span className="text-gray-400"> Redes</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-700 hover:text-[#000] cursor-pointer transition ease delay-150"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-gray-700 hover:text-[#000] cursor-pointer transition ease delay-150"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-gray-700 hover:text-[#000] cursor-pointer transition ease delay-150"
              />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Contactenos</p>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-[#000] cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
              <FontAwesomeIcon icon={faPhone} /> +57 3193239281
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-[#000] cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
              <FontAwesomeIcon icon={faEnvelope} /> floresyesid@gmail.com
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-[#000] cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
              <FontAwesomeIcon icon={faCalendarDay} /> lunes-sabado
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Flores</p>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-[#000] cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
              Tropicales
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-[#000] cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
              Coloridas
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-[#000] cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
              Invernales
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-[#000] cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
              Tropicales
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-[#000] cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
              Decorativas
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Somos su mejor opción
            </p>
            <li className="text-gray-700 text-md pb-2 font-semibold">
              Si está pensando enviar regalos, Flores Colombia es su mejor
              elección. <br /> Nuestras Floristerías ofrecen regalos, arreglos
              florales, <br /> cajas de rosas y otros tipos de flores que son
              entregados a <br /> domicilio en fechas tan especiales como el día
              del amor y la amistad, <br /> día de la mujer, día de la madre,
              cumpleaños, condolencias, entre otros.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-700 font-semibold">
          © 2023-2024 Todos los derechos reservados | Construido con ❤ por{" "}
          <span className="hover:text-[#000] font-semibold cursor-pointer transition duration-300 ease-in-out">
            Politica de Privacidad{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
