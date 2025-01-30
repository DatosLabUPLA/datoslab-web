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

const Slider = () => {
  const [indice, setIndice] = useState(0);

  const previo = () => {
    setIndice((prev) => (prev === 0 ? proyectos.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === proyectos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full text-center">
      <h2 className="text-4xl font-bold mb-6 mt-20">Proyectos más relevantes</h2>
      <div className="relative overflow-hidden w-full h-[300px] md:h-[500px]">
        <img
          src={proyectos[indice].imagen}
          alt={proyectos[indice].titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h3 className="text-3xl font-bold mb-2">{proyectos[indice].titulo}</h3>
            <p className="text-lg mb-4">{proyectos[indice].descripcion}</p>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition">Ver Más</button>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={previo} className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition">❮</button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={siguiente} className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition">❯</button>
      </div>
    </section>
  );
};

export default Slider;