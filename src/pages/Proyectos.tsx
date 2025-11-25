import React, { useEffect, useState, useRef } from "react";
import { FaGlobe, FaGithub, FaFileAlt, FaVideo, FaUser, FaCalendar, FaTag, FaImages, FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaExpand } from "react-icons/fa";
import Loading from "../componentes/Loading";

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
  equipo?: string;
  financiacion?: string;
  notas_de_prensa?: string;
}

// --- Componente: Lightbox / Galería Full Screen (Zoom y Pan) ---
const GaleriaModal: React.FC<{ images: string[]; initialIndex?: number; onClose: () => void }> = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  // Reset zoom and pan when image changes
  useEffect(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  }, [currentIndex]);

  // Reset pan when zooming out completely
  useEffect(() => {
    if (scale === 1) {
      setPan({ x: 0, y: 0 });
    }
  }, [scale]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    // Zoom con scroll
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(1, scale + delta), 5); // Min 1x, Max 5x
    setScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
    hasMoved.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPan({ x: newX, y: newY });
      hasMoved.current = true;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMoved.current) {
      // Ciclar niveles de zoom: 1 -> 2 -> 3 -> 4 -> 1
      if (scale < 4) {
        setScale(prev => Math.min(prev + 1, 4));
      } else {
        setScale(1);
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md" 
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      onWheel={handleWheel}
    >
      {/* Close Button */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-white/20 p-2 rounded-full transition-all"
      >
        <FaTimes size={24} />
      </button>
      
      {/* Main Image Area */}
      <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden p-4" onClick={(e) => e.stopPropagation()}>
        
        {/* Navigation Buttons */}
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
            scale > 1 
              ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') 
              : 'cursor-zoom-in'
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          style={{ 
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
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
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
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

// --- Componente: Modal de Detalles del Proyecto ---
const DetalleProyectoModal: React.FC<{ proyecto: Proyecto; onClose: () => void }> = ({ proyecto, onClose }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Thumbnail Drag State
  const [isDraggingThumbs, setIsDraggingThumbs] = useState(false);
  const [thumbStartX, setThumbStartX] = useState(0);
  const [thumbScrollLeft, setThumbScrollLeft] = useState(0);
  const thumbHasMoved = useRef(false);
  
  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const images = proyecto.galeria && proyecto.galeria.length > 0 
    ? proyecto.galeria 
    : (proyecto.imagen_principal ? [proyecto.imagen_principal] : []);

  // Sync: Scroll thumbnail into view when index changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeThumb = container.children[currentImageIndex] as HTMLElement;
      
      if (activeThumb) {
        const containerWidth = container.offsetWidth;
        const thumbLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.offsetWidth;
        
        // Center the active thumbnail
        const targetScroll = thumbLeft - (containerWidth / 2) + (thumbWidth / 2);
        
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  }, [currentImageIndex]);

  const handleMainImageMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragStartX(e.clientX);
  };

  const handleMainImageMouseUp = (e: React.MouseEvent) => {
    if (dragStartX !== null) {
      const delta = e.clientX - dragStartX;
      if (Math.abs(delta) > 50) {
        // Swipe
        if (delta > 0) {
           setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        } else {
           setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
      } else {
        // Click (si el movimiento fue pequeño, lo tomamos como click para abrir lightbox)
        setShowLightbox(true);
      }
    }
    setDragStartX(null);
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Thumbnail Drag Handlers
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    // e.preventDefault();
    setIsDraggingThumbs(true);
    setThumbStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setThumbScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    thumbHasMoved.current = false;
  };

  const handleThumbMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingThumbs) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - thumbStartX) * 1.5; // Speed multiplier
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = thumbScrollLeft - walk;
    }
    if (Math.abs(walk) > 5) {
        thumbHasMoved.current = true;
    }
  };

  const handleThumbMouseUp = () => {
    setIsDraggingThumbs(false);
  };

  const handleThumbMouseLeave = () => {
    setIsDraggingThumbs(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      <div 
        className="relative w-full max-w-[90vw] h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 lg:hidden bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <FaTimes />
        </button>

        {/* Columna Izquierda: Información (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 lg:w-1/2 order-2 lg:order-1 bg-gray-50/50">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${
                  proyecto.estado !== "finalizado"
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-gray-100 text-gray-600 border border-gray-200"
                }`}>
                  {proyecto.estado}
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <FaCalendar className="text-xs" /> {proyecto.anio}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
                {proyecto.proyecto}
              </h2>
              <div className="flex items-center gap-2 text-[var(--customOrange)] font-medium">
                <FaTag className="text-sm" />
                <span>{proyecto.tipo}</span>
              </div>
            </div>

            {/* Enlaces */}
            <div className="flex flex-wrap gap-3 mb-6">
              {proyecto.url && (
                <a href={proyecto.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--customOrange)] text-white rounded-lg hover:bg-orange-600 transition-colors font-medium shadow-sm hover:shadow-md">
                  <FaGlobe /> Visitar Sitio
                </a>
              )}
              {proyecto.github && (
                <a href={proyecto.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium shadow-sm hover:shadow-md">
                  <FaGithub /> Ver Código
                </a>
              )}
              {proyecto.tesis && (
                <a href={proyecto.tesis} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md">
                  <FaFileAlt /> Leer Tesis
                </a>
              )}
              {proyecto.link_demo && (
                <a href={proyecto.link_demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium shadow-sm hover:shadow-md">
                  <FaVideo /> Ver Demo
                </a>
              )}
            </div>

            {/* Descripción Completa */}
            <div className="prose prose-gray max-w-none mb-8 text-gray-600 leading-relaxed whitespace-pre-line">
              {proyecto.descripcion}
            </div>

            {/* Metadata Adicional */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm mb-8 space-y-6">
              
              {/* Equipo */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                  Equipo y Responsables
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-full text-[var(--customOrange)] shrink-0">
                      <FaUser />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Persona a cargo</p>
                      <p className="text-gray-800 font-medium">{proyecto.persona_a_cargo}</p>
                    </div>
                  </div>
                  
                  {proyecto.equipo && (
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600 shrink-0">
                        <FaUser />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Equipo de Trabajo</p>
                        <p className="text-gray-800 font-medium text-sm">{proyecto.equipo}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Financiación */}
              {proyecto.financiacion && (
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                    Financiación
                  </h3>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                      <FaFileAlt />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium text-sm">{proyecto.financiacion}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Notas de Prensa */}
              {proyecto.notas_de_prensa && (
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                    Prensa y Difusión
                  </h3>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full text-purple-600 shrink-0">
                      <FaGlobe />
                    </div>
                    <div className="text-sm">
                      {proyecto.notas_de_prensa.startsWith('http') ? (
                        <a href={proyecto.notas_de_prensa} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                          {proyecto.notas_de_prensa}
                        </a>
                      ) : (
                        <p className="text-gray-800">{proyecto.notas_de_prensa}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Columna Derecha: Galería / Visuales */}
        <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-900 relative order-1 lg:order-2 flex flex-col select-none">
          {/* Botón Cerrar Desktop */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 hidden lg:flex bg-black/20 hover:bg-black/50 text-white p-2 rounded-full transition-all backdrop-blur-sm"
          >
            <FaTimes size={20} />
          </button>

          {/* Imagen Principal Preview (Draggable) */}
          <div 
            className="flex-1 relative group cursor-grab active:cursor-grabbing overflow-hidden bg-black" 
            onMouseDown={handleMainImageMouseDown}
            onMouseUp={handleMainImageMouseUp}
            onMouseLeave={() => setDragStartX(null)}
          >
            {images.length > 0 ? (
              <>
                <img 
                  src={images[currentImageIndex]} 
                  alt="Vista previa" 
                  className="w-full h-full object-contain transition-opacity pointer-events-none"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                  <span className="bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-md">
                    <FaExpand /> Ampliar Galería
                  </span>
                </div>
                {/* Indicadores visuales de navegación */}
                {images.length > 1 && (
                   <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-black/30 p-2 rounded-full text-white"><FaChevronLeft /></div>
                      <div className="bg-black/30 p-2 rounded-full text-white"><FaChevronRight /></div>
                   </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <FaImages size={48} />
              </div>
            )}
          </div>

          {/* Tira de Miniaturas (si hay más de 1) */}
          {images.length > 1 && (
            <div className="relative h-24 bg-black/90 border-t border-white/10 flex items-center">
               {/* Botón Izquierda */}
               <button 
                 onClick={(e) => { e.stopPropagation(); scrollThumbnails('left'); }}
                 className="absolute left-0 z-10 h-full px-2 bg-black/50 hover:bg-black/80 text-white transition-colors flex items-center justify-center"
               >
                 <FaChevronLeft />
               </button>

              <div 
                ref={scrollContainerRef}
                className={`flex gap-2 overflow-x-auto h-full p-2 px-8 w-full ${isDraggingThumbs ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseDown={handleThumbMouseDown}
                onMouseMove={handleThumbMouseMove}
                onMouseUp={handleThumbMouseUp}
                onMouseLeave={handleThumbMouseLeave}
              >
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { 
                        e.stopPropagation(); 
                        if (!thumbHasMoved.current) setCurrentImageIndex(idx); 
                    }}
                    className={`relative h-full aspect-video rounded overflow-hidden flex-shrink-0 transition-all ${
                      currentImageIndex === idx ? 'ring-2 ring-[var(--customOrange)] opacity-100' : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover pointer-events-none" />
                  </button>
                ))}
              </div>

               {/* Botón Derecha */}
               <button 
                 onClick={(e) => { e.stopPropagation(); scrollThumbnails('right'); }}
                 className="absolute right-0 z-10 h-full px-2 bg-black/50 hover:bg-black/80 text-white transition-colors flex items-center justify-center"
               >
                 <FaChevronRight />
               </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {showLightbox && images.length > 0 && (
        <GaleriaModal 
          images={images} 
          initialIndex={currentImageIndex}
          onClose={() => setShowLightbox(false)} 
        />
      )}
    </div>
  );
};

const TarjetaProyecto: React.FC<{ proyecto: Proyecto; onClick: () => void }> = ({ proyecto, onClick }) => {
  const isActive = proyecto.estado !== "finalizado";

  return (
    <div 
      onClick={onClick}
      className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer"
    >
      {/* Header with Status Line */}
      <div className={`h-1.5 w-full ${isActive ? "bg-green-500" : "bg-gray-400"}`} />

      {/* Imagen Principal */}
      {proyecto.imagen_principal ? (
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <img 
            src={proyecto.imagen_principal} 
            alt={proyecto.proyecto} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {proyecto.galeria && proyecto.galeria.length > 0 && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1.5 backdrop-blur-sm">
              <FaImages />
              <span>{proyecto.galeria.length}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="h-48 w-full bg-gray-50 flex items-center justify-center text-gray-300">
          <FaImages size={40} />
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

        {/* Description (Truncated) */}
        <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
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
        </div>

        {/* Footer: "Ver más" hint */}
        <div className="mt-auto flex items-center justify-between text-xs font-medium text-[var(--customOrange)] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
          <span>Ver detalles completos</span>
          <FaExternalLinkAlt />
        </div>
      </div>
    </div>
  );
};

const Proyectos: React.FC = () => {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProyecto, setSelectedProyecto] = useState<Proyecto | null>(null);

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
              galeria = p.fotos;
            } else if (typeof p.fotos === 'string' && p.fotos.trim() !== '') {
              galeria = p.fotos.split(',').map((url: string) => url.trim());
            }
            
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
    return <Loading message="Cargando proyectos..." />;
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
            <TarjetaProyecto 
              key={idx} 
              proyecto={proyecto} 
              onClick={() => setSelectedProyecto(proyecto)}
            />
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
            <TarjetaProyecto 
              key={idx} 
              proyecto={proyecto} 
              onClick={() => setSelectedProyecto(proyecto)}
            />
          ))}
        </div>
      </div>

      {/* Modal de Detalles */}
      {selectedProyecto && (
        <DetalleProyectoModal 
          proyecto={selectedProyecto} 
          onClose={() => setSelectedProyecto(null)} 
        />
      )}
    </div>
  );
};

export default Proyectos;