import React, { useState } from "react";

const Publicaciones: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const publicaciones = [
    { 
      src: "img/portfolio/thumbnails/research1.png", 
      title: "The Resarch Space", 
      description: "Descripción breve de la investigación 1" 
    },
    { 
      src: "img/portfolio/thumbnails/sistemadesarrollo.png", 
      title: "Sistema de Desarrollo", 
      description: "Descripción breve del sistema de desarrollo" 
    },
    { 
      src: "img/portfolio/thumbnails/3.png", 
      title: "Product Gini Index", 
      description: "Descripción breve de la publicación 3" 
    },
    { 
      src: "img/portfolio/thumbnails/research1.png", 
      title: "The Research Space", 
      description: "Descripción breve de la investigación 2" 
    }
  ];

  return (
    <div>
      <section id="publicaciones">
        <div className="mt-40 mb-28 py-0">
          <h2 className="text-4xl font-bold text-center mb-8">Publicaciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {publicaciones.map((pub, index) => (
              <button
                key={index}
                className="relative group overflow-hidden rounded-lg"
                onClick={() => {
                  setSelectedImage(pub.src);
                  (document.getElementById("modal_publicaciones") as HTMLDialogElement)?.showModal();
                }}
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

      {/* Modal */}
      <dialog id="modal_publicaciones" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Publicación ampliada"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Publicaciones;

