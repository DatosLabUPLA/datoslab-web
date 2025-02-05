import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Publicaciones = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const publicaciones = [
        {
            src: "img/portfolio/thumbnails/research1.png",
            title: "RESEARCH, INNOVATION",
            description: "Science Mapping"
        },
        {
            src: "img/portfolio/thumbnails/sistemadesarrollo.png",
            title: "OPNGOV, POLITICAL",
            description: "Participation"
        },
        {
            src: "img/portfolio/thumbnails/3.png",
            title: "INCOME, GENDER",
            description: "Inequality"
        }
    ];
    const handleOutsideClick = (e) => {
        // Cerrar la imagen si se hace clic fuera del contenedor de la imagen ampliada
        if (e.target.id === "imageOverlay") {
            setSelectedImage(null);
        }
    };
    return (_jsxs("div", { children: [_jsx("section", { id: "publicaciones", children: _jsxs("div", { className: "mt-40 mb-28 py-0", children: [_jsx("h2", { className: "text-4xl font-bold text-center mb-8", children: "Publicaciones" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4", children: publicaciones.map((pub, index) => (_jsxs("button", { className: "relative group overflow-hidden rounded-lg", onClick: () => setSelectedImage(pub.src), children: [_jsx("img", { src: pub.src, alt: pub.title, className: "p-2 w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg transition duration-300 group-hover:brightness-110" }), _jsxs("div", { className: "absolute inset-0 bg-transparent group-hover:bg-orange-700 group-hover:bg-opacity-80 rounded-lg flex flex-col justify-center items-center p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300", children: [_jsx("h3", { className: "text-lg font-bold", children: pub.title }), _jsx("p", { className: "text-sm", children: pub.description })] })] }, index))) })] }) }), selectedImage && (_jsx("div", { id: "imageOverlay", className: "fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex justify-center items-center", onClick: handleOutsideClick, children: _jsx("img", { src: selectedImage, alt: "Imagen ampliada", className: "w-auto h-auto max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg" }) }))] }));
};
export default Publicaciones;
