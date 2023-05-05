
// String to Slug
function stringToSlug(str) {
    // Convierte el string a minúsculas y reemplaza caracteres acentuados y diacríticos
    const from = "áäàâãåéëèêíïìîĩóöòôõúüùûñç";
    const to = "aaaaaaeeeeiiiiiooooouuuunc";
    for (let i = 0; i < from.length; i++) {
        str = str.toLowerCase().replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Reemplaza espacios y caracteres no alfanuméricos con guiones
    str = str.replace(/[^a-z0-9]+/g, '-');

    // Elimina guiones repetidos y guiones al principio o al final del slug
    str = str.replace(/^-+|-+$/g, '');

    return str;
}


// URL de la API que deseas utilizar
const apiUrl = 'https://api.datoslab.cl/latest/datoslab/projects';

// Realiza la llamada a la API
fetch(apiUrl)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error al obtener datos de la API');
        }
    })
    .then(data => {
        // Procesa los datos y genera el HTML
        const projects = document.getElementById('projects');
        const projects_modals = document.getElementById('projects-modals');
        let html_project = '';
        let html_project_modal = '';

        data.forEach(item => {
            // Aquí, crea el HTML según los datos recibidos de la API
            
            html_project += `
                <!-- Project ${item.proyecto} -->
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="portfolio-item" style="max-width: 270px;">
                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal-${stringToSlug(item.proyecto)}">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/img/portfolio/2.jpg" style="height:200px;" />
                    </a>
                    <div class="portfolio-caption">
                    <div class="">${item.proyecto}</div>
                    <h6 class="text-muted">${item.persona_a_cargo}</h6>
                    </div>
                </div>
                </div>
            `;

            html_project_modal += `
                <!-- Modal Project ${item.proyecto} -->
                <div class="portfolio-modal modal fade" id="portfolioModal-${stringToSlug(item.proyecto)}" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h2 class="text-uppercase">${item.proyecto}</h2>
                                <hr class="my-4">
                                <!--SLIDER-->
                                <div id="carouselControls-${stringToSlug(item.proyecto)}" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img class="d-block w-100" src="img/portfolio/img/portfolio/1.jpg" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src="img/portfolio/img/portfolio/2.jpg" alt="Second slide">
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src="img/portfolio/img/portfolio/3.jpg" alt="Third slide">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselControls-${stringToSlug(item.proyecto)}" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselControls-${stringToSlug(item.proyecto)}" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                                </div>

                                <p class="text-muted">${item.descripcion}</p>
                                <ul class="list-inline">
                                <li>
                                    <h6>${item.persona_a_cargo}</h6>
                                    <h6 class="text-muted">${item.tipo}</h6>
                                    <h6 class="text-muted"><a href="${item.url}" target="_blank">${item.url}</a></h6>
                                </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                Cerrar
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            `;
        });

        // Inserta el HTML generado en el elemento 'projects'
        projects.innerHTML = html_project;
        projects_modals.innerHTML = html_project_modal;
    })
    .catch(error => {
        console.error('Error al procesar la API:', error);
    });
