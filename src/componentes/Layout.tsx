import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BotonArriba from "./BotonArriba";

const Layout: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar
          logoSrc="images/img/datos_lab.png"
          logoAlt="DatosLab"
          menuItems={[
            "Home",
            "Líneas",
            "Descargas",
            "Proyectos",
            "Equipo",
            "Contacto",
          ]}
        />
      </header>

      {/* Aquí el padding para que el contenido no quede debajo del navbar */}
      <main className="pt-[0px] px-0">
        <Outlet />
      </main>

      <Footer />
      <BotonArriba />
    </div>
  );
};

export default Layout;
