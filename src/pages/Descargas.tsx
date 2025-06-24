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
    <section
      id="descargas"
      className="w-full bg-white text-black shadow-lg"
    >
      <div className="mx-auto max-w-screen-lg p-10 md:p-16 space-y-8 text-center">
        <h2 className="text-4xl font-bold">Explora nuestras aplicaciones</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Imagen izquierda */}
          <img
            src="/images/img/logonieves.png"
            alt="Logo Nieves"
            className="w-20 h-20 md:w-44 md:h-24 object-cover rounded-lg shadow"
          />

          {/* Contenido principal */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <p className="text-black mb-4">
              Accede mediante los siguientes enlaces:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {apps.map((app, index) => (
                <a
                  key={index}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ir a ${app.label}`}
                  className="inline-block"
                >
                  <div className="px-4 py-2 border border-black rounded-full text-black text-sm font-medium hover:bg-gray-100 transition">
                    {app.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Imagen derecha */}
          <img
            src="/images/img/logouninews.png"
            alt="Logo UniNews"
            className="w-40 h-24 md:w-48 md:h-28 object-contain rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Descargas;
