import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Carrusel = ({ intervalo = 3000 }) => {
  const { list: ciudades, loading } = useSelector((state) => state.cities);
  const [indiceActual, setIndiceActual] = useState(0);
  const [itemsPorPagina, setItemsPorPagina] = useState(4);

  useEffect(() => {
    const ajustarItemsPorPagina = () => {
      setItemsPorPagina(window.innerWidth < 800 ? 2 : 4);
    };
    ajustarItemsPorPagina();
    window.addEventListener('resize', ajustarItemsPorPagina);
    return () => window.removeEventListener('resize', ajustarItemsPorPagina);
  }, []);

  useEffect(() => {
    const intervaloID = setInterval(() => {
      setIndiceActual((prevIndice) =>
        prevIndice + itemsPorPagina >= ciudades.length ? 0 : prevIndice + itemsPorPagina
      );
    }, intervalo);
    return () => clearInterval(intervaloID);
  }, [indiceActual, intervalo, itemsPorPagina, ciudades.length]);

  const imagenesEnPantalla = ciudades.slice(indiceActual, indiceActual + itemsPorPagina);

  if (loading) return <div>Loading cities...</div>;

  return (
    <div className="carrusel flex items-center justify-center my-8">
      <button onClick={() => setIndiceActual((prev) => Math.max(prev - itemsPorPagina, 0))} className="p-2 rounded-md hover:bg-gray-400">
        <IoIosArrowBack />
      </button>
      <div className={`grid ${itemsPorPagina === 2 ? 'grid-cols-1' : 'grid-cols-2'} grid-rows-2 gap-4 w-full max-w-6xl h-96`}>
        {imagenesEnPantalla.map((ciudad, index) => (
          <div key={index} className="imagen-carrusel">
            <img src={ciudad.image} alt={ciudad.name} className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        ))}
      </div>
      <button onClick={() => setIndiceActual((prev) => (prev + itemsPorPagina >= ciudades.length ? 0 : prev + itemsPorPagina))} className="p-2 rounded-md hover:bg-gray-400">
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carrusel;