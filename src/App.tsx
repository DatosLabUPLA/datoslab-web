import React from "react";
import { useEffect, useState } from "react";

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  menuItems: string[];
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt, menuItems }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
  };

  return (
    <section className="z-10 bg-black fixed w-full" style={{ top: 0, left: 0, right: 0 }}>
      <nav className="navbar bg-gradient-to-r justify-center fixed bg-base-100">
        <div className="flex items-center space-x-4">
          <img
            src={logoSrc}
            alt={logoAlt}
            style={{ maxWidth: "70px", maxHeight: "70px" }}
            className="img-fluid"
          />
          <a className="btn btn-ghost normal-case text-2xl font-bold text-current">
            DatosLab
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a className="hover:text-gray-300 text-current">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          {/* Menú desplegable de temas */}
          <div className="navbar-end mr-auto dropdown dropdown-hover mb-1">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg"
            >
              Temas
              <svg
                width="12px"
                height="12px"
                className="inline-block h-2 w-2 fill-current opacity-60 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content bg-base-300 rounded-lg z-[1] w-52 p-2 shadow-lg"
            >
              <li>
                <label className="cursor-pointer flex items-center gap-2">
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller"
                    aria-label="Light"
                    value="light"
                    onChange={handleThemeChange}
                    checked={theme === "light"}
                  />
                  <span className="text-sm">Light</span>
                </label>
              </li>
              <li>
                <label className="cursor-pointer flex items-center gap-2">
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller"
                    aria-label="Dark"
                    value="dark"
                    onChange={handleThemeChange}
                    checked={theme === "dark"}
                  />
                  <span className="text-sm">Dark</span>
                </label>
              </li>
              <li>
                <label className="cursor-pointer flex items-center gap-2">
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller"
                    aria-label="Retro"
                    value="retro"
                    onChange={handleThemeChange}
                    checked={theme === "retro"}
                  />
                  <span className="text-sm">Retro</span>
                </label>
              </li>
              <li>
                <label className="cursor-pointer flex items-center gap-2">
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller"
                    aria-label="Aqua"
                    value="aqua"
                    onChange={handleThemeChange}
                    checked={theme === "aqua"}
                  />
                  <span className="text-sm">Aqua</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <header>
        <Navbar
          logoSrc="img/datos_lab.png"
          logoAlt="DatosLab"
          menuItems={["Acerca de", "Líneas", "Temas", "Publicaciones", "Proyectos", "Contacto"]}
        />
      </header>

      {/* Hero */}
      <section style={{marginTop: "80px",}}>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Que hacemos */}
      <section className="p-10 text-center bg-gradient-to-r my-60">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-5">
            Cómo hacer simple la complejidad de los datos
          </h1>
          <p className="mb-5">
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

    {/* Quienes somos */}
    <section className="bg-gray-800 bg-opacity-30 p-60 text-center bg-gradient-to-r shadow-lg my-16">
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold mb-5">Somos el laboratorio de Data Science</h1>
        <p className="text-lg mb-5">
          Nuestra investigación se aplica a temáticas diversas y con orientación social.
        </p>
      </div>
    </section>

      {/* Líneas de Investigación */}
    <section className="p-10 text-center bg-gradient-to-r my-60">
      <div className="w-full px-4 mt-8">
        <h2 className="text-4xl font-bold text-center mb-8">Líneas de Investigación</h2>
        <div className="flex flex-wrap justify-between gap-5">
          {[ 
            { title: "Open Data", description: "Potenciamos la participación ciudadana a través del uso de datos abiertos y de nuevas aplicaciones", iconSrc: "img/iconos/icono1.png" },
            { title: "Data Analytics", description: "Buscamos patrones significativos en los datos a través de algoritmos computacionales y modelos estadísticos", iconSrc: "img/iconos/icono2.png" },
            { title: "Networks", description: "Creamos y utilizamos redes complejas basadas en interacciones sociales o información de producción", iconSrc: "img/iconos/icono3.png" },
            { title: "Data Visualization", description: "Creamos y aplicamos las mejores técnicas de visualización de datos de forma estática o interactiva", iconSrc: "img/iconos/icono4.png" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-5 text-center w-full sm:w-[48%] md:w-[23%]">
              <img src={item.iconSrc} alt={`Icono ${item.title}`} className="w-16 h-16 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-blue-500">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Publicaciones */}
    <section>
      <div className="bg-gray-800 bg-opacity-30 mt-40 mb-40 py-40">
        <h2 className="text-4xl font-bold text-center mb-8">Publicaciones</h2>
        <div className="grid grid-cols-4 gap-5">
          {[
            "img/portfolio/thumbnails/research1.png",
            "img/portfolio/thumbnails/sistemadesarrollo.png",
            "img/portfolio/thumbnails/3.png",
            "img/portfolio/thumbnails/research1.png"
          ].map((src, index) => (
            <a key={index} className="portfolio-box" href={src} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={`Research ${index + 1}`}
                className="p-2 w-full h-[400px] object-cover rounded-lg shadow-lg hover:opacity-80 transition duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
   
    {/* Science mapping */}
    <section className="py-20 px-40">
      <div className="mx-auto mt-24 mb-24 max-w-screen-lg">
        <h2 className="text-4xl font-bold text-center mb-16">Science Mapping</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-28">
          {[
            {
              description: "Mendoza, M., & Guevara, M. R. (2017). Cienciometría: factores de impacto y mapas de la ciencia. Bits de Ciencia, 15, 8–15.",
              badges: [
                <a href="/publications/2017-Bitsdeciencia15-Cienciometria.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-primary badge-outline">PAPER</div>
                </a>,
                <a href="/publications/journal/Bitsdeciencia15.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">FULL JOURNAL</div>
                </a>,
                <a href="https://uplatv.cl/2018/10/16/un-recorrido-por-los-espacios-de-investigacion/" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">VIDEO</div>
                </a>
              ]
            },
            {
              description: "Guevara, M. R. (2017). De cómo las Galápagos nos enseñan que la migración y la diversidad son importantes para el desarrollo científico, la innovación y la economía. Medium.",
              badges: [
                <a href="https://mguevaraa.medium.com/de-c%C3%B3mo-las-gal%C3%A1pagos-nos-ense%C3%B1an-que-la-migraci%C3%B3n-y-la-diversidad-son-importantes-para-el-2b7efb257826" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">POST</div>
                </a>
              ]
            },
            {
              description: "Guevara, M. R., Hartmann, D., Aristarán, M., Mendoza, M., & Hidalgo, C. A. (2016). The research space: using career paths to predict the evolution of the research output of individuals, institutions, and nations. Scientometrics, 109(3), 1695–1709.",
              badges: [
                <a href="https://link.springer.com/article/10.1007/s11192-016-2125-9" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-primary badge-outline">PAPER</div>
                </a>,
                <a href="https://arxiv.org/abs/1602.08409" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">PREPRINT</div>
                </a>,
                <a href="https://uplatv.cl/2018/10/16/un-recorrido-por-los-espacios-de-investigacion/" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">VIDEO</div>
                </a>
              ]
            },
            {
              description: "Guevara, M. R., Hartmann, D., & Mendoza, M. (2016). diverse: an R Package to Measure Diversity in Complex Systems. The R Journal, 8(2), 60–78.",
              badges: [
                <a href="https://journal.r-project.org/archive/2016/RJ-2016-033/" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-primary badge-outline">PAPER</div>
                </a>,
                <a href="https://cran.r-project.org/web/packages/diverse/index.html" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">R-PACKAGE</div>
                </a>
              ]
            },
            {
              description: "Guevara, M. R., & Mendoza, M. (2016). Publishing Patterns in BRIC Countries: A Network Analysis. Publications, 4(3), 20.",
              badges: [
                <a href="/publications/2016-PublishingsPatternsINBRIC-publications.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-primary badge-outline">PAPER</div>
                </a>
              ]
            },
            {
              description: "Guevara, M., & Mendoza, M. (2013). Revealing Comparative Advantages in the Backbone of Science. In Proceedings of the 2013 Workshop on Computational Scientometrics: Theory & Applications (pp. 31–36). San Francisco, CA, USA: ACM.",
              badges: [
                <a href="https://dl.acm.org/doi/10.1145/2508497.2508503" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">PROCEEDINGS</div>
                </a>
              ]
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-gray-600 mb-3">{item.description}</p>
              <div className="badge-container">
                {item.badges.map((badge, badgeIndex) => (
                  <div key={badgeIndex} className="inline-block m-1">
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Participation */}
    <section className="py-20 px-40">
      <div className="mx-auto mt-24 mb-24 max-w-screen-lg">
        <h2 className="text-4xl font-bold text-center mb-16">Participation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-28">
          {[
            {
              description: "Guevara, M.R., & Pacheco,C (2018) Los datos abiertos de Chile. Serie de Documentos técnicos Facultad de ingeniería.(In press).",
              badges: [
                <a href="/publications/2018-LosDatosAbiertosDeChile.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">PREPRINT</div>
                </a>
              ]
            },
            {
              description: "Guevara, M. R. (2017). De cómo las Galápagos nos enseñan que la migración y la diversidad son importantes para el desarrollo científico, la innovación y la economía. Medium.",
              badges: [
                <a href="https://mguevaraa.medium.com/de-c%C3%B3mo-las-gal%C3%A1pagos-nos-ense%C3%B1an-que-la-migraci%C3%B3n-y-la-diversidad-son-importantes-para-el-2b7efb257826" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">PAPER</div>
                </a>
              ]
            },
            {
              description: "Guevara, M. R., Hartmann, D., Aristarán, M., Mendoza, M., & Hidalgo, C. A. (2016). The research space: using career paths to predict the evolution of the research output of individuals, institutions, and nations. Scientometrics, 109(3), 1695–1709.",
              badges: [
                <a href="https://link.springer.com/article/10.1007/s11192-016-2125-9" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-primary badge-outline">PAPER</div>
                </a>,
                <a href="https://arxiv.org/abs/1602.08409" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">PREPRINT</div>
                </a>,
                <a href="https://uplatv.cl/2018/10/16/un-recorrido-por-los-espacios-de-investigacion/" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">VIDEO</div>
                </a>
              ]
            },
            {
              description: "Guevara, M. R., Hartmann, D., & Mendoza, M. (2016). diverse: an R Package to Measure Diversity in Complex Systems. The R Journal, 8(2), 60–78.",
              badges: [
                <a href="https://journal.r-project.org/archive/2016/RJ-2016-033/" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-primary badge-outline">PAPER</div>
                </a>,
                <a href="https://cran.r-project.org/web/packages/diverse/index.html" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">R-PACKAGE</div>
                </a>
              ]
            },
            {
              description: "Guevara, M. R., & Mendoza, M. (2016). Publishing Patterns in BRIC Countries: A Network Analysis. Publications, 4(3), 20.",
              badges: [
                <a href="/publications/2016-PublishingsPatternsINBRIC-publications.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-primary badge-outline">PAPER</div>
                </a>
              ]
            },
            {
              description: "Guevara, M., & Mendoza, M. (2013). Revealing Comparative Advantages in the Backbone of Science. In Proceedings of the 2013 Workshop on Computational Scientometrics: Theory & Applications (pp. 31–36). San Francisco, CA, USA: ACM.",
              badges: [
                <a href="https://dl.acm.org/doi/10.1145/2508497.2508503" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">PROCEEDINGS</div>
                </a>
              ]
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-gray-600 mb-3">{item.description}</p>
              <div className="badge-container">
                {item.badges.map((badge, badgeIndex) => (
                  <div key={badgeIndex} className="inline-block m-1">
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Inequality */}
    <section className="py-20 px-40">
      <div className="mx-auto mt-16 mb-16 max-w-screen-lg">
        <h2 className="text-4xl font-bold text-center mb-12">Inequality</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-28">
          {[
            {
              description: "Guevara, M.R., & Pacheco,C (2018) Los datos abiertos de Chile. Serie de Documentos técnicos Facultad de ingeniería.(In press).",
              badges: [
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">POST</div>
                </a>,
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">INTERACTIVE NOTEBOOK</div>
                </a>
              ]
            },
            {
              description: "Guevara, M. R. (2017). De cómo las Galápagos nos enseñan que la migración y la diversidad son importantes para el desarrollo científico, la innovación y la economía. Medium.",
              badges: [
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">PAPER</div>
                </a>,
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">PREPRINT</div>
                </a>
              ]
            },
            {
              description: "Guevara, M. R., Hartmann, D., Aristarán, M., Mendoza, M., & Hidalgo, C. A. (2016). The research space: using career paths to predict the evolution of the research output of individuals, institutions, and nations. Scientometrics, 109(3), 1695–1709.",
              badges: [
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-primary badge-outline">FULL JOURNAL</div>
                </a>,
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">PAPER EN</div>
                </a>,
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="badge badge-outline">PAPER ES</div>
                </a>
              ]
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-gray-600 mb-3">{item.description}</p>
              <div className="badge-container">
                {item.badges.map((badge, badgeIndex) => (
                  <div key={badgeIndex} className="inline-block m-1">
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  

    {/* Descargar R-package */}
      <section>
      <div className="bg-gray-800 bg-opacity-30 text-base-content rounded p-10 flex flex-col items-center text-center space-y-6">
          <h2 className="text-4xl font-bold text-center mt-8 mb-5">Descarga nuestro R-package para medir diversidad en Sistemas Complejos!</h2>
          <div className="flex justify-center">
            {[
              {
                description: "Guevara, M.R., & Pacheco,C (2018) Los datos abiertos de Chile. Serie de Documentos técnicos Facultad de ingeniería.(In press).",
                badges: [
                  <a href="https://cran.r-project.org/web/packages/diverse/index.html" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-outline">POST</div>
                  </a>,
                  <a href="https://journal.r-project.org/archive/2016/RJ-2016-033/RJ-2016-033.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-outline">INTERACTIVE NOTEBOOK</div>
                  </a>
                ]
              },
              
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-5 text-center">
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="badge-container">
                  {item.badges.map((badge, badgeIndex) => (
                    <div key={badgeIndex} className="inline-block m-1">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider de imágenes */}
      <section className="relative mt-8" style={{ marginTop: "80px" }}>
        <div className="carousel w-full space-x-4 overflow-hidden">
          {/* Imagen 1 */}
          <div id="slide1" className="carousel-item relative flex-shrink-0 w-[80%] mx-auto">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full h-[500px] object-cover rounded-lg"
              alt="Image 1"
            />
            {/* Flechas de navegación */}
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Imagen 2 */}
          <div id="slide2" className="carousel-item relative flex-shrink-0 w-[80%] mx-auto">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full h-[500px] object-cover rounded-lg"
              alt="Image 2"
            />
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Imagen 3 */}
          <div id="slide3" className="carousel-item relative flex-shrink-0 w-[80%] mx-auto">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full h-[500px] object-cover rounded-lg"
              alt="Image 3"
            />
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Imagen 4 */}
          <div id="slide4" className="carousel-item relative flex-shrink-0 w-[80%] mx-auto">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full h-[500px] object-cover rounded-lg"
              alt="Image 4"
            />
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </section>

    {/* Contacto y ubicación */}
      <section>
        <div className="text-base-content rounded p-10 flex flex-col items-center text-center space-y-6">
          {/* Encabezado */}
          <p className="text-2xl font-bold">
            Nos encanta debatir ideas y participar en nuevos proyectos!
          </p>
          <p className="text-xl">
            Recibiremos postulaciones de nuevos estudiantes y postdocs durante 2025, contáctanos.
          </p>

          {/* Dirección */}
          <div>
            <p className="text-lg font-semibold">Nos encontramos en:</p>
            <p className="text-lg">Subida Leopoldo Carvallo 270, 4to piso, Valparaíso, CHILE.</p>
          </div>

          {/* Información de contacto en una sola línea */}
          <div className="flex space-x-8 mt-4">
            {/* Teléfono */}
            <div>
              <p className="text-lg font-semibold">Teléfono:</p>
              <p className="text-lg">+56 32 2 500 537</p>
            </div>

            {/* Canal */}
            <div>
              <p className="text-lg font-semibold">Canal:</p>
              <p className="text-lg">DatosLab UPLA [Canal]</p>
            </div>

            {/* Email */}
            <div>
              <p className="text-lg font-semibold">Correo electrónico:</p>
              <p className="text-lg">
                <a href="mailto:miguel.guevara@upla.cl" className="link link-hover text-blue-400">
                  miguel.guevara@upla.cl
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-800 bg-opacity-70 text-base-content rounded p-10 flex items-center justify-center gap-20">
        {/* Imagen izquierda */}
        <aside>
          <a href="https://www.upla.cl" target="_blank" rel="noopener noreferrer">
            <img
              src="img/logoupla1.png"
              className="img-fluid"
              alt="Universidad de Playa Ancha"
              style={{ maxWidth: "400px", maxHeight: "400px" }}
            />
          </a>
        </aside>

        {/* Contenido central */}
        <div className="flex flex-col items-center text-center">
          <p className="font-bold">
            Universidad de Playa Ancha
            <br />
            Fundada el 1 de abril de 1948
          </p>

          <nav className="grid grid-flow-col gap-4 mt-4">
            <a href="#" className="link link-hover">Acerca de nosotros</a>
            <a href="mailto:datoslab@upla.cl" className="link link-hover">datoslab@upla.cl</a>
            <a href="mailto:datoslabcl@gmail.com" className="link link-hover">datoslabcl@gmail.com</a>
          </nav>

          {/* Redes sociales */}
          <nav className="grid grid-flow-col gap-4 mt-4">
            <a href="https://twitter.com/DatosLab_UPLA" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@datoslabupla" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://github.com/DatosLabUPLA" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.76-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.304-.54-1.526.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.65.24 2.872.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .322.21.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </nav>

          {/* Botón para volver al inicio */}
          <div className="flex flex-col items-center mt-4">
            <img
              src="img/datos_lab.png"
              alt="Logo DatosLab"
              className="w-16 h-16 mb-2"/>
            <a
              href="#top"
              className="btn btn-primary text-white flex items-center transition-transform transform hover:translate-y-[-5px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current mr-2"
              >
                <path d="M12 19V5M5 12l7-7 7 7"></path>
              </svg>
              Volver al inicio
            </a>
          </div>
        </div>

        {/* Imagen derecha */}
        <aside>
          <img
            src="img/logoacreditacion.png"
            className="img-fluid"
            alt="Imagen acreditacion"
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
        </aside>
      </footer>
    </div>
  );
};

export default App;
