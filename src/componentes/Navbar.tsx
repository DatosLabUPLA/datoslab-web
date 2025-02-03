import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  menuItems: string[];
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt, menuItems }) => {
  const [theme, setTheme] = useState("default");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <section className="z-50 fixed w-full navbar-right" style={{ top: 0, left: 0, right: 0 }}>
      <nav className="navbar bg-gradient-to-r justify-between items-center bg-base-100 p-4">
        <div className="flex items-center space-x-4">
          <img
            src={logoSrc}
            alt={logoAlt}
            style={{ maxWidth: "70px", maxHeight: "70px" }}
            className="img-fluid"
          />
          <a href="#" className="text-xl font-bold text-current">
            DatosLab
          </a>
        </div>

        <div className="flex-none md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-ghost">
            ☰
          </button>
        </div>

        <div className={`flex-none ${isMenuOpen ? "block" : "hidden"} md:flex`}>
          <ul
            className={`menu menu-horizontal px-2 space-x-2 ${
              isMenuOpen ? "absolute bg-base-100 shadow-lg mt-2 rounded-lg z-50" : ""
            }`}
          >
            {menuItems.map((item, index) => (
              <li key={index} className="p-0">
                {item === "Home" ? (
                  <Link to="/" className="hover:text-gray-300 text-current px-2 py-1">
                    {item}
                  </Link>
                ) : item === "Equipo" || item === "Proyectos" ? (
                  <Link to={`/${item.toLowerCase()}`} className="hover:text-gray-300 text-current px-2 py-1">
                    {item}
                  </Link>
                ) : (
                  <HashLink 
                    smooth 
                    to={`/#${item.toLowerCase()}`} 
                    className="hover:text-gray-300 text-current px-2 py-1"
                  >
                    {item}
                  </HashLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Menú desplegable de temas */}
        <div className="navbar-right">
          <div
            className="navbar-end mr-auto dropdown dropdown-hover mb-1"
            onMouseEnter={() => setIsThemeMenuOpen(true)}
            onMouseLeave={() => setIsThemeMenuOpen(false)}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg"
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
            >
              Temas
              <svg
                width="12px"
                height="12px"
                className="inline-block h-2 w-2 fill-current opacity-60 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            {isThemeMenuOpen && (
              <ul className="dropdown-content bg-base-300 rounded-lg z-[1] w-52 p-2 shadow-lg">
                {["default", "light", "night", "retro", "aqua"].map((themeOption) => (
                  <li key={themeOption}>
                    <label className="cursor-pointer flex items-center gap-2">
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
        </div>
      </nav>
    </section>
  );
};

export default Navbar;