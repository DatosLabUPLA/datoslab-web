import React from "react";

const Publicaciones: React.FC = () => {
  return (
    <div>
      <section id="publicaciones">
        <div className="mt-40 mb-28 py-0">
          <h2 className="text-4xl font-bold text-center mb-8">Publicaciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1">
            {[
              "img/portfolio/thumbnails/research1.png",
              "img/portfolio/thumbnails/sistemadesarrollo.png",
              "img/portfolio/thumbnails/3.png",
              "img/portfolio/thumbnails/research1.png"
            ].map((src, index) => (
              <a
                key={index}
                className="portfolio-box"
                href={src}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={src}
                  alt={`Research ${index + 1}`}
                  className="p-2 w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg hover:opacity-80 transition duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publicaciones;
