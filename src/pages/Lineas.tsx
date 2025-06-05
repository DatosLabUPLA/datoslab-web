import React from "react";

const Lineas: React.FC = () => {
  return (
    <section id="líneas" className="w-full py-16 text-center bg-gradient-to-r from-white to-gray-100">
      <div className="w-full px-4 space-y-16 mb-14">
        <h2 className="text-4xl font-bold mb-8">Líneas de Investigación</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
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
              className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-[48%] md:w-[22%] text-center"
            >
              <img
                src={item.iconSrc}
                alt={`Icono ${item.title}`}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineas;
