import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12 pt-[120px]">
      <div className="container mx-auto px-4">
        {/* Nuestra Historia */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4">
              Yesid comenzó como un pequeño negocio familiar en 2010, con la visión de compartir la belleza natural de
              las flores con todos. Fundada por Yesid Martinez, nuestra misión siempre ha sido ofrecer productos
              florales de la más alta calidad. A través de un arduo trabajo y una dedicación inquebrantable, hemos
              transformado nuestro pequeño negocio en una de las principales distribuidoras de flores del país.
            </p>
            <p className="text-gray-600">
              Con una combinación de pasión por las flores y un enfoque en la excelencia, hemos establecido relaciones
              duraderas con nuestros clientes y proveedores. Desde nuestros humildes comienzos hasta nuestro éxito
              actual, cada paso ha sido guiado por nuestro compromiso con la calidad y el servicio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Misión</h2>
            <p className="text-gray-600 mb-4">
              En Yesid, nuestra misión es simple pero poderosa: transformar cada momento especial con la belleza y
              elegancia de nuestras flores. Creemos en el impacto positivo que las flores pueden tener en la vida de
              las personas, y nos esforzamos por ofrecer arreglos florales que no solo sean visualmente impresionantes,
              sino que también transmitan emociones y sentimientos.
            </p>
            <p className="text-gray-600">
              Nos dedicamos a proporcionar un servicio excepcional en cada paso del camino, desde la selección de
              flores frescas hasta la entrega final. Nuestro objetivo es superar las expectativas de nuestros clientes
              y asegurarnos de que cada experiencia con Yesid sea memorable y satisfactoria.
            </p>
          </div>
        </section>

        {/* Nuestros Valores */}
        <section className="bg-white py-8 px-6 rounded-lg shadow-lg mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 mb-4">
              En Yesid, nos guiamos por una serie de valores fundamentales que reflejan nuestro compromiso con la
              excelencia y la satisfacción del cliente. Estos valores son el corazón de todo lo que hacemos:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Calidad</h3>
              <p className="text-gray-600">
                Solo trabajamos con flores frescas y de la más alta calidad, seleccionadas cuidadosamente para garantizar
                la satisfacción total de nuestros clientes.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compromiso</h3>
              <p className="text-gray-600">
                Estamos dedicados a proporcionar un servicio personalizado y atento. Cada miembro de nuestro equipo está
                comprometido a brindar la mejor experiencia posible.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovación</h3>
              <p className="text-gray-600">
                Siempre estamos buscando nuevas formas de sorprender y deleitar a nuestros clientes con arreglos
                innovadores y creativos que se adapten a las últimas tendencias y preferencias.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sostenibilidad</h3>
              <p className="text-gray-600">
                Nos esforzamos por operar de manera sostenible, eligiendo prácticas y proveedores que minimicen nuestro
                impacto ambiental y promuevan la responsabilidad ecológica.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Servicio al Cliente</h3>
              <p className="text-gray-600">
                Nuestro equipo está siempre disponible para atender cualquier consulta o necesidad. Valoramos la
                retroalimentación de nuestros clientes y buscamos continuamente mejorar nuestro servicio.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
