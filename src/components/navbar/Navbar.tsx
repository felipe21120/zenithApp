import { titleFont } from '@/config/fonts';
import { ButtonNavbar } from './ui/ButtonNavbar';
import { IconsNavbar } from './ui/IconsNavbar';

export const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col h-auto sm:h-[30vh] md:h-[40vh] lg:min-h-screen relative lg:fixed top-6 md:top-8 lg:top-20 left-0 lg:left-40 xl:left-60 w-full lg:w-1/2 shadow-lg">
      <div className="p-4 mb-10 lg:mb-60">
        <h2 className={`${titleFont.className} text-2xl md:text-3xl lg:text-4xl font-extrabold`}>
          ZenithApp
        </h2>
        <h5 className="text-base md:text-lg my-4">
          Empresa dedicada al software
        </h5>
        <p className="text-sm font-light mb-4">
          ¿Tienes un proyecto en mente? <span>Contáctanos</span>
        </p>

        <ButtonNavbar />
      </div>

      <div className="left-0">
        <IconsNavbar />
      </div>
    </div>
  );
};
