import React from "react";

const Noticias: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Noticias</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Próximamente encontrarás aquí las últimas novedades y noticias.
        </p>
      </div>
      
      <div className="flex justify-center items-center h-64 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <p className="text-gray-400 font-medium">Sección en construcción</p>
      </div>
    </div>
  );
};

export default Noticias;
