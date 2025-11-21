import React, { useEffect, useState } from "react";
import { FaGlobe, FaGithub, FaFileAlt, FaVideo, FaUser, FaCalendar, FaTag, FaImages, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Proyecto {
  proyecto: string;
  visible: string;
  estado: string;
  tipo: string;
  anio: number;
  persona_a_cargo: string;
  descripcion: string;
  url?: string;
  github?: string;
  tesis?: string;
  link_demo?: string;
  imagen_principal?: string;
  galeria?: string[];
}

const GaleriaModal: React.FC<{ images: string[]; onClose: () => void }> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <FaTimes size={24} />
      </button>
      
      <div className="relative w-full max-w-5xl px-4 flex items-center justify-center h-full" onClick={e => e.stopPropagation()}>
        {images.length > 1 && (
          <button 
            onClick={prevImage}
            className="absolute left-4 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <FaChevronLeft size={32} />
          </button>
        )}
        
        <img 
          src={images[currentIndex]} 
          alt={`Galería ${currentIndex + 1}`} 
          className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
        />
        
        {images.length > 1 && (
          <button 
            onClick={nextImage}
            className="absolute right-4 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <FaChevronRight size={32} />
          </button>
        )}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-1 rounded-full text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

const TarjetaProyecto: React.FC<{ proyecto: Proyecto }> = ({ proyecto }) => {
  const isActive = proyecto.estado !== "finalizado";
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <div className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
        {/* Header with Status Line */}
        <div className={`h-1.5 w-full ${isActive ? "bg-green-500" : "bg-gray-400"}`} />

        {/* Imagen Principal */}
        {proyecto.imagen_principal && (
          <div className="relative h-48 w-full overflow-hidden bg-gray-100">
            <img 
              src={proyecto.imagen_principal} 
              alt={proyecto.proyecto} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {proyecto.galeria && proyecto.galeria.length > 0 && (
              <button 
                onClick={() => setShowGallery(true)}
                className="absolute bottom-2 right-2 bg-black/70 hover:bg-black/90 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1.5 transition-colors backdrop-blur-sm"
              >
                <FaImages />
                <span>{proyecto.galeria.length} fotos</span>
              </button>
            )}
          </div>
        )}

        <div className="p-5 flex flex-col flex-grow">
          {/* Title and Status Badge */}
          <div className="flex justify-between items-start mb-3 gap-3">
            <h2 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-[var(--customOrange)] transition-colors">
              {proyecto.proyecto}
            </h2>
            <span
              className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wide whitespace-nowrap ${
                isActive
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-gray-100 text-gray-600 border border-gray-200"
              }`}
            >
              {proyecto.estado}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed line-clamp-4">
            {proyecto.descripcion}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-2 text-xs text-gray-500 mb-4 border-t border-b border-gray-100 py-3">
            <div className="flex items-center gap-1.5">
              <FaCalendar className="text-gray-400" />
              <span>{proyecto.anio}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaTag className="text-gray-400" />
              <span className="truncate" title={proyecto.tipo}>
                {proyecto.tipo}
              </span>
            </div>
            <div className="col-span-2 flex items-center gap-1.5">
              <FaUser className="text-gray-400 flex-shrink-0" />
              <span className="truncate" title={proyecto.persona_a_cargo}>
                {proyecto.persona_a_cargo}
              </span>
            </div>
          </div>

          {/* Action Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
            {proyecto.url && (
              <a
                href={proyecto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:text-[var(--customOrange)] transition-colors p-1.5 hover:bg-orange-50 rounded-lg border border-transparent hover:border-orange-100"
              >
                <FaGlobe className="text-sm" /> Ver Proyecto
              </a>
            )}
            {proyecto.github && (
              <a
                href={proyecto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:text-black transition-colors p-1.5 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200"
              >
                <FaGithub className="text-sm" /> GitHub
              </a>
            )}
            {proyecto.tesis && (
              <a
                href={proyecto.tesis}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:text-blue-600 transition-colors p-1.5 hover:bg-blue-50 rounded-lg border border-transparent hover:border-blue-100"
              >
                <FaFileAlt className="text-sm" /> Tesis
              </a>
            )}
            {proyecto.link_demo && (
              <a
                href={proyecto.link_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:text-red-600 transition-colors p-1.5 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-100"
              >
                <FaVideo className="text-sm" /> Demo
              </a>
            )}
            {/* Botón de galería si no hay imagen principal pero sí galería */}
            {!proyecto.imagen_principal && proyecto.galeria && proyecto.galeria.length > 0 && (
              <button
                onClick={() => setShowGallery(true)}
                className="flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:text-purple-600 transition-colors p-1.5 hover:bg-purple-50 rounded-lg border border-transparent hover:border-purple-100 sm:col-span-2"
              >
                <FaImages className="text-sm" /> Ver Galería ({proyecto.galeria.length})
              </button>
            )}
          </div>
        </div>
      </div>

      {showGallery && proyecto.galeria && (
        <GaleriaModal 
          images={proyecto.galeria} 
          onClose={() => setShowGallery(false)} 
        />
      )}
    </>
  );
};

const Proyectos: React.FC = () => {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.datoslab.cl/datoslab/projects")
      .then((response) => {
        if (!response.ok) throw new Error("Error al obtener los datos.");
        return response.json();
      })
      .then((data) => {
        const proyectosVisibles = data.filter((p: Proyecto) => p.visible === "TRUE");
        setProyectos(proyectosVisibles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-10 mt-20 flex justify-center">
        <svg className="animate-spin h-12 w-12 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>
    );
  }

  if (error) return <div className="p-10 text-red-500">Error: {error}</div>;

  const proyectosActivos = proyectos.filter((p) => p.estado !== "finalizado");
  const proyectosInactivos = proyectos.filter((p) => p.estado === "finalizado");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explora el trabajo de nuestro laboratorio en ciencia de datos, visualización y análisis de redes.
        </p>
      </div>

      {/* Proyectos Activos Section */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
          <div className="h-8 w-1.5 bg-green-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800">Proyectos Activos</h2>
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
            {proyectosActivos.length}
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {proyectosActivos.map((proyecto, idx) => (
            <TarjetaProyecto key={idx} proyecto={proyecto} />
          ))}
        </div>
      </div>

      {/* Proyectos Finalizados Section */}
      <div>
        <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
          <div className="h-8 w-1.5 bg-gray-400 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800">Proyectos Finalizados</h2>
          <span className="bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
            {proyectosInactivos.length}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {proyectosInactivos.map((proyecto, idx) => (
            <TarjetaProyecto key={idx} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;