import React from "react";
import MiembroEquipo from "../componentes/MiembroEquipo"; // ajusta la ruta según tu estructura

const miembros = [
  {
    nombre: "Miguel Guevara",
    cargo: "Director DatosLab",
    imagen: "img/portfolio/img/team/miguel_guevara.png",
    github: "#",
    linkedin: "https://www.linkedin.com/in/miguel-guevara-albornoz/",
    orcid: "https://orcid.org/0000-0002-2319-5184",
    scholar: "https://scholar.google.com/citations?user=n1qKMYwAAAAJ&hl=en",
  },
  {
    nombre: "Ezequiel Lagos",
    cargo: "Ingeniero en informática",
    imagen: "img/portfolio/img/team/ezequiel_lagos.png",
    github: "#",
    linkedin: "#",
    orcid: undefined,
    scholar: undefined,
  },
];

const Equipocom: React.FC = () => {
  return (
    <section
      id="equipo"
      className="bg-black bg-opacity-70 p-10 lg:p-40 text-center bg-gradient-to-r shadow-lg mt-10"
    >
      <div className="container mx-auto p-5">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-10">
          ¡Conoce al equipo!
        </h1>
        <p className="text-white text-base md:text-lg mb-10">
          Equipo DatosLab
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {miembros.map((miembro, index) => (
            <MiembroEquipo key={index} {...miembro} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipocom;
