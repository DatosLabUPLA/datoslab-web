import React from "react";
import Inicio from "./Inicio";
import Lineas from "./Lineas";
import Publicaciones from "./Publicaciones";
import Secciones from "./Secciones";
import Descargas from "./Descargas";
import Slider from "./Slider";
import Equipocom from "./Equipocom";
import Contacto from "./Contacto";

const Home: React.FC = () => {
  return (
    <div className="p-0">
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
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
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

      {/* Componentes */}
      <Inicio />
      <Lineas />
      <Publicaciones />
      <Secciones />
      <Descargas />
      <Slider />
      <Equipocom />
      <Contacto />
    </div>
  );
};

export default Home;

