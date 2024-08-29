import { useNavigate } from 'react-router-dom';
import img from "../static/img/pexels-iriser-1408221 (2).jpg";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc: img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "#",
    imageSrc: img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "Basic Tee",
    href: "#",
    imageSrc: img,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

export default function Product() {
  const navigate = useNavigate();
 
  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="products pt-[6%] bg-gray-50 ">
      <h1 className="text-center font-bold text-gray-900 text-3xl">
        <span className="span w-[200px] h-[1px] bg-gray-900 inline-block mr-4 "></span>
            Nuestros Productos
        <span className="span w-[200px] h-[1px] bg-gray-900 inline-block ml-4"></span>
      </h1>
      <div className="bg-gray-50 ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onClick={() => handleViewDetails(product.id)}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <div className="pt-[5px]">
                  <button
                    className="w-full bg-gray-50  text-black py-2 px-4 rounded transform hover:bg-[#FDABF0] transition ease-in-out duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(product.id);
                    }}
                  >
                    Ver
                  </button>
                </div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
