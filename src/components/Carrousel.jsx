import React, { useState } from "react";

const Carrusel = ({ imagenes, intervalo = 3000 }) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const itemsPorPagina = 4;

  const avanzar = () => {
    setIndiceActual((prevIndice) =>
      prevIndice + itemsPorPagina >= imagenes.length ? 0 : prevIndice + itemsPorPagina
    );
  };

  const retroceder = () => {
    setIndiceActual((prevIndice) =>
      prevIndice === 0 ? imagenes.length - itemsPorPagina : prevIndice - itemsPorPagina
    );
  };

  const imagenesEnPantalla = imagenes.slice(indiceActual, indiceActual + itemsPorPagina);

  return (
    <div className="carrusel flex items-center justify-center space-x-4">
      <button onClick={retroceder}>◀</button>
      
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-6/12 h-6/12">
        {imagenesEnPantalla.map((imagen, index) => (
          <div key={index} className="imagen-carrusel">
            <img
              src={imagen.image}
              alt={imagen.title}
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <button onClick={avanzar}>▶</button>
    </div>
  );
};

export default Carrusel;
