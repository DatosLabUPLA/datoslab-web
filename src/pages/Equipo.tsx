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

const imagenPorDefecto = "img/portfolio/img/team/miguel_guevara.png";

const MiembroCard: React.FC<{ miembro: Miembro }> = ({ miembro }) => (
  <div className="border p-4 rounded-lg shadow-md flex items-center space-x-4">
    <img
      src={miembro.foto || imagenPorDefecto}
      alt={miembro.nombre}
      className="w-16 h-16 rounded-full object-cover"
    />
    <div>
      <h3 className="text-xl font-semibold">{miembro.nombre}</h3>
      <p className="text-md">{miembro.titulo}</p>
      <p className="text-sm text-gray-600">{miembro.afiliacion}</p>
      <p className="text-sm text-gray-600">{miembro.categoria}</p>
      <a href={`mailto:${miembro.email}`} className="text-blue-500">
        {miembro.email}
      </a>
    </div>
  </div>
);

const SeccionMiembros: React.FC<{
  titulo: string;
  miembros: Miembro[];
  cols?: string;
}> = ({ titulo, miembros, cols = "sm:grid-cols-2" }) => {
  if (miembros.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold text-center mb-6">{titulo}</h2>
      <div className={`grid grid-cols-1 ${cols} gap-4`}>
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
      <div className="p-10 text-lg flex justify-center items-center space-x-4 mt-20">
        <span className="loading loading-spinner loading-lg"></span>
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
    <div className="p-4 mt-32">
      <h1 className="text-2xl font-bold mb-4 text-center">Equipo</h1>

      <SeccionMiembros titulo="Directores" miembros={directores} />
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
