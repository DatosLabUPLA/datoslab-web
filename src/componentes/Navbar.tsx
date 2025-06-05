import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  menuItems: string[];
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt, menuItems }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Al montar, chequeamos localStorage para saber si había quedado guardado
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Cuando darkMode cambie, agregamos o quitamos la clase "dark" y guardamos
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const rutasInternas = ["Equipo", "Proyectos"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="w-12 h-12 object-contain rounded-xl shadow-md"
          />
          <span className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
            DatosLab
          </span>
        </div>

        {/* Botón hamburguesa (solo en móviles) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menú */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center gap-4 mt-4 md:mt-0 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm font-medium items-center">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item === "Home" ? (
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 rounded-lg hover:bg-avocado-200/70 transition text-gray-800 dark:text-gray-200"
                  >
                    {item}
                  </Link>
                ) : rutasInternas.includes(item) ? (
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 rounded-lg hover:bg-avocado-200/70 transition text-gray-800 dark:text-gray-200"
                  >
                    {item}
                  </Link>
                ) : (
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth
                    offset={-100}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 rounded-lg hover:bg-avocado-200/70 transition text-gray-800 dark:text-gray-200 cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Botón de cambio de tema (light ↔ dark) 
        <div className="ml-4">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg px-4 py-2 text-sm transition"
          >
            {darkMode ? "🌙  Noche" : "☀️  Día"}
          </button>
        </div>*/}
      </nav>
    </header>
  );
};

export default Navbar;
