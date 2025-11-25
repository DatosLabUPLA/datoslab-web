import React from "react";

const SobreNosotros: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--customOrange)] mb-4">
            Nosotros
          </h2>
          <div className="w-24 h-1 bg-[var(--customOrange)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 text-lg leading-relaxed text-gray-600 text-justify">
            <p>
              El Laboratorio DatosLab, creado en 2018, desarrolla investigación multidisciplinaria aplicando ciencia de datos a problemáticas sociales, con enfoque de género y trabajo colaborativo entre ingeniería y ciencias sociales. Destaca en análisis de datos abiertos, Big Data, machine learning, redes complejas y cienciometría, con proyectos como Uninews, Memorial, el Observatorio Satelital de Nieves, Lixandria y la API RIPA.
            </p>
            <p>
              Actualmente ejecuta dos proyectos adjudicados: una plataforma de metadatos científicos para la colaboración en I+D+i en el contexto de un FONDEF con dos productos principales, una API y una plataforma para métricas de equipos de investigadores y en el desarrollo de la plataforma para la investigación en el contexto de un Ciencia Abierta adjudicado por la universidad.
            </p>
            <p>
              El laboratorio también impulsa iniciativas de impacto social, como la Moneda Social VALPO y el Banco de Tiempo, y ha presentado en ponencias sobre brechas de género para el Congreso Nacional de CTI con Enfoque de Género.
            </p>
          </div>

          {/* Imagen */}
          <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl group flex items-center justify-center bg-white border border-gray-100">
            <img
              src="/images/img/datoslab_url_logo.png"
              alt="Logo DatosLab"
              className="w-full h-full object-contain p-8 transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay opcional para estilo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
