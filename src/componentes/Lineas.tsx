import React from "react";

const Lineas: React.FC = () => {
  return (
    <div>
      {/* Líneas de Investigación */}
      <section id="líneas" className="bg-customOrange p-16 text-center bg-gradient-to-r my-40">
        <div className="w-full px-4 mt-8 space-y-16 mb-14">
          <h2 className="text-white text-4xl font-bold text-center mb-8">Líneas de Investigación</h2>
          <div className="flex flex-wrap justify-between gap-5">
            {[
              {
                title: "Open Data",
                description:
                  "Potenciamos la participación ciudadana a través del uso de datos abiertos y de nuevas aplicaciones",
                iconSrc: "img/iconos/icono1.png",
              },
              {
                title: "Data Analytics",
                description:
                  "Buscamos patrones significativos en los datos a través de algoritmos computacionales y modelos estadísticos",
                iconSrc: "img/iconos/icono2.png",
              },
              {
                title: "Networks",
                description:
                  "Creamos y utilizamos redes complejas basadas en interacciones sociales o información de producción",
                iconSrc: "img/iconos/icono3.png",
              },
              {
                title: "Data Visualization",
                description:
                  "Creamos y aplicamos las mejores técnicas de visualización de datos de forma estática o interactiva",
                iconSrc: "img/iconos/icono4.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-5 text-center w-full sm:w-[48%] md:w-[23%]"
              >
                <img
                  src={item.iconSrc}
                  alt={`Icono ${item.title}`}
                  className="w-16 h-16 mx-auto mb-3"
                />
                <h3 className="text-2xl font-bold text-black-500">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lineas;
