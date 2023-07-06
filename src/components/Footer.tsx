function Footer() {
    return (
      <section id="footer" className="bg-gray-800 py-8 text-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              <span>M</span>oureu <span>R</span>omain
            </h1>
          </div>
          <h2 className="text-xl text-gray-400 mb-4 text-center">Portfolio</h2>
          <div className="flex justify-center mb-4">
            <div className="mr-4">
              <a href="https://www.facebook.com/profile.php?id=100008251576142" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="Facebook Icon"/>
              </a>
            </div>
            <div className="mr-4">
              <a href="https://www.instagram.com/romain_moureu/?hl=fr" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="Instagram Icon"/>
              </a>
            </div>
            <div className="mr-4">
              <a href="https://www.linkedin.com/in/romain-moureu-4454ab193/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="LinkedIn Icon"/>
              </a>
            </div>
            <div className="mr-4">
              <a href="https://github.com/LaCouane32100" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/bubbles/100/000000/github.png" alt="GitHub Icon"/>
              </a>
            </div>
            <div>
              <a href="https://www.twitch.tv/lacouane32" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/bubbles/100/000000/twitch.png" alt="Twitch Icon"/>
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-400 text-center">© 2023 MOUREU Romain. Tous droits réservés.</p>
        </div>
      </section>
    );
}
  
export default Footer;
  