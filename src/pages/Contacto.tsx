import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contacto: React.FC = () => {
  return (
    <section
      id="contacto"
      className="relative w-full bg-[var(--customOrange)] text-white py-20 px-6 overflow-hidden"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
            ¡Hablemos!
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Nos encanta debatir ideas y participar en nuevos proyectos.
            <br />
            <span className="font-medium">Recibiremos postulaciones de nuevos estudiantes y postdocs durante 2025.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1: Ubicación */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto bg-white text-[var(--customOrange)] rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-2xl font-bold mb-4">Visítanos</h3>
            <p className="text-lg mb-6 leading-relaxed">
              <span className="font-semibold">Facultad de Ingeniería, UPLA</span> <br />
              Subida Leopoldo Carvallo 270, <br />
              4to piso, Valparaíso, CHILE
            </p>
            <a
              href="https://maps.app.goo.gl/7boEWN1PptgcUaqJ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[var(--customOrange)] font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors shadow-md"
            >
              Ver en mapa
            </a>
          </div>

          {/* Tarjeta 2: Email */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto bg-white text-[var(--customOrange)] rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope />
            </div>
            <h3 className="text-2xl font-bold mb-4">Escríbenos</h3>
            <p className="text-lg mb-6 leading-relaxed">
              ¿Tienes dudas o propuestas? <br />
              Contáctanos por correo.
            </p>
            <a
              href="mailto:miguel.guevara@upla.cl"
              className="inline-block bg-white text-[var(--customOrange)] font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors shadow-md"
            >
              miguel.guevara@upla.cl
            </a>
          </div>

          {/* Tarjeta 3: Redes Sociales */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto bg-white text-[var(--customOrange)] rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaYoutube />
            </div>
            <h3 className="text-2xl font-bold mb-4">Síguenos</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Descubre nuestro contenido <br />
              en redes sociales.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.youtube.com/@datoslabupla"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--customOrange)] p-3 rounded-full hover:bg-gray-100 transition-colors shadow-md hover:scale-110 transform duration-200"
                title="YouTube"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://x.com/DatosLab_UPLA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--customOrange)] p-3 rounded-full hover:bg-gray-100 transition-colors shadow-md hover:scale-110 transform duration-200"
                title="X (Twitter)"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://github.com/DatosLabUPLA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--customOrange)] p-3 rounded-full hover:bg-gray-100 transition-colors shadow-md hover:scale-110 transform duration-200"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/datoslab/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--customOrange)] p-3 rounded-full hover:bg-gray-100 transition-colors shadow-md hover:scale-110 transform duration-200"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;