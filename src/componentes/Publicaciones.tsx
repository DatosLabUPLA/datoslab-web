import React, { useState } from "react";

const Publicaciones: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const publicaciones = [
    { 
      src: "img/portfolio/thumbnails/research1.png", 
      title: "RESEARCH, INNOVATION", 
      description: "Science Mapping" 
    },
    { 
      src: "img/portfolio/thumbnails/sistemadesarrollo.png", 
      title: "OPNGOV, POLITICAL", 
      description: "Participation" 
    },
    { 
      src: "img/portfolio/thumbnails/3.png", 
      title: "INCOME, GENDER", 
      description: "Inequality" 
    }
  ];

  const handleOutsideClick = (e: React.MouseEvent) => {
    // Cerrar la imagen si se hace clic fuera del contenedor de la imagen ampliada
    if ((e.target as HTMLElement).id === "imageOverlay") {
      setSelectedImage(null);
    }
  };

  return (
    <div>
      <section id="publicaciones">
        <div className="mt-40 mb-28 py-0">
          <h2 className="text-4xl font-bold text-center mb-8">Publicaciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {publicaciones.map((pub, index) => (
              <button
                key={index}
                className="relative group overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(pub.src)} // Establecer la imagen seleccionada
              >
                {/* Imagen con efecto de hover */}
                <img
                  src={pub.src}
                  alt={pub.title}
                  className="p-2 w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg transition duration-300 group-hover:brightness-110"
                />
                
                {/* Overlay con información, color naranja y texto visible solo al hacer hover */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-orange-700 group-hover:bg-opacity-80 rounded-lg flex flex-col justify-center items-center p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-bold">{pub.title}</h3>
                  <p className="text-sm">{pub.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Imagen ampliada que aparece encima */}
      {selectedImage && (
        <div
          id="imageOverlay"
          className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
          onClick={handleOutsideClick} // Detectar clic fuera para cerrar
        >
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="w-auto h-auto max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Publicaciones;


