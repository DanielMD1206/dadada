import { useNavigate } from 'react-router-dom';
import img from "../static/img/unnamed (5).jpg";
import img1 from "../static/img/unnamed (3).jpg"
import img2 from "../static/img/unnamed (4).jpg"
import img3 from "../static/img/unnamed (6).jpg"
import img4 from "../static/img/unnamed (9).jpg"
import img5 from "../static/img/unnamed (11).jpg"

const events = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "/evento/1",
    imageSrc: img,
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Earthen Bottle",
    href: "/evento/1",
    imageSrc: img1,
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 3,
    name: "Earthen Bottle",
    href: "/evento/1",
    imageSrc: img2,
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 4,
    name: "Earthen Bottle",
    href: "/evento/1",
    price: "$48",
    imageSrc: img3,
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 5,
    name: "Earthen Bottle",
    href: "/evento/1",
    price: "$48",
    imageSrc: img4  ,
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Earthen Bottle",
    href: "/evento/1",
    imageSrc: img5,
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
];

export default function Eventos() {
  const navigate = useNavigate();
  
  const handleViewDetails = (id) => {
    navigate(`/evento/${id}`);
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-center font-bold text-gray-900 text-3xl">
          <span className="span w-[200px] h-[1px] bg-gray-900 inline-block mr-4"></span>
          Nuestros Eventos
          <span className="span w-[200px] h-[1px] bg-gray-900 inline-block ml-4"></span>
        </h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 pt-[90px]">
          {events.map((event) => (
            <div key={event.id} className="group relative" onClick={() => handleViewDetails(event.id)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={event.imageAlt}
                  src={event.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{event.name}</h3>
              <button
                className="mt-4 w-full text-black bg-gray-50 justify-center hover:bg-[#FDABF0] py-2 px-4 rounded-lg transition ease-in-out duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewDetails(event.id);
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
