import selfie from "../assets/img/me.jpg";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="left">
          <div className="about-img">
            <img src={selfie} alt="Romain Moureu"/>
          </div>
        </div>
        <div className="right">
          <p>Étudiant en informatique en apprentissage</p>
          <p>J'ai 23 ans et je suis actuellement en Master MIAGE (Informatique appliquée à la gestion d'entreprise) à l'Université Paul Sabatier de Toulouse.</p>
          <p>Je travaille en tant que développeur full-stack et chef de projet pour l'entreprise Mindflurry</p>
          <a href="./assets/download/CV_Romain4.pdf" download="CV_MIAGE_MOUREU_ROMAIN" target="_blank">Téléchargez mon CV</a>
        </div>
      </div>
    </section>
  );
}

export default About;