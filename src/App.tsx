import React from "react";

// Tipos para la estructura del componente Navbar
interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  menuItems: string[];
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt, menuItems }) => (
  <nav className="navbar bg-gradient-to-r shadow-lg justify-center">
    <div className="flex items-center space-x-4">
      <img
        src={logoSrc}
        alt={logoAlt}
        style={{ maxWidth: "70px", maxHeight: "70px" }}
        className="img-fluid"
      />
      <a className="btn btn-ghost normal-case text-2xl font-bold text-current">DatosLab</a>
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
      <label className="flex cursor-pointer gap-2">
        <div className="join join-horizontal">
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Default"
            value="default"
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="dark"
            value="dark"
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Retro"
            value="retro"
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Aqua"
            value="aqua"
          />
        </div>
      </label>
    </div>
  </nav>
);

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

      {/* Main Content */}
      <section className="p-10 text-center bg-gradient-to-r">
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
      <section className="p-10 text-center bg-gradient-to-r shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-5">Somos el laboratorio de Data Science</h1>
          <p className="text-lg mb-5">
            Nuestra investigación se aplica a temáticas diversas y con orientación social.
          </p>
        </div>
      </section>

        
      {/* Slider de imagenes */}
    <section>
      <div className="carousel w-full">
      <div id="item1" className="carousel-item w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="w-full" />
      </div>
      <div id="item2" className="carousel-item w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          className="w-full" />
      </div>
      <div id="item3" className="carousel-item w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full" />
      </div>
      <div id="item4" className="carousel-item w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full" />
      </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </section>

      {/* Líneas de Investigación */}
      <section>
        <div className="container mx-auto mt-8">
          <h2 className="text-4xl font-bold text-center mb-8">Líneas de Investigación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Open Data", description: "Datos abiertos y su impacto en la sociedad", iconSrc: "img/iconos/icono1.png" },
              { title: "Data Analytics", description: "Análisis de datos y su aplicación en la toma de decisiones", iconSrc: "img/iconos/icono2.png" },
              { title: "Networks", description: "Redes complejas y su aplicación en la vida real", iconSrc: "img/iconos/icono3.png" },
              { title: "Data Visualization", description: "Visualización de datos y su impacto en la comunicación", iconSrc: "img/iconos/icono4.png" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-5 text-center">
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
        <div className="container mx-auto mt-8 mb-8">
          <h2 className="text-4xl font-bold text-center mb-8">Publicaciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {[
              "img/portfolio/thumbnails/research1.png",
              "img/portfolio/thumbnails/sistemadesarrollo.png",
              "img/portfolio/thumbnails/3.png",
              "img/portfolio/thumbnails/research1.png"
            ].map((src, index) => (
              <a key={index} className="portfolio-box" href={src} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={`Research ${index + 1}`} className="rounded-lg shadow-lg hover:opacity-80 transition duration-300" />
              </a>
            ))}
          </div>
        </div>
      </section>
            
        {/* Science mapping */}
<section>
  <div className="container mx-auto mt-8 mb-8">
    <h2 className="text-4xl font-bold text-center mb-5">Science Mapping</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {[
        {
          description: "Mendoza, M., & Guevara, M. R. (2017). Cienciometría: factores de impacto y mapas de la ciencia. Bits de Ciencia, 15, 8–15.",
          badges: [
            <a href="/publications/2017-Bitsdeciencia15-Cienciometria.pdf" target="_blank" rel="noopener noreferrer">
              <div className="badge badge-primary badge-outline">PAPER</div>
            </a>,
            <a href="/publications/journal/Bitsdeciencia15.pdf" target="_blank" rel="noopener noreferrer">
            <div className="badge badge-outline">FULL JOURNAL</div></a>,

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
            <a href="publications/2016-PublishingsPatternsINBRIC-publications.pdf" target="_blank" rel="noopener noreferrer">
              <div className="badge badge-primary badge-outline">PAPER</div>
            </a>,
          ]
        },
        {
          description: "Guevara, M., & Mendoza, M. (2013). Revealing Comparative Advantages in the Backbone of Science. In Proceedings of the 2013 Workshop on Computational Scientometrics: Theory & Applications (pp. 31–36). San Francisco, CA, USA: ACM.",
          badges: [
            <a href="https://dl.acm.org/doi/10.1145/2508497.2508503" target="_blank" rel="noopener noreferrer">
              <div className="badge badge-outline">PROCEEDINGS</div>
            </a>,
          ]
        }
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

      {/* Participation */}
      
      <section>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-5">Participation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
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
                  <a href="publications/2016-PublishingsPatternsINBRIC-publications.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-primary badge-outline">PAPER</div>
                  </a>,
                ]
              },
              {
                description: "Guevara, M., & Mendoza, M. (2013). Revealing Comparative Advantages in the Backbone of Science. In Proceedings of the 2013 Workshop on Computational Scientometrics: Theory & Applications (pp. 31–36). San Francisco, CA, USA: ACM.",
                badges: [
                  <a href="https://dl.acm.org/doi/10.1145/2508497.2508503" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-outline">PROCEEDINGS</div>
                  </a>,
                ]
              }
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
      


      {/* Footer */}
      <footer className="footer footer-center p-10 mt-8">
        <aside>
          <a href="https://www.upla.cl" target="_blank" rel="noopener noreferrer">
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
            {[
              { path: "M24 4.557c-.883...", alt: "Twitter" },
              { path: "M19.615 3.184c...", alt: "Facebook" },
              { path: "M9 8h-3v4h3...", alt: "LinkedIn" }
            ].map((icon, index) => (
              <a key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d={icon.path}></path>
                </svg>
              </a>
            ))}
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default App;
