import Image from 'next/image';
import React from 'react';

export const ContentProjects: React.FC = () => {
  return (
    <section id="proyectos" className="px-0 md:px-2 lg:px-4">
      <h1 className="font-bold py-8 text-lg">Proyectos</h1>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 border p-4 border-gray-500 rounded-2xl">
        <div className="flex-shrink-0 flex justify-center items-center">
          <Image src="/Logo_lechongori-zenith.png"
          width={100}
          height={100}
          alt='Logo-lechongori'
          
          />
          
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3">Lechongori</h2>
          <p className="font-light text-sm">
            Desarrollamos una solución integral para una lechonería que incluyó la creación de una página web publicitaria optimizada con herramientas de marketing digital, destinada a mejorar la presencia en línea del negocio. Además, implementamos una aplicación personalizada para la gestión eficiente del inventario y el control detallado del historial de ventas.
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
