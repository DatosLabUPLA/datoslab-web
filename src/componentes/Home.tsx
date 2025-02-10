// Home.tsx
import React from "react";
import Lineas from "./Lineas";
//import Publicaciones from "./Publicaciones";
import Secciones from "./Secciones";
import Descargas from "./Descargas";
import Slider from "./Slider";
import Equipocom from "./Equipocom";
import Contacto from "./Contacto";

const Home: React.FC = () => {
  return (
    <div id="home" className="p-0">
      {/* Hero */}
      <section style={{ marginTop: "80px" }}>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("/img/portfolio/img/team/equipodatoslab.jpg")`,
          }}
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
              <a
                href="#líneas"
                className="btn btn-white text-black rounded-lg"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("líneas");
                  if (target) {
                    const yOffset = -140;
                    const y =
                      target.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                COMENZAR
              </a>
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
