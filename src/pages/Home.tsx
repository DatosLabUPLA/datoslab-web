import React from "react";
import Lineas from "./Lineas";
// import Publicaciones from "./Publicaciones";
import Secciones from "./Secciones";
import Descargas from "./Descargas";
import Slider from "./Slider";
import Equipocom from "./Equipocom";
import Contacto from "./Contacto";

const Home: React.FC = () => {
  // Función para hacer scroll suave hacia un id con offset (útil para navbar fijo)
  const scrollToId = (id: string, offset = -140) => {
    const target = document.getElementById(id);
    if (target) {
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="p-0">
      {/* Hero */}
      <section style={{ marginTop: "80px" }}>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("/images/equipodatoslab.jpg")`,
          }}
          role="banner"
          aria-label="Imagen de equipo DatosLab"
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Cómo hacer simple la complejidad de los datos
              </h1>
              <p className="mb-5">
                Nuestro laboratorio encuentra patrones y valor en datos
                interrelacionados -y abundantes- a través de nuevos métodos y
                visualizaciones. Nuestra investigación se aplica a temáticas
                diversas y con orientación social.
              </p>
              <button
                className="btn btn-white text-black rounded-lg"
                aria-label="Comenzar - Ir a sección Líneas"
                onClick={() => scrollToId("líneas")}
              >
                COMENZAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones con id para scroll */}
      <section id="líneas">
        <Lineas />
      </section>

      <Secciones />

      <section id="descargas">
        <Descargas />
      </section>

      <Slider />

      <Equipocom />

      <section id="contacto">
        <Contacto />
      </section>
    </div>
  );
};

export default Home;
