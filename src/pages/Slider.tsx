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
  const visibles = 3;
  const maxIndex = proyectos.length - visibles;

  const siguiente = () => {
    setIndice(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const previo = () => {
    setIndice(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="relative w-full text-center py-16 bg-gray-50 text-black">
      <h2 className="text-4xl font-bold mb-8">Proyectos Destacados</h2>
      <div className="relative overflow-hidden">
        {/* Slider container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${(100 / visibles) * indice}%)` }}
        >
          {proyectos.map((proyecto, idx) => (
            <div
              key={idx}
              className="w-1/3 px-4 flex-shrink-0"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{proyecto.titulo}</h3>
                  <p className="text-gray-600">{proyecto.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={previo}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={siguiente}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Siguiente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores */}
        <div className="flex justify-center mt-6 space-x-2">
{Array.from({ length: maxIndex + 1 }).map((_, i) => (
  <button
    key={i}
    onClick={() => setIndice(i)}
    className={`w-3 h-3 rounded-full transition-all duration-300 ${
      i === indice ? 'bg-gray-800' : 'bg-gray-400 hover:bg-gray-600'
    }`}
    aria-label={`Slide ${i + 1}`}
  ></button>
))}
        </div>
      </div>
    </section>
  );
};

export default Slider;