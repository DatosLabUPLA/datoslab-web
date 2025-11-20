import React, { useEffect, useState } from "react";

interface Miembro {
  id: number;
  nombre: string;
  titulo: string;
  email: string;
  afiliacion: string;
  categoria: string;
  activo: string;
  orden: number;
  visible: string;
  foto: string;
}

const imagenDirector = "/images/img/portfolio/img/team/miguel_guevara.png";

// SVG placeholder para personas sin foto
const PersonPlaceholder: React.FC = () => (
  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center border-2 border-gray-200">
    <svg
      viewBox="0 0 24 24"
      className="w-10 h-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        fill="#6B7280"
      />
      <path
        d="M12 14C8.13401 14 5 17.134 5 21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21C19 17.134 15.866 14 12 14Z"
        fill="#6B7280"
      />
    </svg>
  </div>
);

const MiembroCard: React.FC<{ miembro: Miembro }> = ({ miembro }) => {
  const esDirector = miembro.titulo.toLowerCase().includes("director") || miembro.categoria.toLowerCase().includes("director");
  const tieneImagen = esDirector && imagenDirector;

  return (
    <div className="bg-white text-black border p-4 rounded-lg shadow-md flex items-center space-x-4">
      {tieneImagen ? (
        <img
          src={imagenDirector}
          alt={miembro.nombre}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
        />
      ) : (
        <PersonPlaceholder />
      )}
      <div>
        <h3 className="text-xl font-semibold text-black">{miembro.nombre}</h3>
        <p className="text-md text-black">{miembro.titulo}</p>
        <p className="text-sm text-gray-700">{miembro.afiliacion}</p>
        <p className="text-sm text-gray-700">{miembro.categoria}</p>
        <a href={`mailto:${miembro.email}`} className="text-black underline">
          {miembro.email}
        </a>
      </div>
    </div>
  );
};

const SeccionMiembros: React.FC<{ titulo: string; miembros: Miembro[]; cols?: string }> = ({ titulo, miembros, cols = "sm:grid-cols-2" }) => {
  if (miembros.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-center text-black mb-6">{titulo}</h2>
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
    return (
      <div className="p-10 mt-20 flex justify-center">
        <svg className="animate-spin h-12 w-12 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return <div className="p-10 text-red-500 text-center">Error: {error}</div>;
  }

  const miembrosActivos = miembros.filter((m) => m.activo === "TRUE");
  const miembrosInactivos = miembros.filter((m) => m.activo !== "TRUE");

  const directores = miembrosActivos.filter(
    (m) =>
      m.titulo.toLowerCase().includes("director") ||
      m.categoria.toLowerCase().includes("director")
  );
  const profesionales = miembrosActivos.filter((m) =>
    m.categoria.toLowerCase().includes("profesional")
  );
  const practicantesTesistas = miembrosActivos.filter((m) =>
    ["practicante", "tesista"].some((c) =>
      m.categoria.toLowerCase().includes(c)
    )
  );
  const investigadoresInactivos = miembrosInactivos.filter((m) =>
    m.categoria.toLowerCase().includes("investigadora")
  );
  const otrosInactivos = miembrosInactivos.filter(
    (m) => !m.categoria.toLowerCase().includes("investigadora")
  );
  const inactivosOrdenados = [...investigadoresInactivos, ...otrosInactivos];

  return (
    <div className="bg-white text-black p-4 mt-32">
      <h1 className="text-3xl font-bold mb-8 text-center">Equipo</h1>

      <SeccionMiembros titulo="Director" miembros={directores} />
      <SeccionMiembros titulo="Profesionales" miembros={profesionales} />
      <SeccionMiembros
        titulo="Practicantes y Tesistas"
        miembros={practicantesTesistas}
      />
      <SeccionMiembros
        titulo="Equipo Histórico"
        miembros={inactivosOrdenados}
        cols="sm:grid-cols-2 md:grid-cols-3"
      />
    </div>
  );
};

export default Equipo;