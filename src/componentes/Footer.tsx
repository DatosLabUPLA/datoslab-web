import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BotonArriba from './BotonArriba';

const Footer: React.FC = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-gray-700/70 text-white py-10"
      >
        <div className="max-w-screen-lg mx-auto flex items-center justify-between px-4">
          {/* Logo UPLA a la izquierda */}
          <a href="https://www.upla.cl" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <img
              src="/images/img/logo_upla.png"
              alt="Universidad de Playa Ancha"
              className="max-h-24"
            />
          </a>

          {/* Contenido central: tortuga con texto y redes */}
          <div className="flex flex-col items-center text-center space-y-4">
            <p className="text-lg font-bold">Acerca de nosotros</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-white">
              <a href="mailto:datoslab@upla.cl" className="hover:underline">
                datoslab@upla.cl
              </a>
              <a href="mailto:datoslabcl@gmail.com" className="hover:underline">
                datoslabcl@gmail.com
              </a>
            </div>
            <img
              src="/images/img/datoslab_url_logo.png"
              alt="Logo DatosLab"
              className="w-32 "
            />
            <div className="flex gap-6 mt-2">
              <a href="https://x.com/DatosLab_UPLA" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <FaXTwitter className="h-6 w-6 fill-current" />
              </a>
              <a href="https://www.youtube.com/@datoslabupla" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="h-6 w-6 fill-current" />
              </a>
              <a href="https://github.com/DatosLabUPLA" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="h-6 w-6 fill-current" />
              </a>
              <a href="https://www.linkedin.com/company/datoslab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="h-6 w-6 fill-current" />
              </a>
            </div>
          </div>

          {/* Logo acreditación a la derecha - ahora con enlace */}
          <aside className="flex-shrink-0">
            <a href="https://www.upla.cl" target="_blank" rel="noopener noreferrer">
              <img
                src="images/img/logoacreditacion.png"
                alt="Imagen acreditacion"
                className="max-h-32"
              />
            </a>
          </aside>
        </div>
      </footer>

      {/* Botón para volver arriba fuera del footer */}
      <BotonArriba />
    </>
  );
};

export default Footer;