import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="bg-black text-white p-6 shadow-md fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold hover:animate-bounce">Machiel</div>
          <div className="flex items-center">
            {/* <Link to="/under-construction" className="mx-4">
              Projects
            </Link>
            <Link to="/under-construction" className="mx-4">
              Blog
            </Link>
            <Link to="/under-construction" className="mx-4">
              Contact
            </Link> */}
            <a
              href="https://github.com/machiel27"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 transform transition-transform duration-300 hover:scale-125"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/machiel-van-der-walt-550343242"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 transform transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
