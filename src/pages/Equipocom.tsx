import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiembroEquipo from "../componentes/MiembroEquipo";
import Loading from "../componentes/Loading";

interface Miembro {
  id: number;
  nombre: string;
  titulo: string;
  foto: string;
  destacado?: string;
  github?: string;
  linkedin?: string;
  orcid?: string;
  scholar_id?: string;
}

const Equipocom: React.FC = () => {
  const [miembros, setMiembros] = useState<Miembro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.datoslab.cl/datoslab/members")
      .then((response) => {
        if (!response.ok) throw new Error("Error al obtener los datos.");
        return response.json();
      })
      .then((data: Miembro[]) => {
        // Filtrar por destacado === "TRUE"
        const destacados = data.filter(m => m.destacado === "TRUE");
        setMiembros(destacados);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-20"><Loading message="Cargando equipo..." /></div>;
  }

  if (error) {
    return null; // O mostrar un mensaje de error discreto
  }

  if (miembros.length === 0) return null;

  return (
    <section
      id="equipo"
      className="bg-white text-black p-10 lg:p-40 shadow-lg mt-10"
    >
      <div className="mx-auto max-w-screen-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">¡Conoce al equipo!</h1>
        <p className="text-base md:text-lg mb-8">Equipo DatosLab</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {miembros.map((miembro) => (
            <MiembroEquipo 
              key={miembro.id} 
              nombre={miembro.nombre}
              cargo={miembro.titulo}
              imagen={miembro.foto}
              github={miembro.github ? (miembro.github.startsWith('http') ? miembro.github : `https://github.com/${miembro.github}`) : undefined}
              linkedin={miembro.linkedin ? (miembro.linkedin.startsWith('http') ? miembro.linkedin : `https://www.linkedin.com/in/${miembro.linkedin}`) : undefined}
              orcid={miembro.orcid ? (miembro.orcid.startsWith('http') ? miembro.orcid : `https://orcid.org/${miembro.orcid}`) : undefined}
              scholar={miembro.scholar_id ? (miembro.scholar_id.startsWith('http') ? miembro.scholar_id : `https://scholar.google.com/citations?user=${miembro.scholar_id}`) : undefined}
            />
          ))}
        </div>

        <div className="mt-16">
          <Link 
            to="/equipo" 
            className="inline-block px-8 py-3 bg-[var(--customOrange)] text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Conocer al resto del equipo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Equipocom;
