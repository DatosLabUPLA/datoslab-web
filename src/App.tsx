import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom"; // Importa Link de react-router-dom
import Equipo from "./pages/Equipo";
import Proyectos from "./pages/Proyectos";
import Home from "./componentes/Home";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <header>
        <Navbar
          logoSrc="img/datos_lab.png"
          logoAlt="DatosLab"
          menuItems={["Líneas", "Publicaciones", "Descargas", "Proyectos", "Equipo", "Contacto"]}
        />
      </header>

      <Routes>
        {/* Página principal, que muestra Home con sus componentes */}
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

