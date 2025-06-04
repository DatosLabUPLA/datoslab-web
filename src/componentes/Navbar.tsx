import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  menuItems: string[];
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt, menuItems }) => {
  const [theme, setTheme] = useState("default");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const rutasInternas = ["Equipo", "Proyectos"];

  return (
    <section className="fixed top-0 left-0 right-0 z-50">
      <nav className="navbar bg-base-100/80 backdrop-blur-md shadow-md p-4 justify-between items-center">
        {/* Logo + título */}
        <div className="flex items-center space-x-4">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="w-[70px] h-[70px] object-contain"
          />
          <a href="#" className="text-xl font-bold text-current select-none">
            DatosLab
          </a>
        </div>

        {/* Botón hamburguesa (mobile) */}
        <div className="flex-none md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost text-3xl leading-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

{/* Menú principal */}
<div
  className={`flex-none ${
    isMenuOpen ? "block" : "hidden"
  } md:flex md:items-center`}
>
  <ul
    className={`menu menu-horizontal flex flex-row gap-2 items-center px-2 md:p-0 ${
      isMenuOpen
        ? "absolute bg-base-100 shadow-lg mt-2 rounded-lg z-50 top-full right-4 md:static md:shadow-none md:bg-transparent"
        : ""
    }`}
  >
    {menuItems.map((item, index) => (
      <li key={index}>
        {item === "Home" ? (
          <Link
            to="/"
            className="menu-link px-4 py-2 hover:bg-avocado-200 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </Link>
        ) : rutasInternas.includes(item) ? (
          <Link
            to={`/${item.toLowerCase()}`}
            className="menu-link px-4 py-2 hover:bg-avocado-200 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </Link>
        ) : (
          <ScrollLink
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="menu-link px-4 py-2 cursor-pointer hover:bg-avocado-200 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </ScrollLink>
        )}
      </li>
    ))}
  </ul>
</div>

        {/* Menú de temas */}
        <div className="relative ml-4">
          <button
            className="btn btn-sm btn-outline flex items-center gap-1"
            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
            aria-haspopup="true"
            aria-expanded={isThemeMenuOpen}
          >
            Temas
            <svg
              width="12px"
              height="12px"
              className={`inline-block h-3 w-3 fill-current opacity-60 ml-1 transition-transform ${
                isThemeMenuOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </button>

          {isThemeMenuOpen && (
            <ul className="absolute right-0 mt-2 bg-base-300 rounded-lg z-50 w-40 p-2 shadow-lg select-none">
              {["default", "light", "night", "retro", "aqua"].map((themeOption) => (
                <li key={themeOption} className="mb-1 last:mb-0">
                  <label className="cursor-pointer flex items-center gap-2 px-2 py-1 rounded hover:bg-avocado-200">
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller"
                      aria-label={themeOption}
                      value={themeOption}
                      onChange={(e) => setTheme(e.target.value)}
                      checked={theme === themeOption}
                    />
                    <span className="text-sm capitalize">{themeOption}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
