import React from 'react';
import BotonArriba from './BotonArriba';

const Footer: React.FC = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-gray-700 bg-opacity-70 text-white py-10"
      >
        <div className="max-w-screen-lg mx-auto flex items-center justify-between px-4">
          {/* Logo UPLA a la izquierda */}
          <a href="https://www.upla.cl" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <img
              src="/images/img/logoupla_bn.png"
              alt="Universidad de Playa Ancha"
              className="max-h-16"
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
              src="/images/img/datos_lab.png"
              alt="Logo DatosLab"
              className="w-16 h-16"
            />
            <div className="flex gap-6 mt-2">
              <a href="https://twitter.com/DatosLab_UPLA" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@datoslabupla" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816V8.0l8 4-8 4z" />
                </svg>
              </a>
              <a href="https://github.com/DatosLabUPLA" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.76-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.304-.54-1.526.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.65.24 2.872.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .322.21.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Logo acreditación a la derecha - ahora con enlace */}
          <aside className="flex-shrink-0">
            <a href="https://www.upla.cl" target="_blank" rel="noopener noreferrer">
              <img
                src="images/img/logoacreditacion.png"
                alt="Imagen acreditacion"
                className="max-h-24"
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