import React, { useEffect, useState } from "react";

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
}

const TarjetaProyecto: React.FC<{ proyecto: Proyecto }> = ({ proyecto }) => (
  <div className="border p-4 rounded-lg shadow-md bg-white">
    <h2 className="text-xl font-semibold">{proyecto.proyecto}</h2>
    <p className="text-md text-gray-700">{proyecto.descripcion}</p>
    <p className="text-sm text-gray-500">Año: {proyecto.anio}</p>
    <p className="text-sm text-gray-500">Tipo: {proyecto.tipo}</p>
    <p className="text-sm text-gray-500">Encargado: {proyecto.persona_a_cargo}</p>
    <p
      className={`mt-2 badge ${
        proyecto.estado === "finalizado" ? "bg-gray-500" : "bg-green-500"
      }`}
    >
      {proyecto.estado}
    </p>
    <div className="mt-3 space-y-2">
      {proyecto.url && (
        <a
          href={proyecto.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[var(--color-avocado-naranja)] hover:underline"
        >
          🌐 Ver Proyecto
        </a>
      )}
      {proyecto.github && (
        <a
          href={proyecto.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[var(--color-avocado-naranja)] hover:underline"
        >
          💻 Código en GitHub
        </a>
      )}
      {proyecto.tesis && (
        <a
          href={proyecto.tesis}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[var(--color-avocado-naranja)] hover:underline"
        >
          📄 Ver Tesis
        </a>
      )}
      {proyecto.link_demo && (
        <a
          href={proyecto.link_demo}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[var(--color-avocado-naranja)] hover:underline"
        >
          🎥 Ver Demo
        </a>
      )}
    </div>
  </div>
);

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

  if (loading)
    return (
      <div className="p-10 text-lg flex justify-center items-center space-x-4 mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (error) return <div className="p-10 text-red-500">Error: {error}</div>;

  const proyectosActivos = proyectos.filter((p) => p.estado !== "finalizado");
  const proyectosInactivos = proyectos.filter((p) => p.estado === "finalizado");

  return (
    <div className="p-10 mt-32">
      <h1 className="text-center text-3xl font-bold mb-5">Nuestros Proyectos</h1>

      <p className="text-lg mb-5 text-center">Proyectos Activos</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectosActivos.map((proyecto, idx) => (
          <TarjetaProyecto key={idx} proyecto={proyecto} />
        ))}
      </div>

      <p className="text-lg mb-5 text-center mt-16">Proyectos Finalizados</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectosInactivos.map((proyecto, idx) => (
          <TarjetaProyecto key={idx} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
