function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <a href="#">
            <h1><span>R</span>omain <span>M</span>oureu</h1>
          </a>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#about">A propos</a></li>
            <li><a href="#education">Parcours</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;