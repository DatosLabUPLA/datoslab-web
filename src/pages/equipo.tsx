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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Equipo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {miembros.map((miembro) => (
          <div key={miembro.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{miembro.nombre}</h2>
            <p className="text-md">{miembro.titulo}</p>
            <p className="text-sm text-gray-600">{miembro.afiliacion}</p>
            <p className="text-sm text-gray-600">{miembro.categoria}</p>
            <a href={`mailto:${miembro.email}`} className="text-blue-500">
              {miembro.email}
            </a>
            <p className="mt-2">
              <span className={`badge ${miembro.activo === "TRUE" ? "bg-green-500" : "bg-red-500"}`}>
                {miembro.activo === "TRUE" ? "Activo" : "Inactivo"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipo;


