import React, { useState } from "react";

interface BadgeLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

interface Publication {
  description: string;
  badges: BadgeLink[];
}

const publicaciones: Record<number, Publication[]> = {
  1: [
    { description: "Mendoza, M., & Guevara, M. R. (2017). Cienciometría: factores de impacto y mapas de la ciencia. Bits de Ciencia, 15, 8–15.", badges: [
        { label: "PAPER", href: "/publications/2017-Bitsdeciencia15-Cienciometria.pdf", isPrimary: true },
        { label: "FULL JOURNAL", href: "/publications/journal/Bitsdeciencia15.pdf" },
        { label: "VIDEO", href: "https://uplatv.cl/2018/10/16/un-recorrido-por-los-espacios-de-investigacion/" },
      ]
    },
    { description: "Guevara, M. R. (2017). De cómo las Galápagos... economía. Medium.", badges: [ { label: "POST", href: "https://mguevaraa.medium.com/..." } ] },
    { description: "The research space: using career paths... nations. Scientometrics, 109(3), 1695–1709.", badges: [
        { label: "PAPER", href: "https://link.springer.com/article/...", isPrimary: true },
        { label: "PREPRINT", href: "https://arxiv.org/abs/1602.08409" },
        { label: "VIDEO", href: "https://uplatv.cl/..." },
      ]
    },
    { description: "diverse: an R Package to Measure Diversity... The R Journal, 8(2), 60–78.", badges: [
        { label: "PAPER", href: "https://journal.r-project.org/...", isPrimary: true },
        { label: "R-PACKAGE", href: "https://cran.r-project.org/..." },
      ]
    },
    { description: "Publishing Patterns in BRIC Countries: A Network Analysis. Publications, 4(3), 20.", badges: [ { label: "PAPER", href: "/publications/2016-PublishingsPatternsINBRIC-publications.pdf", isPrimary: true } ] },
    { description: "Revealing Comparative Advantages in the Backbone of Science... ACM.", badges: [ { label: "PROCEEDINGS", href: "https://dl.acm.org/doi/..." } ] },
  ],
  2: [
    { description: "Guevara, M.R., & Pacheco, C (2018) Los datos abiertos de Chile... (In press).", badges: [ { label: "PREPRINT", href: "/publications/2018-LosDatosAbiertosDeChile.pdf" } ] },
    { description: "De cómo las Galápagos nos enseñan... economía. Medium.", badges: [ { label: "PAPER", href: "https://mguevaraa.medium.com/...", isPrimary: true } ] },
    { description: "The research space: using career paths... 109(3), 1695–1709.", badges: [ { label: "PAPER", href: "https://link.springer.com/article/...", isPrimary: true }, { label: "PREPRINT", href: "https://arxiv.org/abs/..." }, { label: "VIDEO", href: "https://uplatv.cl/..." } ] },
  ],
  3: [
    { description: "Los datos abiertos de Chile... Facultad de ingeniería.(In press).", badges: [ { label: "POST", href: "#" }, { label: "INTERACTIVE NOTEBOOK", href: "#" } ] },
    { description: "De cómo las Galápagos nos enseñan... economía. Medium.", badges: [ { label: "PAPER", href: "#", isPrimary: true }, { label: "PREPRINT", href: "#" } ] },
  ],
  4: [
    { description: "Novel Insights on Extracellular Electron Transfer Networks... Article 9.", badges: [ { label: "PAPER", href: "https://doi.org/...", isPrimary: true } ] },
    { description: "Cross-cultural adaptation and validation... BMC Nursing, 23(1), 748.", badges: [ { label: "PAPER", href: "https://doi.org/...", isPrimary: true } ] },
  ]
};

const tabs = ["Science Mapping", "Participation", "Inequality", "Data Analysis"];

const Secciones: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = (index: number) => setActiveTab(index);

  const tabClass = (i: number) =>
    `flex-1 text-center py-3 cursor-pointer rounded-t-lg transition-colors duration-200 border-t border-l border-r border-gray-300
     ${activeTab === i ? 'bg-customOrange text-white font-bold border-b-0' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 border-b border-gray-300'}`;

  return (
    <section className="mt-8 mb-8">
      {/* Tabs */}
      <div role="tablist" className="flex gap-1">
        {tabs.map((tab, i) => (
          <div
            key={i}
            role="tab"
            onClick={() => handleTabChange(i + 1)}
            className={tabClass(i + 1)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="bg-customOrange p-6  text-black">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">{tabs[activeTab - 1]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicaciones[activeTab]?.map((pub, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <p className="text-gray-800 mb-4">{pub.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {pub.badges.map((badge, j) => (
                  <a
                    key={j}
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 border rounded-full text-sm transition-colors duration-200 font-medium
                      ${badge.isPrimary 
                        ? 'border-black text-black hover:bg-black hover:text-white' 
                        : 'border-gray-400 text-gray-600 hover:border-gray-600 hover:bg-gray-600 hover:text-white'}`}
                  >
                    {badge.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secciones;
