import React, { useEffect, useState, useRef } from "react";
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
  const [isZoomed, setIsZoomed] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  // Reset zoom and pan when image changes
  useEffect(() => {
    setIsZoomed(false);
    setPan({ x: 0, y: 0 });
  }, [currentIndex]);

  // Reset pan when zooming out
  useEffect(() => {
    if (!isZoomed) {
      setPan({ x: 0, y: 0 });
    }
  }, [isZoomed]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isZoomed) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
    hasMoved.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPan({ x: newX, y: newY });
      hasMoved.current = true;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMoved.current) {
      setIsZoomed(!isZoomed);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md" onClick={onClose}>
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-white/20 p-2 rounded-full transition-all"
      >
        <FaTimes size={24} />
      </button>
      
      {/* Main Image Area */}
      <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden p-4" onClick={(e) => e.stopPropagation()}>
        
        {/* Navigation Buttons - Enhanced visibility */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 z-40 text-white bg-black/50 hover:bg-white/20 p-4 rounded-full transition-all backdrop-blur-sm border border-white/10 hover:scale-110"
            >
              <FaChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 z-40 text-white bg-black/50 hover:bg-white/20 p-4 rounded-full transition-all backdrop-blur-sm border border-white/10 hover:scale-110"
            >
              <FaChevronRight size={24} />
            </button>
          </>
        )}
        
        {/* Image Container with Zoom and Pan */}
        <div 
          className={`relative transition-transform duration-100 ease-out ${
            isZoomed 
              ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') 
              : 'cursor-zoom-in'
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          style={{ 
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${isZoomed ? 2 : 1})`,
            maxHeight: '80vh',
            maxWidth: '90vw'
          }}
        >
          <img 
            src={images[currentIndex]} 
            alt={`Galería ${currentIndex + 1}`} 
            className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Thumbnails Strip */}
      <div className="h-24 w-full bg-black/80 flex items-center justify-center gap-2 p-4 overflow-x-auto z-40" onClick={(e) => e.stopPropagation()}>
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative flex-shrink-0 h-16 w-24 rounded-md overflow-hidden transition-all duration-200 ${
              currentIndex === idx 
                ? 'ring-2 ring-[var(--customOrange)] scale-110 opacity-100' 
                : 'opacity-50 hover:opacity-80 hover:scale-105'
            }`}
          >
            <img src={img} alt={`Thumb ${idx}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      
      {/* Counter */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-xs pointer-events-none">
        {currentIndex + 1} / {images.length}
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
        const proyectosProcesados = data.map((p: any) => {
          let imagen_principal: string | undefined = undefined;
          let galeria: string[] = [];

          // Procesar el campo 'fotos' si existe
          if (p.fotos) {
            if (Array.isArray(p.fotos)) {
              // Si ya es un array (como en el JSON proporcionado)
              galeria = p.fotos;
            } else if (typeof p.fotos === 'string' && p.fotos.trim() !== '') {
              // Si viene como string separado por comas (caso legacy o CSV)
              galeria = p.fotos.split(',').map((url: string) => url.trim());
            }
            
            // La primera imagen es la principal
            if (galeria.length > 0) {
              imagen_principal = galeria[0];
            }
          }

          return {
            ...p,
            imagen_principal,
            galeria
          };
        });

        const proyectosVisibles = proyectosProcesados.filter((p: Proyecto) => p.visible === "TRUE");
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