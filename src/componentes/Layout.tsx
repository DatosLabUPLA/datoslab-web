import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
      <main className="pt-[90px] px-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
