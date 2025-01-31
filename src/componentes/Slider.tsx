import React, { useState } from "react";

const proyectos = [
  {
    titulo: "Proyecto 1",
    descripcion: "Descripción breve del proyecto 1.",
    imagen: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  },
  {
    titulo: "Proyecto 2",
    descripcion: "Descripción breve del proyecto 2.",
    imagen: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  },
  {
    titulo: "Proyecto 3",
    descripcion: "Descripción breve del proyecto 3.",
    imagen: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  },
  {
    titulo: "Proyecto 4",
    descripcion: "Descripción breve del proyecto 4.",
    imagen: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  },
];

const Slider: React.FC = () => {
  const [indice, setIndice] = useState(0);

  // Función para avanzar al siguiente grupo de 3 proyectos
  const siguiente = () => {
    setIndice((prev) => (prev === proyectos.length - 3 ? 0 : prev + 1));
  };

  // Función para retroceder al grupo anterior de 3 proyectos
  const previo = () => {
    setIndice((prev) => (prev === 0 ? proyectos.length - 3 : prev - 1));
  };

  return (
    <section className="relative w-full text-center">
      <h2 className="text-4xl font-bold mb-6 mt-20">Proyectos más relevantes</h2>
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(100 / 3) * indice}%)` }}
        >
          {/* Renderizamos solo 3 proyectos a la vez */}
          {proyectos.slice(indice, indice + 3).map((proyecto, index) => (
            <div key={index} className="w-full sm:w-1/3 px-2">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{proyecto.titulo}</h3>
                  <p className="text-gray-600">{proyecto.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={previo}
          className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          ❮
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={siguiente}
          className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Slider;
