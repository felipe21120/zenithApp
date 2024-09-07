import React from 'react';

export const ContentExperience: React.FC = () => {
  return (
    <section id="experiencia" className="px-0 md:px-2 lg:px-4">
      <h1 className="font-bold pt-12 pb-8 text-lg">Experiencia</h1>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 border p-4 border-gray-500 rounded-2xl">
        <div className="flex-shrink-0">
          <h4 className="font-light text-sm mt-1">2023-2024</h4>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Globant</h2>
          <h5 className="font-extralight text-sm mb-3">Trainee collage</h5>
          <p className="font-light text-sm">
            Nuestro equipo cuenta con una sólida experiencia adquirida en Globant, una destacada empresa multinacional en tecnología. Durante nuestro tiempo allí, desarrollamos habilidades avanzadas en desarrollo de software y gestión de proyectos, lo que nos permite ofrecer soluciones tecnológicas de alta calidad y adaptadas a las necesidades de nuestros clientes.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            <button className="bg-teal-500 rounded-full py-1 px-4 text-sm">TypeScript</button>
            <button className="bg-teal-500 rounded-full py-1 px-4 text-sm">React</button>
            <button className="bg-teal-500 rounded-full py-1 px-4 text-sm">Java</button>
            <button className="bg-teal-500 rounded-full py-1 px-4 text-sm">SpringBoot</button>
          </div>
        </div>
      </div>
    </section>
  );
};
