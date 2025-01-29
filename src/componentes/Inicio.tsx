import React from "react";

const Inicio: React.FC = () => {
  return (
    <div>
        {/* Inicio */}
        <section id="inicio"className="p-10 md:p-10 text-center bg-gradient-to-r my-10">
        <div className="container mx-auto space-y-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-5">
            Cómo hacer simple la complejidad de los datos
        </h1>
        <hr className="light my-4"/>
        <p className="text-base md:text-lg mb-5">
            Nuestro laboratorio encuentra patrones y valor en datos
            interrelacionados -y abundantes- a través de nuevos métodos y
            visualizaciones.
        </p>
        <p className="text-base md:text-lg mb-5">
            Nuestra investigación se aplica a temáticas diversas y con orientación social.
        </p>
        <a
            href="#líneas"
            className="btn btn-white text-black font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 hover:bg-white-700"
        >
            CONTINUAR
        </a>
        </div>
        </section>

</div>
);
};

export default Inicio;