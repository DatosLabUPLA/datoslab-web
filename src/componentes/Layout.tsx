import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar
          logoSrc="img/datos_lab.png"
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
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
