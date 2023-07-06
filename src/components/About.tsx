import selfie from "../assets/img/me.jpg";

function About() {
  return (
    <section id="about" className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/3">
          <div className="relative">
            <div className="about-img relative">
              <img src={selfie} alt="Romain Moureu" className="object-cover w-full h-full" />
            </div>
            <div className="absolute left-[-33px] top-[19px] h-98% w-98% border-7 border-crimson z-[-1]"></div>
          </div>
        </div>
        <div className="w-full md:w-2/3 px-4">
          <p className="text-xl font-semibold">Étudiant en informatique en apprentissage</p>
          <p className="mt-4">J'ai 23 ans et je suis actuellement en Master MIAGE (Informatique appliquée à la gestion d'entreprise) à l'Université Paul Sabatier de Toulouse.</p>
          <p className="mt-4">Je travaille en tant que développeur full-stack et chef de projet pour l'entreprise Mindflurry.</p>
          <a href="./assets/download/CV_Romain4.pdf" download="CV_MIAGE_MOUREU_ROMAIN" target="_blank" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Téléchargez mon CV</a>
        </div>
      </div>
    </section>
  );
}

export default About;