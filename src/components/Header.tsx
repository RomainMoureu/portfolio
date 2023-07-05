import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState("");
  if (activeLink === "") {
    setActiveLink("home");
  }
  const navigate = (path: string) => {
    document.getElementById(path)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="font-bold text-lg border-b-4 border-blue-900 p-4 px-4 sm:px-16 md:px-32 lg:px-64">
      <nav className="flex justify-center items-center sm:justify-between">
        <div className="hidden sm:block pt-2">
          <a><span>R</span>omain <span>M</span>oureu</a>
          <div className="relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-blue-700 rounded"></div>
        </div>
        <div className="flex gap-6 pt-2">
          <Link to="/portfolio/">
            <div className="group" onClick={() => navigate("skills")}>
              <span>Compétences</span>
              <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link to="/portfolio/">
            <div className="group" onClick={() => navigate("projects")}>
              <span>Projets</span>
              <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link to="/portfolio/">
            <div className="group" onClick={() => navigate("education")}>
              <span>A propos</span>
              <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link to="/portfolio/">
            <div className="group" onClick={() => navigate("contact")}>
              <span>Contact</span>
              <div className="opacity-0 relative w-full bottom-2.5 -z-10 -right-2 h-2 bg-yellow-800 rounded group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;