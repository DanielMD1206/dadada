import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const EventsHeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center img">
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold mb-4">Nuestros Eventos</h1>
        <p className="text-white text-lg mb-6 text-center max-w-2xl">
          Organiza y participa en eventos florales que dejarán una impresión duradera.
        </p>
        <a href="#eventos" className="text-white">
          <FontAwesomeIcon icon={faChevronDown} className="text-3xl animate-bounce" />
        </a>
      </div> 
    </div>
  );
};

export default EventsHeroSection;
