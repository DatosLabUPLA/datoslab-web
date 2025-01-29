import React from "react";

const Slider: React.FC = () => {
  return (
    <div>
      {/* Slider de imágenes en Tailwind */}
      <section id="proyecto" className="relative mt-20 p-0">
        <h2 className="text-4xl font-bold text-center mb-16">
          Proyectos más relevantes
        </h2>
        <div className="relative w-full flex overflow-hidden">
          {/* Contenedor del slider */}
          <div className="carousel w-full overflow-hidden relative space-x-4">
            {/* Imagen 1 */}
            <div
              id="slide1"
              className="carousel-item relative flex-shrink-0 w-full md:w-[80%] mx-auto"
            >
              <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
                alt="Proyecto 1"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white">
                <div className="max-w-md text-center">
                  <h1 className="mb-4 text-5xl font-bold">Proyecto 1</h1>
                  <p className="mb-4">Descripción breve del proyecto 1.</p>
                  <a href="src/proyectos" className="btn btn-primary">
                    Ver Más
                  </a>
                </div>
              </div>
              {/* Flechas de navegación */}
              <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Imagen 2 */}
            <div
              id="slide2"
              className="carousel-item relative flex-shrink-0 w-full md:w-[80%] mx-auto"
            >
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
                alt="Proyecto 2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white">
                <div className="max-w-md text-center">
                  <h1 className="mb-4 text-5xl font-bold">Proyecto 2</h1>
                  <p className="mb-4">Descripción breve del proyecto 2.</p>
                  <button className="btn btn-primary">Ver Más</button>
                </div>
              </div>
              {/* Flechas de navegación */}
              <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Imagen 3 */}
            <div
              id="slide3"
              className="carousel-item relative flex-shrink-0 w-full md:w-[80%] mx-auto"
            >
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
                alt="Proyecto 3"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white">
                <div className="max-w-md text-center">
                  <h1 className="mb-4 text-5xl font-bold">Proyecto 3</h1>
                  <p className="mb-4">Descripción breve del proyecto 3.</p>
                  <button className="btn btn-primary">Ver Más</button>
                </div>
              </div>
              {/* Flechas de navegación */}
              <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Imagen 4 */}
            <div
              id="slide4"
              className="carousel-item relative flex-shrink-0 w-full md:w-[80%] mx-auto"
            >
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
                alt="Proyecto 4"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white">
                <div className="max-w-md text-center">
                  <h1 className="mb-4 text-5xl font-bold">Proyecto 4</h1>
                  <p className="mb-4">Descripción breve del proyecto 4.</p>
                  <button className="btn btn-primary">Ver Más</button>
                </div>
              </div>
              {/* Flechas de navegación */}
              <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
            <a href="#equipo" className="btn bg-white text-black font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 hover:bg-white-700">
                CONTINUAR</a>
          </div>
      </section>
    </div>
    );
    };
    export default Slider;