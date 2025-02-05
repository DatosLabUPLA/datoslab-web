import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const BotonVolver = () => {
    return (_jsx("div", { className: "mb-4", children: _jsxs(Link, { to: "/", className: "p-2 bg-blue-500 text-white rounded-md inline-flex items-center space-x-2", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "w-5 h-5", children: _jsx("path", { d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }) }), _jsx("span", { children: "Volver al Home" })] }) }));
};
export default BotonVolver;
