import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const Proyectos = () => {
    const [proyectos, setProyectos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://api.datoslab.cl/datoslab/projects")
            .then((response) => {
            if (!response.ok) {
                throw new Error("Error al obtener los datos.");
            }
            return response.json();
        })
            .then((data) => {
            const proyectosVisibles = data.filter((p) => p.visible === "TRUE");
            setProyectos(proyectosVisibles);
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
    const proyectosActivos = proyectos.filter((proyecto) => proyecto.estado !== "finalizado");
    const proyectosInactivos = proyectos.filter((proyecto) => proyecto.estado === "finalizado");
    return (_jsxs("div", { className: "p-10 mt-32", children: [_jsx("h1", { className: "text-center text-3xl font-bold mb-5", children: "Nuestros Proyectos" }), _jsx("p", { className: "text-lg mb-5 text-center", children: "Proyectos Activos" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: proyectosActivos.map((proyecto, index) => (_jsxs("div", { className: "border p-4 rounded-lg shadow-md bg-white", children: [_jsx("h2", { className: "text-xl font-semibold", children: proyecto.proyecto }), _jsx("p", { className: "text-md text-gray-700", children: proyecto.descripcion }), _jsxs("p", { className: "text-sm text-gray-500", children: ["A\u00F1o: ", proyecto.anio] }), _jsxs("p", { className: "text-sm text-gray-500", children: ["Tipo: ", proyecto.tipo] }), _jsxs("p", { className: "text-sm text-gray-500", children: ["Encargado: ", proyecto.persona_a_cargo] }), _jsx("p", { className: `mt-2 badge ${proyecto.estado === "finalizado" ? "bg-gray-500" : "bg-green-500"}`, children: proyecto.estado }), _jsxs("div", { className: "mt-3 space-y-2", children: [proyecto.url && (_jsx("a", { href: proyecto.url, target: "_blank", className: "block text-blue-500 hover:underline", children: "\uD83C\uDF10 Ver Proyecto" })), proyecto.github && (_jsx("a", { href: proyecto.github, target: "_blank", className: "block text-gray-700 hover:underline", children: "\uD83D\uDCBB C\u00F3digo en GitHub" })), proyecto.tesis && (_jsx("a", { href: proyecto.tesis, target: "_blank", className: "block text-red-500 hover:underline", children: "\uD83D\uDCC4 Ver Tesis" })), proyecto.link_demo && (_jsx("a", { href: proyecto.link_demo, target: "_blank", className: "block text-green-500 hover:underline", children: "\uD83C\uDFA5 Ver Demo" }))] })] }, index))) }), _jsx("p", { className: "text-lg mb-5 text-center mt-16", children: "Proyectos Finalizados" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: proyectosInactivos.map((proyecto, index) => (_jsxs("div", { className: "border p-4 rounded-lg shadow-md bg-white", children: [_jsx("h2", { className: "text-xl font-semibold", children: proyecto.proyecto }), _jsx("p", { className: "text-md text-gray-700", children: proyecto.descripcion }), _jsxs("p", { className: "text-sm text-gray-500", children: ["A\u00F1o: ", proyecto.anio] }), _jsxs("p", { className: "text-sm text-gray-500", children: ["Tipo: ", proyecto.tipo] }), _jsxs("p", { className: "text-sm text-gray-500", children: ["Encargado: ", proyecto.persona_a_cargo] }), _jsx("p", { className: `mt-2 badge ${proyecto.estado === "finalizado" ? "bg-gray-500" : "bg-green-500"}`, children: proyecto.estado }), _jsxs("div", { className: "mt-3 space-y-2", children: [proyecto.url && (_jsx("a", { href: proyecto.url, target: "_blank", className: "block text-blue-500 hover:underline", children: "\uD83C\uDF10 Ver Proyecto" })), proyecto.github && (_jsx("a", { href: proyecto.github, target: "_blank", className: "block text-gray-700 hover:underline", children: "\uD83D\uDCBB C\u00F3digo en GitHub" })), proyecto.tesis && (_jsx("a", { href: proyecto.tesis, target: "_blank", className: "block text-red-500 hover:underline", children: "\uD83D\uDCC4 Ver Tesis" })), proyecto.link_demo && (_jsx("a", { href: proyecto.link_demo, target: "_blank", className: "block text-green-500 hover:underline", children: "\uD83C\uDFA5 Ver Demo" }))] })] }, index))) })] }));
};
export default Proyectos;
