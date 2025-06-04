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
    return (
      <div className="p-10 text-lg flex justify-center items-center space-x-4 mt-20">
        {/* Aquí se muestran los spinners */}
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <div className="p-10 text-red-500">Error: {error}</div>;
  }

  const miembrosActivos = miembros.filter((miembro) => miembro.activo === "TRUE");
  const miembrosInactivos = miembros.filter((miembro) => miembro.activo !== "TRUE");

  const miembrosDirectores = miembrosActivos.filter(
    (miembro) =>
      miembro.titulo.toLowerCase().includes("director") ||
      miembro.categoria.toLowerCase().includes("director")
  );

  const miembrosProfesionales = miembrosActivos.filter((miembro) =>
    miembro.categoria.toLowerCase().includes("profesional")
  );

  const miembrosPracticantesYTesistas = miembrosActivos.filter(
    (miembro) =>
      miembro.categoria.toLowerCase().includes("practicante") ||
      miembro.categoria.toLowerCase().includes("tesista")
  );

  const miembrosInvestigadores = miembrosInactivos.filter((miembro) =>
    miembro.categoria.toLowerCase().includes("investigadora")
  );
  const otrosMiembrosInactivos = miembrosInactivos.filter(
    (miembro) => !miembro.categoria.toLowerCase().includes("investigadora")
  );
  const miembrosInactivosOrdenados = [...miembrosInvestigadores, ...otrosMiembrosInactivos];

  const imagenPorDefecto = "img/portfolio/img/team/miguel_guevara.png";

  return (
    <div className="p-4 mt-32">
      <h1 className="text-2xl font-bold mb-4 text-center">Equipo</h1>

      {/* Directores */}
      {miembrosDirectores.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-center mt-16">Directores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {miembrosDirectores.map((miembro) => (
              <div key={miembro.id} className="border p-4 rounded-lg shadow-md flex items-center space-x-4">
                <img
                  src={miembro.foto || imagenPorDefecto}
                  alt={miembro.nombre}
                  className="w-16 h-16 rounded-full"
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
            ))}
          </div>
        </div>
      )}

      {/* Profesionales */}
      {miembrosProfesionales.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-center mt-16">Profesionales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {miembrosProfesionales.map((miembro) => (
              <div key={miembro.id} className="border p-4 rounded-lg shadow-md flex items-center space-x-4">
                <img
                  src={miembro.foto || imagenPorDefecto}
                  alt={miembro.nombre}
                  className="w-16 h-16 rounded-full"
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
            ))}
          </div>
        </div>
      )}

      {/* Practicantes y Tesistas */}
      {miembrosPracticantesYTesistas.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-center mt-16">Practicantes y Tesistas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {miembrosPracticantesYTesistas.map((miembro) => (
              <div key={miembro.id} className="border p-4 rounded-lg shadow-md flex items-center space-x-4">
                <img
                  src={miembro.foto || imagenPorDefecto}
                  alt={miembro.nombre}
                  className="w-16 h-16 rounded-full"
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
            ))}
          </div>
        </div>
      )}

      {/* Miembros Inactivos */}
      <div>
        <h2 className="text-xl font-semibold mb-10 mt-10 text-center">Equipo Histórico</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {miembrosInactivosOrdenados.map((miembro) => (
            <div key={miembro.id} className="border p-4 rounded-lg shadow-md flex items-center space-x-4">
              <img
                src={miembro.foto || imagenPorDefecto}
                alt={miembro.nombre}
                className="w-16 h-16 rounded-full"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipo;
