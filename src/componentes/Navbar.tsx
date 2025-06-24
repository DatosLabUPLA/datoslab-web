import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  menuItems: string[];
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const rutasInternas = ["Equipo", "Proyectos"];

  // Handler común para Home desde otras rutas
  const handleHomeClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      localStorage.setItem("scrollToHome", "true");
      navigate("/");
    }
  };

  // Handler para navegación a secciones desde rutas externas
  const handleSectionClick = (section: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      // Guardamos la sección a la que queremos hacer scroll
      localStorage.setItem("scrollToSection", section.toLowerCase());
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/20 shadow-xl">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo: scroll en "/" o navigate+scroll desde otras rutas */}
        {location.pathname === "/" ? (
          <ScrollLink
            to="home"
            smooth
            offset={-100}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <LogoBlock logoSrc={logoSrc} logoAlt={logoAlt} />
          </ScrollLink>
        ) : (
          <button
            onClick={handleHomeClick}
            className="flex items-center gap-4 group cursor-pointer bg-transparent border-none p-0"
          >
            <LogoBlock logoSrc={logoSrc} logoAlt={logoAlt} />
          </button>
        )}

        {/* Botón hamburguesa (móvil) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative p-3 text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-105"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-current my-1.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
        </button>

        {/* Menú principal */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:flex md:items-center gap-6 mt-4 md:mt-0 transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-1 text-sm font-semibold items-center">
            {menuItems.map((item, index) => (
              <li key={index}>
                {/* Home */}
                {item === "Home" ? (
                  location.pathname === "/" ? (
                    <ScrollLink
                      to="home"
                      smooth
                      offset={-100}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="relative px-5 py-3 rounded-full text-gray-700 hover:text-white transition-all duration-300 group cursor-pointer overflow-hidden"
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 bg-customOrange opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center rounded-full"></div>
                      <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-10 rounded-full"></div>
                    </ScrollLink>
                  ) : (
                    <button
                      onClick={handleHomeClick}
                      className="relative px-5 py-3 rounded-full text-gray-700 hover:text-white transition-all duration-300 group bg-transparent border-none overflow-hidden"
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 bg-customOrange opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center rounded-full"></div>
                      <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-10 rounded-full"></div>
                    </button>
                  )
                ) : rutasInternas.includes(item) ? (
                  /* Rutas internas normales */
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative px-5 py-3 rounded-full text-gray-700 hover:text-white transition-all duration-300 group overflow-hidden"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-customOrange opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center rounded-full"></div>
                    <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-10 rounded-full"></div>
                  </Link>
                ) : (
                  /* Scroll interno o navegación desde rutas externas */
                  location.pathname === "/" ? (
                    <ScrollLink
                      to={item.toLowerCase()}
                      smooth
                      offset={-100}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="relative px-5 py-3 rounded-full text-gray-700 hover:text-white transition-all duration-300 group cursor-pointer overflow-hidden"
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 bg-customOrange opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center rounded-full"></div>
                      <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-10 rounded-full"></div>
                    </ScrollLink>
                  ) : (
                    <button
                      onClick={() => handleSectionClick(item.toLowerCase())}
                      className="relative px-5 py-3 rounded-full text-gray-700 hover:text-white transition-all duration-300 group bg-transparent border-none overflow-hidden"
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 bg-customOrange opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center rounded-full"></div>
                      <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-10 rounded-full"></div>
                    </button>
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

// Pequeño componente para el bloque del logo
const LogoBlock = ({ logoSrc, logoAlt }: { logoSrc: string; logoAlt: string }) => (
  <>
    <div className="relative">
      <img
        src={logoSrc}
        alt={logoAlt}
        className="w-14 h-14 object-contain rounded-2xl shadow-lg border-2 border-white group-hover:scale-105 transition-all duration-300"
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent tracking-tight">
        DatosLab
      </span>
      <span className="text-xs text-gray-500 font-medium">
        Data Science
      </span>
    </div>
  </>
);

export default Navbar;