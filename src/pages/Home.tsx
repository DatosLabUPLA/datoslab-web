import React from "react";
import Lineas from "./Lineas";
import Secciones from "./Secciones";
import Descargas from "./Descargas";
import Slider from "./Slider";
import Equipocom from "./Equipocom";
import Contacto from "./Contacto";

const Home: React.FC = () => {
  const scrollToId = (id: string, offset = -140) => {
    const target = document.getElementById(id);
    if (target) {
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="w-full">
      {/* Hero */}
      <section className="mt-0 w-full">
        <div
          className="hero min-h-screen w-full"
          style={{
            backgroundImage: `url("/images/equipodatoslab.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="banner"
          aria-label="Imagen de equipo DatosLab"
        >
          <div className="hero-overlay bg-black bg-opacity-50"></div>
          <div className="hero-content flex flex-col items-center justify-center text-center text-neutral-content px-6">
            <h1 className="mt-75 mb-6 text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
              Cómo hacer simple la complejidad de los datos
            </h1>
            <p className="mb-8 max-w-3xl text-lg md:text-xl drop-shadow-sm">
              Nuestro laboratorio encuentra patrones y valor en datos interrelacionados —y abundantes— a través de nuevos métodos y visualizaciones. Nuestra investigación se aplica a temáticas diversas y con orientación social.
            </p>
            <button
              className="btn bg-white text-black hover:bg-gray-200 rounded-lg px-6 py-2 font-semibold"
              aria-label="Comenzar - Ir a sección Líneas"
              onClick={() => scrollToId("líneas")}
            >
              COMENZAR
            </button>
          </div>
        </div>
      </section>

      {/* Secciones con ancho completo */}
      <section id="líneas" className="w-full">
        <Lineas />
      </section>

      <section className="w-full">
        <Secciones />
      </section>

      <section id="descargas" className="w-full">
        <Descargas />
      </section>

      <section className="w-full">
        <Slider />
      </section>

      <section className="w-full">
        <Equipocom />
      </section>

      <section id="contacto" className="w-full">
        <Contacto />
      </section>
    </div>
  );
};

export default Home;
