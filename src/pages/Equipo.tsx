import React, { useEffect, useState } from "react";
import { FaEnvelope, FaUniversity, FaUserTie, FaUserGraduate, FaUser, FaGithub, FaLinkedin, FaOrcid } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Loading from "../componentes/Loading";

interface Miembro {
  id: number;
  nombre: string;
  titulo: string;
  email?: string;
  afiliacion: string;
  categoria: string;
  activo: string;
  orden: number;
  visible: string;
  foto: string;
  github?: string;
  linkedin?: string;
  orcid?: string;
  scholar_id?: string;
}

// SVG placeholder para personas sin foto
const PersonPlaceholder: React.FC = () => (
  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white shadow-sm text-gray-300">
    <FaUser size={40} />
  </div>
);

const MiembroCard: React.FC<{ miembro: Miembro }> = ({ miembro }) => {
  const esDirector = miembro.titulo.toLowerCase().includes("director") || miembro.categoria.toLowerCase().includes("director");
  const tieneImagen = miembro.foto && miembro.foto.trim() !== "";

  // Determinar icono según categoría
  const getIcon = () => {
    const cat = miembro.categoria.toLowerCase();
    if (cat.includes("director")) return <FaUserTie />;
    if (cat.includes("estudiante") || cat.includes("tesista")) return <FaUserGraduate />;
    return <FaUser />;
  };

  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Top Border Line */}
      <div className={`h-1.5 w-full ${esDirector ? "bg-[var(--customOrange)]" : "bg-gray-300 group-hover:bg-[var(--customOrange)] transition-colors"}`} />
      
      <div className="p-6 flex flex-col items-center text-center flex-1">
        {/* Avatar */}
        <div className="mb-4 relative">
          {tieneImagen ? (
            <img
              src={miembro.foto}
              alt={miembro.nombre}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
          ) : (
            <PersonPlaceholder />
          )}
          <div className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-sm border border-gray-100 text-[var(--customOrange)] text-xs">
            {getIcon()}
          </div>
        </div>

        {/* Info */}
        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
          {miembro.nombre}
        </h3>
        <p className="font-medium text-[var(--customOrange)] mb-3 uppercase tracking-wide text-xs">
          {miembro.titulo}
        </p>
        
        <div className="text-sm text-gray-500 space-y-2 mb-4 flex-1">
          {miembro.afiliacion && (
            <p className="flex items-center justify-center gap-2 text-xs">
              <FaUniversity className="shrink-0" /> 
              <span>{miembro.afiliacion}</span>
            </p>
          )}
          {miembro.categoria && !esDirector && (
            <div className="flex flex-wrap justify-center gap-1.5">
              {miembro.categoria.split(',').map((cat, idx) => (
                <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 border border-gray-200">
                  {cat.trim()}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Actions */}
        <div className="mt-auto pt-4 border-t border-gray-100 w-full flex justify-center gap-4">
          {miembro.email && (
            <a 
              href={`mailto:${miembro.email}`} 
              className="text-gray-400 hover:text-[var(--customOrange)] transition-colors text-xl hover:scale-110 transform duration-200"
              title="Email"
            >
              <FaEnvelope /> 
            </a>
          )}

          {miembro.github && (
             <a 
                href={miembro.github.startsWith('http') ? miembro.github : `https://github.com/${miembro.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors text-xl hover:scale-110 transform duration-200"
                title="GitHub"
             >
                <FaGithub />
             </a>
          )}

          {miembro.linkedin && (
             <a 
                href={miembro.linkedin.startsWith('http') ? miembro.linkedin : `https://www.linkedin.com/in/${miembro.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors text-xl hover:scale-110 transform duration-200"
                title="LinkedIn"
             >
                <FaLinkedin />
             </a>
          )}

          {miembro.orcid && (
             <a 
                href={miembro.orcid.startsWith('http') ? miembro.orcid : `https://orcid.org/${miembro.orcid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#A6CE39] transition-colors text-xl hover:scale-110 transform duration-200"
                title="ORCID"
             >
                <FaOrcid />
             </a>
          )}

          {miembro.scholar_id && (
             <a 
                href={miembro.scholar_id.startsWith('http') ? miembro.scholar_id : `https://scholar.google.com/citations?user=${miembro.scholar_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4285F4] transition-colors text-xl hover:scale-110 transform duration-200"
                title="Google Scholar"
             >
                <SiGooglescholar />
             </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SeccionMiembros: React.FC<{ titulo: string; miembros: Miembro[]; cols?: string }> = ({ titulo, miembros, cols = "sm:grid-cols-2 lg:grid-cols-3" }) => {
  if (miembros.length === 0) return null;

  return (
    <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{titulo}</h2>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>
      <div className={`grid grid-cols-1 ${cols} gap-6`}>
        {miembros.map((miembro) => (
          <MiembroCard key={miembro.id} miembro={miembro} />
        ))}
      </div>
    </div>
  );
};

const Equipo: React.FC = () => {
  const [miembros, setMiembros] = useState<Miembro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.datoslab.cl/datoslab/members")
      .then((response) => {
        if (!response.ok) throw new Error("Error al obtener los datos.");
        return response.json();
      })
      .then((data) => {
        setMiembros(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading message="Cargando equipo..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Error al cargar</h3>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const miembrosActivos = miembros.filter((m) => m.activo === "TRUE");
  const miembrosInactivos = miembros.filter((m) => m.activo !== "TRUE");

  const directores = miembrosActivos.filter(
    (m) =>
      m.titulo.toLowerCase().includes("director") ||
      m.categoria.toLowerCase().includes("director")
  );

  const investigadores = miembrosActivos.filter((m) =>
    !m.titulo.toLowerCase().includes("director") &&
    !m.categoria.toLowerCase().includes("director") &&
    ["investigador", "investigadora"].some(t => m.categoria.toLowerCase().includes(t))
  );

  const profesionales = miembrosActivos.filter((m) =>
    !m.titulo.toLowerCase().includes("director") &&
    !m.categoria.toLowerCase().includes("director") &&
    !["investigador", "investigadora"].some(t => m.categoria.toLowerCase().includes(t)) &&
    m.categoria.toLowerCase().includes("profesional")
  );

  const practicantesTesistas = miembrosActivos.filter((m) =>
    ["practicante", "tesista"].some((c) =>
      m.categoria.toLowerCase().includes(c)
    )
  );
  
  const investigadoresInactivos = miembrosInactivos.filter((m) =>
    ["investigador", "investigadora"].some(t => m.categoria.toLowerCase().includes(t))
  );
  const otrosInactivos = miembrosInactivos.filter(
    (m) => !["investigador", "investigadora"].some(t => m.categoria.toLowerCase().includes(t))
  );
  const inactivosOrdenados = [...investigadoresInactivos, ...otrosInactivos];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in zoom-in duration-500">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro <span className="text-[var(--customOrange)]">Equipo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce a las personas que hacen posible la investigación y el desarrollo en DatosLab.
          </p>
        </div>

        {/* Equipo Activo */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wider text-center">
              Equipo Activo
            </h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <SeccionMiembros titulo="Dirección" miembros={directores} />
          <SeccionMiembros titulo="Investigadores" miembros={investigadores} />
          <SeccionMiembros titulo="Profesionales" miembros={profesionales} />
          <SeccionMiembros
            titulo="Practicantes y Tesistas"
            miembros={practicantesTesistas}
            cols="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          />
        </div>

        {/* Equipo Histórico */}
        {inactivosOrdenados.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-gray-300 flex-1"></div>
              <h2 className="text-3xl font-bold text-gray-500 uppercase tracking-wider text-center">
                Equipo Histórico
              </h2>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <SeccionMiembros
              titulo="Ex-Colaboradores"
              miembros={inactivosOrdenados}
              cols="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Equipo;