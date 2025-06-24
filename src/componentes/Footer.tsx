import React from 'react';
import BotonArriba from './BotonArriba';

const Footer: React.FC = () => {
  return (
    <>
      <footer
        id="footer"
        className="footer bg-gray-800 bg-opacity-70 text-white p-10 flex flex-col items-center gap-10 relative"
      >
        {/* Contenido central */}
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="font-bold text-lg">Acerca de nosotros</p>
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">datoslab@upla.cl</a>
            <a className="link link-hover">datoslabcl@gmail.com</a>
          </nav>

          {/* Logo DatosLab (la tortuga) debajo del mensaje */}
          <img
            src="images/img/datos_lab.png"
            alt="Logo DatosLab"
            className="w-16 h-16 mt-4"
          />

          {/* Redes sociales debajo de la tortuga */}
          <nav className="flex gap-4 mt-4">
            <a href="https://twitter.com/DatosLab_UPLA" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M24 4.557c-.883.392-... (ruta completa)" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@datoslabupla" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M19.615 3.184... (ruta completa)" />
              </svg>
            </a>
            <a href="https://github.com/DatosLabUPLA" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M12 .297c-6.63... (ruta completa)" />
              </svg>
            </a>
          </nav>
        </div>

        {/* Imagen izquierda UPLA */}
        <aside className="flex justify-center w-full md:w-auto">
          <a href="https://www.upla.cl" target="_blank" rel="noopener noreferrer">
            <img
              src="images/img/logoupla_bn.png"
              alt="Universidad de Playa Ancha"
              className="max-h-16"
            />
          </a>
        </aside>

        {/* Imagen derecha acreditacion */}
        <aside className="flex justify-center w-full md:w-auto">
          <img
            src="images/img/logoacreditacion.png"
            alt="Imagen acreditacion"
            className="max-h-24"
          />
        </aside>
      </footer>

      {/* Botón para volver arriba fuera del footer */}
      <BotonArriba />
    </>
  );
};

export default Footer;