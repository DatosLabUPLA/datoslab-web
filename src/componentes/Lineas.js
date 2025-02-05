import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Lineas = () => {
    return (_jsx("div", { children: _jsx("section", { id: "l\u00EDneas", className: "bg-customOrange p-16 text-center bg-gradient-to-r my-40", children: _jsxs("div", { className: "w-full px-4 mt-8 space-y-16 mb-14", children: [_jsx("h2", { className: "text-white text-4xl font-bold text-center mb-8", children: "L\u00EDneas de Investigaci\u00F3n" }), _jsx("div", { className: "flex flex-wrap justify-between gap-5", children: [
                            {
                                title: "Open Data",
                                description: "Potenciamos la participación ciudadana a través del uso de datos abiertos y de nuevas aplicaciones",
                                iconSrc: "img/iconos/icono1.png",
                            },
                            {
                                title: "Data Analytics",
                                description: "Buscamos patrones significativos en los datos a través de algoritmos computacionales y modelos estadísticos",
                                iconSrc: "img/iconos/icono2.png",
                            },
                            {
                                title: "Networks",
                                description: "Creamos y utilizamos redes complejas basadas en interacciones sociales o información de producción",
                                iconSrc: "img/iconos/icono3.png",
                            },
                            {
                                title: "Data Visualization",
                                description: "Creamos y aplicamos las mejores técnicas de visualización de datos de forma estática o interactiva",
                                iconSrc: "img/iconos/icono4.png",
                            },
                        ].map((item, index) => (_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-5 text-center w-full sm:w-[48%] md:w-[23%]", children: [_jsx("img", { src: item.iconSrc, alt: `Icono ${item.title}`, className: "w-16 h-16 mx-auto mb-3" }), _jsx("h3", { className: "text-2xl font-bold text-black-500", children: item.title }), _jsx("p", { className: "text-gray-600", children: item.description })] }, index))) })] }) }) }));
};
export default Lineas;
