import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-[120px] ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Contáctenos</h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          En Yesid, valoramos tu opinión y estamos aquí para ayudarte. Si tienes alguna pregunta, inquietud o simplemente deseas compartir tus pensamientos con nosotros, no dudes en ponerte en contacto. Estamos comprometidos a brindarte la mejor atención posible.
        </p>

        <div className="mt-12 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
          <p className="text-lg text-gray-700 mb-6">
            A continuación, encontrarás nuestras principales vías de contacto. No dudes en comunicarte con nosotros a través del canal que prefieras. Estamos aquí para resolver tus dudas y atender tus necesidades.
          </p>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dirección</h3>
            <p className="text-lg text-gray-700">
              Calle Falsa 123, Bogota , Colombia
            </p>
            <p className="text-lg text-gray-700">
              Nuestro centro de atención está ubicado en el corazón de la ciudad, cerca de diversos puntos de interés. Si planeas visitarnos, te recomendamos que te pongas en contacto con nosotros primero para coordinar tu visita.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Teléfono</h3>
            <p className="text-lg text-gray-700">
              +57 3193239281
            </p>
            <p className="text-lg text-gray-700">
              Llámanos durante nuestro horario laboral para consultas urgentes o asistencia inmediata. Nuestro equipo está disponible para responder tus llamadas y proporcionarte la ayuda que necesites.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Correo Electrónico</h3>
            <p className="text-lg text-gray-700">
              floresyesid@gmail.com
            </p>
            <p className="text-lg text-gray-700">
              Para consultas generales, sugerencias o cualquier otra comunicación, envíanos un correo electrónico. Nos comprometemos a responder a todos los mensajes en un plazo de 24 a 48 horas.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Horario de Atención</h3>
            <p className="text-lg text-gray-700">
              lunes-sabado : 9:00 AM - 6:00 PM
            </p>
            <p className="text-lg text-gray-700">
              Estamos disponibles durante el horario laboral para asistirte. Si necesitas contactarnos fuera de este horario, por favor, utiliza nuestro formulario de contacto o envía un correo electrónico, y te responderemos a la mayor brevedad posible.
            </p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
