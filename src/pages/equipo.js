import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const Equipo = () => {
    const [miembros, setMiembros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://api.datoslab.cl/datoslab/members")
            .then((response) => {
            if (!response.ok) {
                throw new Error("Error al obtener los datos.");
            }
            return response.json();
        })
            .then((data) => {
            setMiembros(data);
            setLoading(false);
        })
            .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }, []);
    if (loading) {
        return (_jsx("div", { className: "p-10 text-lg flex justify-center items-center space-x-4 mt-20", children: _jsx("span", { className: "loading loading-spinner loading-lg" }) }));
    }
    if (error) {
        return _jsxs("div", { className: "p-10 text-red-500", children: ["Error: ", error] });
    }
    const miembrosActivos = miembros.filter((miembro) => miembro.activo === "TRUE");
    const miembrosInactivos = miembros.filter((miembro) => miembro.activo !== "TRUE");
    const miembrosDirectores = miembrosActivos.filter((miembro) => miembro.titulo.toLowerCase().includes("director") ||
        miembro.categoria.toLowerCase().includes("director"));
    const miembrosProfesionales = miembrosActivos.filter((miembro) => miembro.categoria.toLowerCase().includes("profesional"));
    const miembrosPracticantesYTesistas = miembrosActivos.filter((miembro) => miembro.categoria.toLowerCase().includes("practicante") ||
        miembro.categoria.toLowerCase().includes("tesista"));
    const miembrosInvestigadores = miembrosInactivos.filter((miembro) => miembro.categoria.toLowerCase().includes("investigadora"));
    const otrosMiembrosInactivos = miembrosInactivos.filter((miembro) => !miembro.categoria.toLowerCase().includes("investigadora"));
    const miembrosInactivosOrdenados = [...miembrosInvestigadores, ...otrosMiembrosInactivos];
    const imagenPorDefecto = "img/portfolio/img/team/miguel_guevara.png";
    return (_jsxs("div", { className: "p-4 mt-32", children: [_jsx("h1", { className: "text-2xl font-bold mb-4 text-center", children: "Equipo" }), miembrosDirectores.length > 0 && (_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold text-center mt-16", children: "Directores" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: miembrosDirectores.map((miembro) => (_jsxs("div", { className: "border p-4 rounded-lg shadow-md flex items-center space-x-4", children: [_jsx("img", { src: miembro.foto || imagenPorDefecto, alt: miembro.nombre, className: "w-16 h-16 rounded-full" }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold", children: miembro.nombre }), _jsx("p", { className: "text-md", children: miembro.titulo }), _jsx("p", { className: "text-sm text-gray-600", children: miembro.afiliacion }), _jsx("p", { className: "text-sm text-gray-600", children: miembro.categoria }), _jsx("a", { href: `mailto:${miembro.email}`, className: "text-blue-500", children: miembro.email })] })] }, miembro.id))) })] })), miembrosProfesionales.length > 0 && (_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold text-center mt-16", children: "Profesionales" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: miembrosProfesionales.map((miembro) => (_jsxs("div", { className: "border p-4 rounded-lg shadow-md flex items-center space-x-4", children: [_jsx("img", { src: miembro.foto || imagenPorDefecto, alt: miembro.nombre, className: "w-16 h-16 rounded-full" }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold", children: miembro.nombre }), _jsx("p", { className: "text-md", children: miembro.titulo }), _jsx("p", { className: "text-sm text-gray-600", children: miembro.afiliacion }), _jsx("p", { className: "text-sm text-gray-600", children: miembro.categoria }), _jsx("a", { href: `mailto:${miembro.email}`, className: "text-blue-500", children: miembro.email })] })] }, miembro.id))) })] })), miembrosPracticantesYTesistas.length > 0 && (_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold text-center mt-16", children: "Practicantes y Tesistas" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: miembrosPracticantesYTesistas.map((miembro) => (_jsxs("div", { className: "border p-4 rounded-lg shadow-md flex items-center space-x-4", children: [_jsx("img", { src: miembro.foto || imagenPorDefecto, alt: miembro.nombre, className: "w-16 h-16 rounded-full" }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold", children: miembro.nombre }), _jsx("p", { className: "text-md", children: miembro.titulo }), _jsx("p", { className: "text-sm text-gray-600", children: miembro.afiliacion }), _jsx("p", { className: "text-sm text-gray-600", children: miembro.categoria }), _jsx("a", { href: `mailto:${miembro.email}`, className: "text-blue-500", children: miembro.email })] })] }, miembro.id))) })] })), _jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold mb-10 mt-10 text-center", children: "Equipo Hist\u00F3rico" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: miembrosInactivosOrdenados.map((miembro) => (_jsxs("div", { className: "border p-4 rounded-lg shadow-md flex items-center space-x-4", children: [_jsx("img", { src: miembro.foto || imagenPorDefecto, alt: miembro.nombre, className: "w-16 h-16 rounded-full" }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold", children: miembro.nombre }), _jsx("p", { className: "text-md", children: miembro.titulo }), _jsx("p", { className: "text-sm text-gray-600", children: miembro.afiliacion }), _jsx("p", { className: "text-sm text-gray-600", children: miembro.categoria }), _jsx("a", { href: `mailto:${miembro.email}`, className: "text-blue-500", children: miembro.email })] })] }, miembro.id))) })] })] }));
};
export default Equipo;
