import React from "react";

const Descargas: React.FC = () => {
  return (
    <div>
      {/* Descargas */}
      <section id="descargas" className="bg-black bg-opacity-70 p-10 md:p-16 text-center bg-gradient-to-r shadow-lg my-0 w-full">
        <div className="mx-auto p-5 md:p-5 space-y-16">
          <h2 className="text-white text-4xl font-bold mt-8 mb-5">
            Explora nuestras aplicaciones.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            {/* Imagen izquierda */}
            <img
              src="/img/logonieves.png"
              alt="nieves"
              className="w-20 h-20 md:w-44 md:h-24 object-cover rounded-lg"
            />

            {[{ description: "Acceda mediante los siguientes enlaces", badges: [
            <a href="https://observatorionieves.cl/" target="_blank" rel="noopener noreferrer">
              <div className="badge badge-outline">Observatorio Nieves</div>
            </a>,
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="badge badge-outline">Memorial</div>
              </a>,
            <a href="https://uninews.datoslab.cl/" target="_blank" rel="noopener noreferrer">
              <div className="badge badge-outline">UniNews</div>
            </a>,
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="badge badge-outline">Programas presidenciales</div>
              </a>
            ]}].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-5 text-center w-full md:w-1/3">
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="badge-container">
                  {item.badges.map((badge, badgeIndex) => (
                    <div key={badgeIndex} className="inline-block m-1">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Imagen derecha */}
            <img
            src="/img/logouninews.png"
            alt="uninews"
            className="w-40 h-30 md:w-30 md:h-30 object-contain rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Descargas;
