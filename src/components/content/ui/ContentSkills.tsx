import React from 'react';
import { DiMsqlServer, DiMysql } from 'react-icons/di';
import { FaBootstrap, FaDocker, FaFigma, FaGithub, FaHtml5, FaJava, FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiApachemaven, SiPostman, SiSpringboot, SiTypescript } from 'react-icons/si';

export const ContentSkills: React.FC = () => {
  return (
    <section id="habilidades" className="px-0 md:px-2 lg:px-4">
      <h1 className="font-bold py-8 text-lg">Habilidades</h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 justify-items-center">
        <div className="w-12 h-12 flex">
          <FaReact className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex ">
          <RiNextjsFill className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <RiTailwindCssFill className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex">
          <SiTypescript className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <FaHtml5 className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <FaBootstrap className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <FaFigma className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <FaJava className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <SiSpringboot className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <DiMysql className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <FaDocker className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex ">
          <SiApachemaven className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <DiMsqlServer className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <SiPostman className="w-full h-full" />
        </div>
        <div className="w-12 h-12 flex">
          <FaGithub className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
