import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Inicio from "./Inicio.js";
import Lineas from "./Lineas.js";
import Publicaciones from "./Publicaciones.js";
import Secciones from "./Secciones.js";
import Descargas from "./Descargas.js";
import Slider from "./Slider.js";
import Equipocom from "./Equipocom.js";
import Contacto from "./Contacto.js";
const Home = () => {
    return (_jsxs("div", { id: "home", className: "p-0", children: [_jsx("section", { style: { marginTop: "80px" }, children: _jsxs("div", { className: "hero min-h-screen", style: {
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    }, children: [_jsx("div", { className: "hero-overlay bg-opacity-60" }), _jsx("div", { className: "hero-content text-neutral-content text-center", children: _jsxs("div", { className: "max-w-md", children: [_jsx("h1", { className: "mb-5 text-5xl font-bold", children: "Hello there" }), _jsx("p", { className: "mb-5", children: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi." }), _jsx("a", { href: "#inicio", className: "btn btn-white text-black rounded-lg", onClick: (e) => {
                                            e.preventDefault();
                                            const target = document.getElementById("inicio");
                                            if (target) {
                                                const yOffset = -140;
                                                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                                window.scrollTo({ top: y, behavior: "smooth" });
                                            }
                                        }, children: "COMENZAR" })] }) })] }) }), _jsx("section", { id: "inicio", children: _jsx(Inicio, {}) }), _jsx("section", { id: "l\u00EDneas", children: _jsx(Lineas, {}) }), _jsx("section", { id: "publicaciones", children: _jsx(Publicaciones, {}) }), _jsx(Secciones, {}), _jsx("section", { id: "descargas", children: _jsx(Descargas, {}) }), _jsx(Slider, {}), _jsx(Equipocom, {}), _jsx("section", { id: "contacto", children: _jsx(Contacto, {}) })] }));
};
export default Home;
