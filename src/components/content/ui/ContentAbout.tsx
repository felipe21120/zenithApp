import React from 'react';

export const ContentAbout: React.FC = () => {
  return (
    <section id='sobre-nosotros' className="px-0 md:px-2 lg:px-4">
      <h2 className="text-lg md:hidden font-bold mt-20">Sobre Nosotros</h2>
      <p className='font-light text-sm md:text-base pt-10 pb-8'>
        En <span className='font-bold'>ZenithApp</span>, creemos que la tecnología es un catalizador para el crecimiento y la innovación. 
        Nos apasiona transformar ideas en realidades digitales, ofreciendo soluciones tecnológicas personalizadas que optimizan cada aspecto del proceso empresarial. 
        <span className='font-bold'> Innovación, personalización</span> y crecimiento son los pilares que nos guían en cada proyecto, trabajando como aliados estratégicos para impulsar <span className='font-bold'>el éxito de pequeñas 
        y medianas empresas</span> en un mercado en constante cambio.
      </p>

      <p className='font-light text-sm md:text-base'>
        Nuestro equipo cuenta con experiencia en una <span className='font-bold'>multinacional</span>, respaldado por un tecnólogo en análisis y desarrollo de software. Además, hemos desarrollado una página publicitaria
        para una lechonería en <span className='font-bold'>Ibagué</span>, que incluye un sistema de historial de ventas y gestión de inventarios.
      </p>

      <p className='mt-8 text-sm md:text-base'>
        Esta combinación de formación y logros en proyectos locales nos permite
        ofrecer soluciones digitales efectivas para pequeñas y medianas empresas. Estamos preparados para ofrecer soluciones digitales que transformen y potencien el crecimiento de
        pequeñas y medianas empresas.
      </p>
    </section>
  );
};