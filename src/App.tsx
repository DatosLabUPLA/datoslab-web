import React from "react";
import { Route, Routes } from "react-router-dom";
import Equipo from "./pages/Equipo";
import Proyectos from "./pages/Proyectos";
import Home from "./componentes/Home";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

const App: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar
          logoSrc="img/datos_lab.png"
          logoAlt="DatosLab"
          menuItems={["Home", "Líneas", "Publicaciones", "Descargas", "Proyectos", "Equipo", "Contacto"]}
        />
      </header>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />
        
        {/* Rutas para Equipo y Proyectos */}
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
