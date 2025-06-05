import React from "react";

interface MiembroEquipoProps {
  nombre: string;
  cargo: string;
  imagen: string;
  github?: string;
  linkedin?: string;
  orcid?: string;
  scholar?: string;
}

const MiembroEquipo: React.FC<MiembroEquipoProps> = ({
  nombre,
  cargo,
  imagen,
  github,
  linkedin,
  orcid,
  scholar,
}) => {
  return (
    <div className="flex items-center gap-6">
      <img
        alt={`Foto de ${nombre}`}
        src={imagen}
        className="rounded-full w-24 border-2 border-gray-300"
      />
      <div className="text-white text-left">
        <h3 className="font-bold text-lg">{nombre}</h3>
        <span className="text-sm text-black-400 block mb-2">{cargo}</span>
        <div className="flex gap-3 text-[var(--color-avocado-naranja)] opacity-80">
          {github && (
            <a href={github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0.3C5.4 0.3 0 5.8 0 12.4c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.7-1.4-1.7-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.1 2 2.8 1.4 3.5 1.1.1-.8.4-1.4.8-1.8-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2.2-1.5 3.2-1.2 3.2-1.2.7 1.7.3 2.9.1 3.2.8.9 1.2 1.9 1.2 3.1 0 4.5-2.7 5.4-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.8 18.6 0.3 12 0.3z"/>
              </svg>
            </a>
          )}
          {linkedin && (
            <a href={linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.4 3 5.4 6.8V24h-5v-7.5c0-1.8 0-4-2.5-4s-2.9 2-2.9 4.1V24h-5V8z"/>
              </svg>
            </a>
          )}
          {orcid && (
            <a href={orcid} aria-label="ORCID" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M127.99 0C57.27 0 0 57.31 0 128s57.27 128 127.99 128C198.7 256 256 198.69 256 128 256 57.31 198.7 0 127.99 0zm-20.33 56.18h20.51v143.64h-20.51V56.18zM70.33 72.65a11.88 11.88 0 01-11.92-11.81c0-6.52 5.33-11.91 11.92-11.91 6.51 0 11.83 5.39 11.83 11.91 0 6.43-5.32 11.81-11.83 11.81zm11.03 127.57H59.3V97.71h22.06v102.51zM204 161.11c-6.47 22.3-26.55 38.52-51.25 38.52-30.17 0-54.57-24.51-54.57-55.14 0-30.64 24.4-55.16 54.57-55.16 24.24 0 44.65 16.56 51.25 38.64h-22.66c-4.94-10.57-15.77-17.9-28.59-17.9-17.45 0-31.63 14.52-31.63 34.41 0 19.78 14.18 34.29 31.63 34.29 12.82 0 23.65-7.32 28.59-17.66H204z"/>
              </svg>
            </a>
          )}
          {scholar && (
            <a href={scholar} aria-label="Google Scholar" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12s4.48 10 10 10 10-4.58 10-10S17.52 2 12 2zm.01 18c-4.42 0-8.01-3.59-8.01-8s3.59-8 8.01-8c4.41 0 8 3.59 8 8s-3.59 8-8 8zM12 6l-5 6h10l-5-6zm0 3.86l1.86 2.24H10.14L12 9.86z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiembroEquipo;
