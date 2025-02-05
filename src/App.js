import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Equipo from "./pages/equipo.js";
import Proyectos from "./pages/proyectos.js";
import Home from "./componentes/Home.js";
import Navbar from "./componentes/Navbar.js";
import Footer from "./componentes/Footer.js";
const App = () => {
    return (_jsxs("div", { children: [_jsx("header", { children: _jsx(Navbar, { logoSrc: "img/datos_lab.png", logoAlt: "DatosLab", menuItems: ["Home", "Líneas", "Publicaciones", "Descargas", "Proyectos", "Equipo", "Contacto"] }) }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/equipo", element: _jsx(Equipo, {}) }), _jsx(Route, { path: "/proyectos", element: _jsx(Proyectos, {}) })] }), _jsx(Footer, {})] }));
};
export default App;
