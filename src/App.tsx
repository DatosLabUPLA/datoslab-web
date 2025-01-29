import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Equipo from "./pages/Equipo";
import Home from "./componentes/Home";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const handleEquipoClick = () => {
    window.open("/equipo", "_blank");
  };

  return (
    <div>
      <header>
        <Navbar
          logoSrc="img/datos_lab.png"
          logoAlt="DatosLab"
          menuItems={["Líneas", "Publicaciones", "Descargas", "Proyectos", "Equipo", "Contacto"]}
          onEquipoClick={handleEquipoClick}
        />
      </header>

      <Routes>
        {/* Página principal, que muestra Home con sus componentes */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta para el equipo */}
        <Route path="/equipo" element={<Equipo />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
