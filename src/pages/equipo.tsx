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

const Equipo: React.FC = () => {
  const [miembros, setMiembros] = useState<Miembro[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.datoslab.cl/datoslab/members")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos.");
        }
        return response.json();
      })
      .then((data) => {
        setMiembros(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const miembrosActivos = miembros.filter((miembro) => miembro.activo === "TRUE");
  const miembrosInactivos = miembros.filter((miembro) => miembro.activo !== "TRUE");

  const imagenPorDefecto = "img/portfolio/img/team/miguel_guevara.png";

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Equipo</h1>

      {/* Miembros Activos */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-10 mt-16 text-center">Equipo Actual</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {miembrosActivos.map((miembro) => (
            <div key={miembro.id} className="border p-4 rounded-lg shadow-md flex items-center">
              {/* Foto del miembro, usando imagen por defecto */}
              <img
                src={miembro.foto || imagenPorDefecto}  // Usa la foto personalizada si existe, sino la por defecto
                alt={miembro.nombre}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{miembro.nombre}</h3>
                <p className="text-md">{miembro.titulo}</p>
                <p className="text-sm text-gray-600">{miembro.afiliacion}</p>
                <p className="text-sm text-gray-600">{miembro.categoria}</p>
                <a href={`mailto:${miembro.email}`} className="text-blue-500">{miembro.email}</a>
                {/*<p className="mt-2">
                  <span className="badge bg-green-500">Activo</span>
                </p>*/}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Miembros Inactivos */}
      <div>
        <h2 className="text-xl font-semibold mb-10 mt-10 text-center">Equipo Histórico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {miembrosInactivos.map((miembro) => (
            <div key={miembro.id} className="border p-4 rounded-lg shadow-md flex items-center">
              {/* Foto, usando imagen por defecto */}
              <img
                src={miembro.foto || imagenPorDefecto}
                alt={miembro.nombre}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{miembro.nombre}</h3>
                <p className="text-md">{miembro.titulo}</p>
                <p className="text-sm text-gray-600">{miembro.afiliacion}</p>
                <p className="text-sm text-gray-600">{miembro.categoria}</p>
                <a href={`mailto:${miembro.email}`} className="text-blue-500">{miembro.email}</a>
                <p className="mt-2">
                  <span className="badge bg-red-500">Inactivo</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipo;

