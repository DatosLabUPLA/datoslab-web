import React from "react";

const Descargas: React.FC = () => {
  const apps = [
    {
      href: "https://observatorionieves.cl/",
      label: "Observatorio Nieves",
    },
    {
      href: "#",
      label: "Memorial",
    },
    {
      href: "https://uninews.datoslab.cl/",
      label: "UniNews",
    },
    {
      href: "#",
      label: "Programas presidenciales",
    },
  ];

  return (
    <div>
      {/* Descargas */}
      <section
        id="descargas"
        className="bg-black bg-opacity-70 p-10 md:p-16 text-center bg-gradient-to-r shadow-lg w-full"
      >
        <div className="mx-auto p-5 space-y-16">
          <h2 className="text-white text-4xl font-bold mt-8 mb-5">
            Explora nuestras aplicaciones.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-6 w-full">
            {/* Imagen izquierda */}
            <img
              src="/img/logonieves.png"
              alt="Logo Nieves"
              className="w-20 h-20 md:w-44 md:h-24 object-cover rounded-lg"
            />

            {/* Contenido principal */}
            <div className="bg-white rounded-lg shadow-lg p-5 text-center w-full md:w-1/3">
              <p className="text-gray-600 mb-3">
                Acceda mediante los siguientes enlaces:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {apps.map((app, index) => (
                  <a
                    key={index}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ir a ${app.label}`}
                  >
                    <div className="badge badge-outline">{app.label}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Imagen derecha */}
            <img
              src="/img/logouninews.png"
              alt="Logo UniNews"
              className="w-40 h-24 md:w-48 md:h-28 object-contain rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Descargas;
