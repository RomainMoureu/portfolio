import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
function Hero() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center font-medium">
      <h1 className="text-8xl font-bold mb-8">
        🧑‍💻<span className="text-6xl">👋</span>
      </h1>
      <h2 className="text-4xl font-bold flex gap-2">
        hi, i'm Romain
      </h2>
      <p className="text-xl text-cyan-200 text-center">
        Computer Science student in apprenticeship
      </p>
      <p className="text-xl w-4/5 md:w-2/5 text-center mb-8">
        I’m 23 years old, currently in Master
        <span className="text-yellow-500"> MIAGE </span>
        (CS + Project management) at
        <span className="text-yellow-500"> University Paul Sabatier </span>
        Toulouse, France. <br />
        I’m working as a
        <span className="text-yellow-500"> full-stack developer </span>
        for
        <span className="text-yellow-500"> Mindflurry </span>
      </p>
      <div className="flex gap-8">
        <a
          className="w-14 h-14 rounded-full bg-blue-900 mt-2 items-center flex justify-center transition-all duration-200 hover:scale-125"
          href="mailto:romain.moureu@toulouse.miage.fr"
          target="_blank"
        >
          <img className="w-8 h-8" src={mail} alt="mail" />
        </a>
        <a
          className="w-14 h-14 rounded-full bg-blue-900 mt-2 items-center flex justify-center transition-all duration-200 hover:scale-125"
          href="https://github.com/RomainMoureu"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
        <a
          className="w-14 h-14 rounded-full bg-blue-900 mt-2 items-center flex justify-center transition-all duration-200 hover:scale-125"
          href="https://www.linkedin.com/in/romainmoureu/"
          target="_blank"
        >
          <img src={linkedin} alt="linkeding" />
        </a>
      </div>
    </div>
  );
}

export default Hero;