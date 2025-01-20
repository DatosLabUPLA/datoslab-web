import React from "react";

function App() {
  return (
    <div>
      <header>
      {/* Navbar */}
      <nav className="navbar bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg justify-center">
        <div className="flex items-center space-x-4">
          <img src="img/datos_lab.png" style={{ maxWidth: "70px", maxHeight: "70px" }} className="img-fluid" alt="DatosLab" />
          <a className="btn btn-ghost normal-case text-2xl font-bold">DatosLab</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:text-gray-300">Acerca de</a>
            </li>
            <li>
              <a className="hover:text-gray-300">Líneas</a>
            </li>
            <li>
              
              <details>
                <summary className="hover:text-gray-300">Temas</summary>
                <ul className="bg-white text-black rounded-box shadow-lg">
                  <li>
                    <a className="hover:bg-gray-100">Open Data</a>
                  </li>
                  <li>
                    <a className="hover:bg-gray-100">Data Analytics</a>
                  </li>
                  <li>
                    <a className="hover:bg-gray-100">Networks</a>
                  </li>
                  <li>
                    <a className="hover:bg-gray-100">Data Visualization</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="hover:text-gray-300">Publicaciones</a>
            </li>
            <li>
              <a className="hover:text-gray-300">Proyectos</a>
            </li>
            <li>
              <a className="hover:text-gray-300">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <label className="flex cursor-pointer gap-2">
  <div className="join join-horizontal">
  <input
    type="radio"
    name="theme-buttons"
    className="btn theme-controller join-item"
    aria-label="Default"
    value="default" />
    <input
    type="radio"
    name="theme-buttons"
    className="btn theme-controller join-item"
    aria-label="dark"
    value="dark" />
  <input
    type="radio"
    name="theme-buttons"
    className="btn theme-controller join-item"
    aria-label="Retro"
    value="retro" />
  <input
    type="radio"
    name="theme-buttons"
    className="btn theme-controller join-item"
    aria-label="Aqua"
    value="aqua" />
</div>
</label>
        </div>
      </nav>
      </header>
      {/* Main Content */}
      <section
  className="p-10 text-center"
  style={{ backgroundColor: "#f3f4f6" }}
>
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold mb-5 text-blue-600">
      Cómo hacer simple la complejidad de los datos
    </h1>
    <p className="text-gray-600 mb-5">
      Nuestro laboratorio encuentra patrones y valor en datos interrelacionados -y abundantes- a través de nuevos métodos y visualizaciones
    </p>
    <a
      href="#"
      className="btn btn-primary text-white font-bold py-2 px-4 rounded-lg shadow-lg"
    >
      COMENZAR!
    </a>
  </div>
</section>
      <body>
      <section
          className="p-10 text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
          id="Acerca de"
        >
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-5">
              Somos el laboratorio de Data Science de la Facultad de Ingeniería en la Universidad de Playa Ancha
            </h1>
            <p className="text-lg mb-5">
              Nuestra investigación se aplica a temáticas diversas y con orientación social.
            </p>
            <a
              className="text-white underline"
              href="https://orcid.org/0000-0002-2319-5184"
              target="_blank"
              rel="noopener noreferrer"
            >
              Miguel R. Guevara
            </a>
          </div>
        </section>

          <section>
            <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-5">Líneas de Investigación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-lg shadow-lg p-5 text-center">
            <img
              src="img/iconos/icono1.png"
              alt="Icono Open Data"
              className="w-16 h-16 mx-auto mb-3"
            />
            <h3 className="text-2xl font-bold text-blue-500">Open Data</h3>
            <p className="text-gray-600">
              Datos abiertos y su impacto en la sociedad
            </p>
          </div>
            <div className="bg-white rounded-lg shadow-lg p-5">
            <img
              src="img/iconos/icono2.png"
              alt="Icono Open Data"
              className="w-16 h-16 mx-auto mb-3"
            />
              <h3 className="text-2xl font-bold text-blue-500">Data Analytics</h3>
              <p className="text-gray-600">
                Análisis de datos y su aplicación en la toma de decisiones
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5">
            <img
              src="img/iconos/icono3.png"
              alt="Icono Open Data"
              className="w-16 h-16 mx-auto mb-3"
            />
              <h3 className="text-2xl font-bold text-blue-500">Networks</h3>
              <p className="text-gray-600">
                Redes complejas y su aplicación en la vida real
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5">
            <img
              src="img/iconos/icono4.png"
              alt="Icono Open Data"
              className="w-16 h-16 mx-auto mb-3"
            />
              <h3 className="text-2xl font-bold text-blue-500">Data Visualization</h3>
              <p className="text-gray-600">
                Visualización de datos y su impacto en la comunicación
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-5">Publicaciones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {/* Imagen 1 */}
          <a
            className="portfolio-box"
            href="img/portfolio/thumbnails/research1.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="img/portfolio/thumbnails/research1.png"
              alt="Research 1"
              className="rounded-lg shadow-lg hover:opacity-80 transition duration-300"
            />
          </a>
          {/* Imagen 2 */}
          <a
            className="portfolio-box"
            href="img/portfolio/thumbnails/sistemadesarrollo.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="img/portfolio/thumbnails/sistemadesarrollo.png"
              alt="Sistema Desarrollo"
              className="rounded-lg shadow-lg hover:opacity-80 transition duration-300"
            />
          </a>
          {/* Imagen 3 */}
          <a
            className="portfolio-box"
            href="img/portfolio/thumbnails/3.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="img/portfolio/thumbnails/3.png"
              alt="Research 3"
              className="rounded-lg shadow-lg hover:opacity-80 transition duration-300"
            />
          </a>
          {/* Imagen 4 */}
          <a
            className="portfolio-box"
            href="img/portfolio/thumbnails/research1.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="img/portfolio/thumbnails/research1.png"
              alt="Research 1"
              className="rounded-lg shadow-lg hover:opacity-80 transition duration-300"
            />
          </a>
        </div>
      </div>
    </section>
    <section>
      
    </section>
      </body>
      {/* Footer */}

            <footer className="footer footer-center bg-primary text-primary-content p-10">
        <aside>
          <a href="https:www.upla.cl" target="_blank">
            <img src="img/logo_upla.png" className="img-fluid" alt="Universidad de Playa Ancha" />
          </a>
          <p className="font-bold">
            Universidad de Playa Ancha
            <br />
            Fundada el 1 de abril de 1948
          </p>
          <p>DatosLab © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;