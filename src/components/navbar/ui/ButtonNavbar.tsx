'use client';

import { useState, useEffect } from 'react';

export const ButtonNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('sobre-nosotros');

  useEffect(() => {
    if (typeof window === 'undefined') return; // Evitar problemas en SSR

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id') || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <div>
      <ul className="flex flex-col gap-2 mt-16">
        <li className={`transition-transform duration-300 ease-in-out ${activeSection === 'sobre-nosotros' ? 'font-black text-lg scale-105' : 'font-light text-base'}`}>
          <a
            href="#sobre-nosotros"
            onClick={(e) => handleClick(e, 'sobre-nosotros')}
          >
            - Sobre nosotros
          </a>
        </li>
        <li className={`transition-transform duration-300 ease-in-out ${activeSection === 'experiencia' ? 'font-black text-lg scale-105' : 'font-light text-base'}`}>
          <a
            href="#experiencia"
            onClick={(e) => handleClick(e, 'experiencia')}
          >
            - Experiencia
          </a>
        </li>
        <li className={`transition-transform duration-300 ease-in-out ${activeSection === 'proyectos' ? 'font-black text-lg scale-105' : 'font-light text-base'}`}>
          <a
            href="#proyectos"
            onClick={(e) => handleClick(e, 'proyectos')}
          >
            - Proyectos
          </a>
        </li>
      </ul>
    </div>
  );
};
