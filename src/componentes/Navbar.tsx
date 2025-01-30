import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  menuItems: string[];
  onEquipoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt, menuItems, onEquipoClick }) => {
  const [theme, setTheme] = useState("default");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme); 
  }, [theme]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    setIsThemeMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="z-10 fixed w-full navbar-right" style={{ top: 0, left: 0, right: 0 }}>
      <nav className="navbar bg-gradient-to-r justify-between items-center bg-base-100 p-4">
        <div className="flex items-center space-x-8">
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

        <div className={`flex-none ${isMenuOpen ? "block" : "hidden"} md:flex`}>
          <ul className={`menu menu-horizontal px-2 space-x-2 ${isMenuOpen ? "absolute bg-base-100 shadow-lg mt-2 rounded-lg" : ""}`}>
            {menuItems.map((item, index) => (
              <li key={index} className="p-0">
                {item === "Equipo" ? (
                  <a
                    href="#"
                    onClick={() => {
                      onEquipoClick();
                    }}
                    className="hover:text-gray-300 text-current px-2 py-1"
                  >
                    {item}
                  </a>
                ) : (
                  <button
                    className="hover:text-gray-300 text-current px-2 py-1"
                  >
                    {item}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
