import { jsx as _jsx } from "react/jsx-runtime";
const MenuItems = ({ menuItems, isMenuOpen }) => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    return (_jsx("div", { className: `flex-none ${isMenuOpen ? "block" : "hidden"} md:flex`, children: _jsx("ul", { className: `menu menu-horizontal px-2 space-x-2 ${isMenuOpen ? "absolute bg-base-100 shadow-lg mt-2 rounded-lg" : ""}`, children: menuItems.map((item, index) => (_jsx("li", { className: "p-0", children: item === "Proyectos" ? (_jsx("a", { className: "hover:text-gray-300 text-current px-2 py-1", children: item })) : (_jsx("button", { onClick: () => scrollToSection(item.toLowerCase()), className: "hover:text-gray-300 text-current px-2 py-1", children: item })) }, index))) }) }));
};
export default MenuItems;
