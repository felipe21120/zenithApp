import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";


export const IconsNavbar = () => {
  return (
    <div className="flex space-x-5 mt-6 cursor-pointer">
      {/* Icono de Facebook */}
      <div className="relative group">
        <a
          href="https://www.facebook.com/profile.php?id=61565431316628&is_tour_completed"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaFacebook className="h-7 w-7 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
          <FiArrowUpRight className="h-7 w-7 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
        </a>
      </div>

      {/* Icono de GitHub */}
      <div className="relative group">
        <a href="https://github.com/zennithApp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center">
          <FaGithub className="h-7 w-7 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
          <FiArrowUpRight className="h-7 w-7 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
        </a>

      </div>

      {/* Icono de LinkedIn */}
      <div className="relative group">
        <a href="https://www.linkedin.com/in/zennithapp-zenith-13a425326"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center">
          <FaLinkedin className="h-7 w-7 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
          <FiArrowUpRight className="h-7 w-7 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />

        </a>
      </div>

      {/* Icono de Email */}
      <div className="relative group">
        <IoMail className="h-7 w-7 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
        <FiArrowUpRight className="h-7 w-7 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
      </div>

      {/* Icono de Twitter */}
      <div className="relative group">
        <a href="https://x.com/ZennithApp" target="_blank"
          rel="noopener noreferrer"
          className="flex items-center">
          <FaXTwitter className="h-7 w-7 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
          <FiArrowUpRight className="h-7 w-7 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />
        </a>
      </div>

      {/* Icono de Instagram */}
      <div className="relative group" >
        <a href="https://www.instagram.com/zennithapp/" target="_blank"
          rel="noopener noreferrer"
          className="flex items-center">
          <FaInstagram className="h-7 w-7 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
          <FiArrowUpRight className="h-7 w-7 absolute inset-0 transition-transform transform scale-90 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:duration-300" />

        </a>
      </div>
    </div>
  );
};
