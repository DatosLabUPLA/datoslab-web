import React from "react";
import Inicio from "./Inicio.js";
import Lineas from "./Lineas.js";
import Publicaciones from "./Publicaciones.js";
import Secciones from "./Secciones.js";
import Descargas from "./Descargas.js";
import Slider from "./Slider.js";
import Equipocom from "./Equipocom.js";
import Contacto from "./Contacto.js";

const Home: React.FC = () => {
  return (
    <div id="home" className="p-0">
      {/* Hero */}
      <section style={{ marginTop: "80px" }}>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <a
                href="#inicio"
                className="btn btn-white text-black rounded-lg"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("inicio");
                  if (target) {
                    const yOffset = -140;
                    const y =
                      target.getBoundingClientRect().top + window.pageYOffset + yOffset;
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

      {/* Secciones con id para scroll (solamente las que se usan en el menú) */}
      <section id="inicio">
        <Inicio />
      </section>
      <section id="líneas">
        <Lineas />
      </section>
      <section id="publicaciones">
        <Publicaciones />
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
