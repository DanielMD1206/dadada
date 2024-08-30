import { useNavigate } from 'react-router-dom';
import img1 from "../static/img/cumpleaños.jpeg";
import img2 from "../static/img/grado.jpeg";
import img3 from "../static/img/boda.jpg";
import img4 from "../static/img/funebre.jpeg";
import img5 from "../static/img/mama.jpeg";
import img6 from "../static/img/valentin.jpeg";
import img7 from "../static/img/mujer.jpeg";
import img8 from "../static/img/hombre.jpeg";

const events = [ 
  { id: 1, name: "Cumpleaños", href: "/eventoC", imageSrc: img1, imageAlt: "Imagen de cumpleaños." },
  { id: 2, name: "Grados", href: "/eventoG", imageSrc: img2, imageAlt: "Imagen de grados." },
  { id: 3, name: "Bodas", href: "/eventoB", imageSrc: img3, imageAlt: "Imagen de bodas." },
  { id: 4, name: "Funebres", href: "/eventoF", imageSrc: img4, imageAlt: "Imagen de funebres." },
  { id: 5, name: "Dia de la madre", href: "/eventoM", imageSrc: img5, imageAlt: "Imagen de dia de la madre." },
  { id: 6, name: "Dia de san valentin", href: "/eventoSV", imageSrc: img6, imageAlt: "Imagen de san valentin." },
  { id: 7, name: "Dia de la mujer", href: "/eventoDM", imageSrc: img7, imageAlt: "Imagen de dia de la mujer." },
  { id: 8, name: "Dia del hombre", href: "/eventoH", imageSrc: img8, imageAlt: "Imagen de dia del hombre." },
];

export default function Eventos() {
  const navigate = useNavigate();

  const handleViewDetails = (href) => {
    navigate(href);
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-center font-bold text-gray-900 text-3xl">
          <span className="w-[200px] h-[1px] bg-gray-900 inline-block mr-4"></span>
          Nuestros Eventos
          <span className="w-[200px] h-[1px] bg-gray-900 inline-block ml-4"></span>
        </h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 pt-[90px]">
          {events.map((event) => (
            <div key={event.id} className="group relative cursor-pointer" onClick={() => handleViewDetails(event.href)}>
              <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gray-200">
                <img
                  alt={event.imageAlt}
                  src={event.imageSrc}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{event.name}</h3>
              <button
                className="mt-4 w-full text-black bg-gray-50 justify-center hover:bg-[#FDABF0] py-2 px-4 rounded-lg transition ease-in-out duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewDetails(event.href);
                }}
              >
                Ver
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
