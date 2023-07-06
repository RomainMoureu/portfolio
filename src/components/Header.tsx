function Header() {
  return (
    <header id="header" className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <a href="#">
            <h1 className="text-3xl font-bold text-red-50">
              <span className="text-red-500">R</span>omain <span className="text-red-500">M</span>oureu
            </h1>
          </a>
        </div>
        <nav className="menu">
          <ul className="flex space-x-4">
            <li><a href="#hero" className=" text-white hover:text-red-500">Accueil</a></li>
            <li><a href="#skills" className="text-white hover:text-red-500">Compétences</a></li>
            <li><a href="#projects" className="text-white hover:text-red-500">Projets</a></li>
            <li><a href="#about" className="text-white hover:text-red-500">À propos</a></li>
            <li><a href="#education" className="text-white hover:text-red-500">Parcours</a></li>
            <li><a href="#contact" className="text-white hover:text-red-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;