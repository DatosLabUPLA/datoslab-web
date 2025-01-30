import React from "react";

const Descargas: React.FC = () => {
  return (
    <div>
    {/* Descargas */}
        <section id="descargas" className="bg-black bg-opacity-80 p-10 md:p-16 text-center bg-gradient-to-r shadow-lg my-0 w-full">
            <div className="mx-auto p-5 md:p-5 space-y-16">
            <h2 className="text-white text-4xl font-bold mt-8 mb-5">Descarga nuestro R-package para medir diversidad en Sistemas Complejos!</h2>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                {[{ description: "Guevara, M.R., & Pacheco,C (2018) Los datos abiertos de Chile. Serie de Documentos técnicos Facultad de ingeniería.(In press).", badges: [
                <a href="https://cran.r-project.org/web/packages/diverse/index.html" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-outline">POST</div>
                </a>,
                <a href="https://journal.r-project.org/archive/2016/RJ-2016-033/RJ-2016-033.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-outline">INTERACTIVE NOTEBOOK</div>
                </a>
                ]}].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-5 text-center w-full md:w-1/3"> {/* Ancho responsivo */} 
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="badge-container">
                    {item.badges.map((badge, badgeIndex) => (
                        <div key={badgeIndex} className="inline-block m-1">
                        {badge}
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
        </div>
    );
}   
export default Descargas;