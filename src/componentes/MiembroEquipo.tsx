import React from "react";
import { FaGithub, FaLinkedin, FaOrcid, FaGoogle, FaUser } from "react-icons/fa";

interface MiembroEquipoProps {
  nombre: string;
  cargo: string;
  imagen?: string;
  github?: string;
  linkedin?: string;
  orcid?: string;
  scholar?: string;
}

const PersonPlaceholder: React.FC = () => (
  <div className="mx-auto w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white shadow-sm text-gray-300">
    <FaUser size={50} />
  </div>
);

const MiembroEquipo: React.FC<MiembroEquipoProps> = ({
  nombre,
  cargo,
  imagen,
  github,
  linkedin,
  orcid,
  scholar,
}) => {
  const iconClass = "w-6 h-6 text-black hover:text-gray-600 transition-colors";
  const tieneImagen = imagen && imagen.trim() !== "";

  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6">
      {tieneImagen ? (
        <img
          src={imagen}
          alt={nombre}
          className="mx-auto w-32 h-32 object-cover rounded-full border-2 border-gray-200"
        />
      ) : (
        <PersonPlaceholder />
      )}
      <h3 className="mt-4 text-xl font-semibold">{nombre}</h3>
      <p className="text-sm text-gray-800 mb-4">{cargo}</p>
      <div className="flex justify-center space-x-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className={iconClass} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className={iconClass} />
          </a>
        )}
        {orcid && (
          <a href={orcid} target="_blank" rel="noopener noreferrer" aria-label="ORCID">
            <FaOrcid className={iconClass} />
          </a>
        )}
        {scholar && (
          <a href={scholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
            <FaGoogle className={iconClass} />
          </a>
        )}
      </div>
    </div>
  );
};

export default MiembroEquipo;