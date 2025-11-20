import React from "react";
import MiembroEquipo from "../componentes/MiembroEquipo";

const miembros = [
  {
    nombre: "Miguel Guevara",
    cargo: "Director DatosLab",
    imagen: "/images/img/portfolio/img/team/miguel_guevara.png",
    github: "#",
    linkedin: "https://www.linkedin.com/in/miguel-guevara-albornoz/",
    orcid: "https://orcid.org/0000-0002-2319-5184",
    scholar: "https://scholar.google.com/citations?user=n1qKMYwAAAAJ&hl=en",
  },
  {
    nombre: "Ezequiel Lagos",
    cargo: "Ingeniero en informática",
    imagen: "/images/img/portfolio/img/team/ezequiel_lagos.png",
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
      className="bg-white text-black p-10 lg:p-40 shadow-lg mt-10"
    >
      <div className="mx-auto max-w-screen-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">¡Conoce al equipo!</h1>
        <p className="text-base md:text-lg mb-8">Equipo DatosLab</p>
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
