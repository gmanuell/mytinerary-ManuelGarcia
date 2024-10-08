import React, { useState, useEffect } from "react";

const Carrusel = ({ imagenes, intervalo = 3000 }) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const itemsPorPagina = 4;

  // Función para avanzar en el carrusel
  const avanzar = () => {
    setIndiceActual((prevIndice) =>
      prevIndice + itemsPorPagina >= imagenes.length ? 0 : prevIndice + itemsPorPagina
    );
  };

  // Función para retroceder en el carrusel
  const retroceder = () => {
    setIndiceActual((prevIndice) =>
      prevIndice === 0 ? imagenes.length - itemsPorPagina : prevIndice - itemsPorPagina
    );
  };

  // Movimiento automático del carrusel
  useEffect(() => {
    const intervaloID = setInterval(avanzar, intervalo);
    return () => clearInterval(intervaloID); // Limpia el intervalo al desmontar el componente
  }, [indiceActual, intervalo]);

  // Obtener las imágenes que se muestran actualmente
  const imagenesEnPantalla = imagenes.slice(indiceActual, indiceActual + itemsPorPagina);

  // Si la última página tiene menos de 4 imágenes, llenamos el espacio restante con celdas vacías
  const imagenesRellenadas = [...imagenesEnPantalla];
  while (imagenesRellenadas.length < itemsPorPagina) {
    imagenesRellenadas.push(null); // Agrega un elemento nulo como marcador de espacio vacío
  }

  return (
    <div className="carrusel flex items-center justify-center space-x-4">
      {/* Botón para retroceder */}
      <button onClick={retroceder} className="bg-gray-200 p-2 rounded-md hover:bg-gray-400">
        ◀
      </button>

      {/* Contenedor de imágenes */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-6/12 h-6/12">
        {imagenesRellenadas.map((imagen, index) => (
          <div key={index} className="imagen-carrusel">
            {imagen ? (
              <img
                src={imagen.image}
                alt={imagen.title}
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-transparent"></div> // Espacio vacío si no hay imagen
            )}
          </div>
        ))}
      </div>

      {/* Botón para avanzar */}
      <button onClick={avanzar} className="bg-gray-200 p-2 rounded-md hover:bg-gray-400">
        ▶
      </button>
    </div>
  );
};

export default Carrusel;
