// MenuItems.tsx
import React from "react";

interface MenuItemsProps {
  menuItems: string[];
  isMenuOpen: boolean;
}

const MenuItems: React.FC<MenuItemsProps> = ({ menuItems, isMenuOpen }) => {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={`flex-none ${isMenuOpen ? "block" : "hidden"} md:flex`}>
      <ul className={`menu menu-horizontal px-2 space-x-2 ${isMenuOpen ? "absolute bg-base-100 shadow-lg mt-2 rounded-lg" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="p-0">
            {item === "Proyectos" ? (
              <a className="hover:text-gray-300 text-current px-2 py-1">{item}</a>
            ) : (
              <button onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-gray-300 text-current px-2 py-1">
                {item}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
