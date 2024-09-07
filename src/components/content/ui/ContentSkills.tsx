import React from 'react';
import { DiMsqlServer, DiMysql } from 'react-icons/di';
import { FaBootstrap, FaDocker, FaFigma, FaGithub, FaHtml5, FaJava, FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiApachemaven, SiPostman, SiSpringboot, SiTypescript } from 'react-icons/si';

export const ContentSkills: React.FC = () => {
  return (
    <section id="habilidades" className="px-0 md:px-2 lg:px-4">
      <h1 className="font-bold py-8 text-lg ">Habilidades</h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 justify-center items-center">
        <div className="w-11 h-11 flex items-center justify-center">
          <FaReact className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <RiNextjsFill className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <RiTailwindCssFill className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <SiTypescript className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <FaHtml5 className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <FaBootstrap className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <FaFigma className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <FaJava className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <SiSpringboot className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <DiMysql className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <FaDocker className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <SiApachemaven className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <DiMsqlServer className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <SiPostman className="w-full h-full" />
        </div>
        <div className="w-11 h-11 flex items-center justify-center">
          <FaGithub className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
