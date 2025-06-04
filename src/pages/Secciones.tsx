import React, { useState } from "react";

const Secciones: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
{/* Pestañas y Secciones */}
<section className="tabs-container">
<div role="tablist" className="tabs tabs-bordered font-bold">
  <a
    role="tab"
    className={`tab text-lg ${activeTab === 1 ? "tab-active" : ""}`}
    onClick={() => handleTabChange(1)}>Science Mapping
  </a>
  <a
    role="tab"
    className={`tab text-lg ${activeTab === 2 ? "tab-active" : ""}`}
    onClick={() => handleTabChange(2)}>Participation
  </a>
  <a
    role="tab"
    className={`tab text-lg ${activeTab === 3 ? "tab-active" : ""}`}
    onClick={() => handleTabChange(3)}>Inequality
  </a>
  <a
    role="tab"
    className={`tab text-lg ${activeTab === 4 ? "tab-active" : ""}`}
    onClick={() => handleTabChange(4)}>Data analysis
  </a>
</div>

{/* Solo se muestra la sección activa */}
<div className="section-content">
  {activeTab === 1 && (
    <div id="science-mapping">
      {/* Sección Science Mapping */}
      <section id="science mapping" className="bg-customOrange px-4 md:px-40 lg:px-20 py-1">
        <div className="mx-auto mt-24 mb-24 max-w-screen-lg">
          <h2 className="text-white text-4xl font-bold text-center mb-16">Science Mapping</h2>
          
          {/* Tarjetas de publicaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-28 gap-y-6">
            {[
              {
                description: "Mendoza, M., & Guevara, M. R. (2017). Cienciometría: factores de impacto y mapas de la ciencia. Bits de Ciencia, 15, 8–15.",
                badges: [
                  <a href="/publications/2017-Bitsdeciencia15-Cienciometria.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-primary badge-outline font-bold text-gray-800">PAPER</div>
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
                    <div className="badge badge-primary badge-outline font-bold">PAPER</div>
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
                    <div className="badge badge-primary badge-outline font-bold">PAPER</div>
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
                    <div className="badge badge-primary badge-outline font-bold">PAPER</div>
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
                <div className="badge-container flex justify-center">
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
    </div>
  )}
  {activeTab === 2 && (
    <div id="participation">
      {/* Sección Participation */}
      <section id="participation" className="bg-customOrange px-4 md:px-40 lg:px-20 py-1">
        <div className="mx-auto mt-24 mb-24 max-w-screen-lg">
          <h2 className="text-white text-4xl font-bold text-center mb-16">Participation</h2>
          
          {/* Tarjetas de publicaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-28 gap-y-6">
            {[
              {
                description: "Guevara, M.R., & Pacheco, C (2018) Los datos abiertos de Chile. Serie de Documentos técnicos Facultad de ingeniería.(In press).",
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
                    <div className="badge badge-primary badge-outline font-bold">PAPER</div>
                  </a>
                ]
              },
              {
                description: "Guevara, M. R., Hartmann, D., Aristarán, M., Mendoza, M., & Hidalgo, C. A. (2016). The research space: using career paths to predict the evolution of the research output of individuals, institutions, and nations. Scientometrics, 109(3), 1695–1709.",
                badges: [
                  <a href="https://link.springer.com/article/10.1007/s11192-016-2125-9" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-primary badge-outline font-bold">PAPER</div>
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
                    <div className="badge badge-primary badge-outline font-bold">PAPER</div>
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
                    <div className="badge badge-primary badge-outline font-bold">PAPER</div>
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
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="badge-container flex justify-center">
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
    </div>
  )}
  {activeTab === 3 && (
    <div id="inequality">
     {/* Sección Inequality */}
      <section id="inequality" className="bg-customOrange px-4 md:px-40 lg:px-20 py-1">
        <div className="mx-auto mt-24 mb-24 max-w-screen-lg">
          <h2 className="text-white text-4xl font-bold text-center mb-16">Inequality</h2>
          
          {/* Tarjetas de publicaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-28 gap-y-6">
            {[
              {
                description: "Guevara, M.R., & Pacheco,C (2018) Los datos abiertos de Chile. Serie de Documentos técnicos Facultad de ingeniería.(In press).",
                badges: [
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-outline">POST</div>
                  </a>,
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-outline">INTERACTIVE NOTEBOOK</div>
                  </a>,
                ],
              },
              {
                description: "Guevara, M. R. (2017). De cómo las Galápagos nos enseñan que la migración y la diversidad son importantes para el desarrollo científico, la innovación y la economía. Medium.",
                badges: [
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-primary badge-outline font-bold">PAPER</div>
                  </a>,
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-outline">PREPRINT</div>
                  </a>,
                ],
              },
              {
                description: "Guevara, M. R., Hartmann, D., Aristarán, M., Mendoza, M., & Hidalgo, C. A. (2016). The research space: using career paths to predict the evolution of the research output of individuals, institutions, and nations. Scientometrics, 109(3), 1695–1709.",
                badges: [
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-outline">FULL JOURNAL</div>
                  </a>,
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-primary  badge-outline font-bold">PAPER EN</div>
                  </a>,
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-primary badge-outline font-bold">PAPER ES</div>
                  </a>,
                ],
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="badge-container flex justify-center">
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
    </div>
  )}
  {activeTab === 4 && (
    <div id="data-analysis">
     {/* Sección Data analysis */}
      <section id="inequality" className="bg-customOrange px-4 md:px-40 lg:px-20 py-1">
        <div className="mx-auto mt-24 mb-24 max-w-screen-lg">
          <h2 className="text-white text-4xl font-bold text-center mb-16">Data analysis</h2>
          
          {/* Tarjetas de publicaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-28 gap-y-6">
            {[
              {
                description: "Gonzalez, V., Abarca-Hurtado, J., Arancibia, A., Claverías, F., Guevara, M. R., & Orellana, R. (2024). Novel Insights on Extracellular Electron Transfer Networks in the Desulfovibrionaceae Family: Unveiling the Potential Significance of Horizontal Gene Transfer. Microorganisms, 12(9), Article 9. ",
                badges: [
                  <a href="https://doi.org/10.3390/microorganisms12091796" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-primary badge-outline font-bold">PAPER</div>
                  </a>
                ],
              },
              {
                description: "Hurtado-Arenas, P., Guevara, M. R., & González-Chordá, V. M. (2024a). Cross-cultural adaptation and validation of the Hospital Survey on Patient Safety questionnaire for a Chilean hospital. BMC Nursing, 23(1), 748. ",
                badges: [
                  <a href="https://doi.org/10.1186/s12912-024-02409-7" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-primary badge-outline font-bold">PAPER</div>
                  </a>
                ],
              },
              {
                description: "Hurtado-Arenas, P., Guevara, M. R., & González-Chordá, V. M. (2024b). Patient Safety Culture from a Nursing Perspective in a Chilean Hospital. Nursing Reports, 14(2), Article 2.",
                badges: [
                  <a href="https://doi.org/10.3390/nursrep14020108" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-primary  badge-outline font-bold">PAPER</div>
                  </a>
                ],
              },
              {
                description: "Roa, M., Garrido, J., & Guevara, M. (2024). CGC and saturation approach: Impact-parameter dependent model of perturbative QCD and combined HERA data. Physical Review D, 110(7), 074006.",
                badges: [
                  <a href="https://doi.org/10.1103/PhysRevD.110.074006" target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-primary  badge-outline font-bold">PAPER</div>
                  </a>
                ],
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="badge-container flex justify-center">
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
    </div>
  )}
</div>
</section>
</div>
  );
}   
export default Secciones;