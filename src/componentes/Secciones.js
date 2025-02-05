import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Secciones = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (_jsx("div", { children: _jsxs("section", { className: "tabs-container", children: [_jsxs("div", { role: "tablist", className: "tabs tabs-bordered font-bold", children: [_jsx("a", { role: "tab", className: `tab text-lg ${activeTab === 1 ? "tab-active" : ""}`, onClick: () => handleTabChange(1), children: "Science Mapping" }), _jsx("a", { role: "tab", className: `tab text-lg ${activeTab === 2 ? "tab-active" : ""}`, onClick: () => handleTabChange(2), children: "Participation" }), _jsx("a", { role: "tab", className: `tab text-lg ${activeTab === 3 ? "tab-active" : ""}`, onClick: () => handleTabChange(3), children: "Inequality" })] }), _jsxs("div", { className: "section-content", children: [activeTab === 1 && (_jsx("div", { id: "science-mapping", children: _jsx("section", { id: "science mapping", className: "bg-customOrange px-4 md:px-40 lg:px-20 py-1", children: _jsxs("div", { className: "mx-auto mt-24 mb-24 max-w-screen-lg", children: [_jsx("h2", { className: "text-white text-4xl font-bold text-center mb-16", children: "Science Mapping" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-28 gap-y-6", children: [
                                                {
                                                    description: "Mendoza, M., & Guevara, M. R. (2017). Cienciometría: factores de impacto y mapas de la ciencia. Bits de Ciencia, 15, 8–15.",
                                                    badges: [
                                                        _jsx("a", { href: "/publications/2017-Bitsdeciencia15-Cienciometria.pdf", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary badge-outline font-bold text-gray-800", children: "PAPER" }) }),
                                                        _jsx("a", { href: "/publications/journal/Bitsdeciencia15.pdf", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "FULL JOURNAL" }) }),
                                                        _jsx("a", { href: "https://uplatv.cl/2018/10/16/un-recorrido-por-los-espacios-de-investigacion/", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "VIDEO" }) })
                                                    ]
                                                },
                                                {
                                                    description: "Guevara, M. R. (2017). De cómo las Galápagos nos enseñan que la migración y la diversidad son importantes para el desarrollo científico, la innovación y la economía. Medium.",
                                                    badges: [
                                                        _jsx("a", { href: "https://mguevaraa.medium.com/de-c%C3%B3mo-las-gal%C3%A1pagos-nos-ense%C3%B1an-que-la-migraci%C3%B3n-y-la-diversidad-son-importantes-para-el-2b7efb257826", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "POST" }) })
                                                    ]
                                                },
                                                {
                                                    description: "Guevara, M. R., Hartmann, D., Aristarán, M., Mendoza, M., & Hidalgo, C. A. (2016). The research space: using career paths to predict the evolution of the research output of individuals, institutions, and nations. Scientometrics, 109(3), 1695–1709.",
                                                    badges: [
                                                        _jsx("a", { href: "https://link.springer.com/article/10.1007/s11192-016-2125-9", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary badge-outline font-bold", children: "PAPER" }) }),
                                                        _jsx("a", { href: "https://arxiv.org/abs/1602.08409", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "PREPRINT" }) }),
                                                        _jsx("a", { href: "https://uplatv.cl/2018/10/16/un-recorrido-por-los-espacios-de-investigacion/", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "VIDEO" }) })
                                                    ]
                                                },
                                                {
                                                    description: "Guevara, M. R., Hartmann, D., & Mendoza, M. (2016). diverse: an R Package to Measure Diversity in Complex Systems. The R Journal, 8(2), 60–78.",
                                                    badges: [
                                                        _jsx("a", { href: "https://journal.r-project.org/archive/2016/RJ-2016-033/", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary badge-outline font-bold", children: "PAPER" }) }),
                                                        _jsx("a", { href: "https://cran.r-project.org/web/packages/diverse/index.html", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "R-PACKAGE" }) })
                                                    ]
                                                },
                                                {
                                                    description: "Guevara, M. R., & Mendoza, M. (2016). Publishing Patterns in BRIC Countries: A Network Analysis. Publications, 4(3), 20.",
                                                    badges: [
                                                        _jsx("a", { href: "/publications/2016-PublishingsPatternsINBRIC-publications.pdf", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary badge-outline font-bold", children: "PAPER" }) })
                                                    ]
                                                },
                                                {
                                                    description: "Guevara, M., & Mendoza, M. (2013). Revealing Comparative Advantages in the Backbone of Science. In Proceedings of the 2013 Workshop on Computational Scientometrics: Theory & Applications (pp. 31–36). San Francisco, CA, USA: ACM.",
                                                    badges: [
                                                        _jsx("a", { href: "https://dl.acm.org/doi/10.1145/2508497.2508503", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "PROCEEDINGS" }) })
                                                    ]
                                                }
                                            ].map((item, index) => (_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 text-center", children: [_jsx("p", { className: "text-gray-600 mb-3", children: item.description }), _jsx("div", { className: "badge-container flex justify-center", children: item.badges.map((badge, badgeIndex) => (_jsx("div", { className: "inline-block m-1", children: badge }, badgeIndex))) })] }, index))) })] }) }) })), activeTab === 2 && (_jsx("div", { id: "participation", children: _jsx("section", { id: "participation", className: "bg-customOrange px-4 md:px-40 lg:px-20 py-1", children: _jsxs("div", { className: "mx-auto mt-24 mb-24 max-w-screen-lg", children: [_jsx("h2", { className: "text-white text-4xl font-bold text-center mb-16", children: "Participation" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-28 gap-y-6", children: [
                                                {
                                                    description: "Guevara, M.R., & Pacheco, C (2018) Los datos abiertos de Chile. Serie de Documentos técnicos Facultad de ingeniería.(In press).",
                                                    badges: [
                                                        _jsx("a", { href: "/publications/2018-LosDatosAbiertosDeChile.pdf", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "PREPRINT" }) })
                                                    ]
                                                },
                                                {
                                                    description: "Guevara, M. R. (2017). De cómo las Galápagos nos enseñan que la migración y la diversidad son importantes para el desarrollo científico, la innovación y la economía. Medium.",
                                                    badges: [
                                                        _jsx("a", { href: "https://mguevaraa.medium.com/de-c%C3%B3mo-las-gal%C3%A1pagos-nos-ense%C3%B1an-que-la-migraci%C3%B3n-y-la-diversidad-son-importantes-para-el-2b7efb257826", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary badge-outline font-bold", children: "PAPER" }) })
                                                    ]
                                                },
                                                {
                                                    description: "Guevara, M. R., Hartmann, D., Aristarán, M., Mendoza, M., & Hidalgo, C. A. (2016). The research space: using career paths to predict the evolution of the research output of individuals, institutions, and nations. Scientometrics, 109(3), 1695–1709.",
                                                    badges: [
                                                        _jsx("a", { href: "https://link.springer.com/article/10.1007/s11192-016-2125-9", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary badge-outline font-bold", children: "PAPER" }) }),
                                                        _jsx("a", { href: "https://arxiv.org/abs/1602.08409", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "PREPRINT" }) }),
                                                        _jsx("a", { href: "https://uplatv.cl/2018/10/16/un-recorrido-por-los-espacios-de-investigacion/", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "VIDEO" }) })
                                                    ]
                                                },
                                                {
                                                    description: "Guevara, M. R., Hartmann, D., & Mendoza, M. (2016). diverse: an R Package to Measure Diversity in Complex Systems. The R Journal, 8(2), 60–78.",
                                                    badges: [
                                                        _jsx("a", { href: "https://journal.r-project.org/archive/2016/RJ-2016-033/", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary badge-outline font-bold", children: "PAPER" }) }),
                                                        _jsx("a", { href: "https://cran.r-project.org/web/packages/diverse/index.html", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "R-PACKAGE" }) })
                                                    ]
                                                },
                                                {
                                                    description: "Guevara, M. R., & Mendoza, M. (2016). Publishing Patterns in BRIC Countries: A Network Analysis. Publications, 4(3), 20.",
                                                    badges: [
                                                        _jsx("a", { href: "/publications/2016-PublishingsPatternsINBRIC-publications.pdf", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary badge-outline font-bold", children: "PAPER" }) })
                                                    ]
                                                },
                                                {
                                                    description: "Guevara, M., & Mendoza, M. (2013). Revealing Comparative Advantages in the Backbone of Science. In Proceedings of the 2013 Workshop on Computational Scientometrics: Theory & Applications (pp. 31–36). San Francisco, CA, USA: ACM.",
                                                    badges: [
                                                        _jsx("a", { href: "https://dl.acm.org/doi/10.1145/2508497.2508503", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "PROCEEDINGS" }) })
                                                    ]
                                                }
                                            ].map((item, index) => (_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 text-center", children: [_jsx("p", { className: "text-gray-600 mb-3", children: item.description }), _jsx("div", { className: "badge-container flex justify-center", children: item.badges.map((badge, badgeIndex) => (_jsx("div", { className: "inline-block m-1", children: badge }, badgeIndex))) })] }, index))) })] }) }) })), activeTab === 3 && (_jsx("div", { id: "inequality", children: _jsx("section", { id: "inequality", className: "bg-customOrange px-4 md:px-40 lg:px-20 py-1", children: _jsxs("div", { className: "mx-auto mt-24 mb-24 max-w-screen-lg", children: [_jsx("h2", { className: "text-white text-4xl font-bold text-center mb-16", children: "Inequality" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-28 gap-y-6", children: [
                                                {
                                                    description: "Guevara, M.R., & Pacheco,C (2018) Los datos abiertos de Chile. Serie de Documentos técnicos Facultad de ingeniería.(In press).",
                                                    badges: [
                                                        _jsx("a", { href: "#", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "POST" }) }),
                                                        _jsx("a", { href: "#", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "INTERACTIVE NOTEBOOK" }) }),
                                                    ],
                                                },
                                                {
                                                    description: "Guevara, M. R. (2017). De cómo las Galápagos nos enseñan que la migración y la diversidad son importantes para el desarrollo científico, la innovación y la economía. Medium.",
                                                    badges: [
                                                        _jsx("a", { href: "#", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary badge-outline font-bold", children: "PAPER" }) }),
                                                        _jsx("a", { href: "#", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "PREPRINT" }) }),
                                                    ],
                                                },
                                                {
                                                    description: "Guevara, M. R., Hartmann, D., Aristarán, M., Mendoza, M., & Hidalgo, C. A. (2016). The research space: using career paths to predict the evolution of the research output of individuals, institutions, and nations. Scientometrics, 109(3), 1695–1709.",
                                                    badges: [
                                                        _jsx("a", { href: "#", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-outline", children: "FULL JOURNAL" }) }),
                                                        _jsx("a", { href: "#", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary  badge-outline font-bold", children: "PAPER EN" }) }),
                                                        _jsx("a", { href: "#", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "badge badge-primary badge-outline font-bold", children: "PAPER ES" }) }),
                                                    ],
                                                },
                                            ].map((item, index) => (_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 text-center", children: [_jsx("p", { className: "text-gray-600 mb-3", children: item.description }), _jsx("div", { className: "badge-container flex justify-center", children: item.badges.map((badge, badgeIndex) => (_jsx("div", { className: "inline-block m-1", children: badge }, badgeIndex))) })] }, index))) })] }) }) }))] })] }) }));
};
export default Secciones;
