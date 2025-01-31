import React from "react";

const Contacto: React.FC = () => {
  return (
    <div>
        {/* Contacto */}
        <section id="contacto" className="bg-customOrange p-10 md:p-20 lg:p-60 text-center bg-gradient-to-r shadow-lg">
        <div className="container mx-auto p-5 md:p-10">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-10">Nos encanta debatir ideas y participar en nuevos proyectos!</h1>
        <p className="text-white text-base md:text-lg mb-5">
            Recibiremos postulaciones de nuevos estudiantes y postdocs durante 2025, contáctanos.
            Nos encontramos en <a 
            href="https://www.google.com/maps/place/Subida+Leopoldo+Carvallo+270,+2360004+Playa+Ancha,+Valpara%C3%ADso/@-33.0210752,-71.6415382,17z/data=!3m1!4b1!4m6!3m5!1s0x9689e6c0ce538cb9:0x75514ace54db50af!8m2!3d-33.0210752!4d-71.6415382!16s%2Fg%2F11ggrmbzlj?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white underline hover:text-gray-300">
            Subida Leopoldo Carvallo 270, 4to piso, Valparaíso, CHILE
            </a>.
        </p>
        <p className="text-white text-base md:text-lg mt-5">
            <span className="inline-flex items-center">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512" 
                className="h-6 w-6 mr-2 fill-current"
            >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
            </svg>
            +56 32 2 500 anexo 537
            </span>
        </p>
        <p className="text-white text-base md:text-lg mt-5">
            <a 
            href="https://www.youtube.com/channel/UCrXz_w8sok_tv7NcUfiEuhw/featured" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center font-bold hover:text-gray-300"
            >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512" 
                className="h-6 w-6 mr-2 fill-current"
            >
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
            </svg>
            DatosLab UPLA
            </a>
        </p>
        <p className="text-white text-base md:text-lg mt-5">
            <a 
            href="mailto:miguel.guevara@upla.cl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center font-bold hover:text-gray-300"
            >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512" 
                className="h-6 w-6 mr-2 fill-current"
            >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
            miguel.guevara@upla.cl
            </a>
        </p>
        </div>
        </section>
    </div>
);
};

export default Contacto;

