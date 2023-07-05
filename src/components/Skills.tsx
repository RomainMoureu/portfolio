import data_analysis from "../assets/img/skills/data_analysis.svg";
import database from "../assets/img/skills/database.svg";
import uxui from "../assets/img/skills/uxui.svg";
import frontend from "../assets/img/skills/frontend.svg";
import backend from "../assets/img/skills/server.svg";
import git from "../assets/img/skills/git.svg";

const skills = [
  {
    name: "Front-end",
    logo: frontend,
    description:
      "Construire des sites web est quelque chose que j'aime. Actuellement en train d'apprendre React, j'ai des connaissances dans d'autres frameworks comme Vue.js et Angular.",
  },
  {
    name: "Back-end",
    logo: backend,
    description:
      "Spring Boot, Node.js, ... J'ai été formé à la construction d'applications back-end dans le cadre de mes études en informatique.",
  },
  {
    name: "Base de données",
    logo: database,
    description:
      "Les bases de données ont toujours fait partie de ma formation. Je possède une expertise en SQL et en NoSQL, notamment avec des technologies telles que MySQL, Oracle, Postgres, etc.",
  },
  {
    name: "UX / UI",
    logo: uxui,
    description:
      "Figma, Mockups, Designs, ... Je m'entraîne à l'UX / UI depuis le début de mes études.",
  },
  {
    name: "Data analysis",
    logo: data_analysis,
    description:
      "L'analyse des données m'a toujours intéressé. Je l'ai pratiquée dans le cadre de missions et de projets et j'apprends toujours de nouvelles choses à ce sujet.",
  },
  {
    name: "Git",
    logo: git,
    description:
      "C'est un outil indispensable pour les développeurs et je l'utilise pour tous mes projets.",
  },
];

const subtitle =
  "Certaines compétences acquises au cours de mes études, de mes expériences professionnelles mais également avec des projets personnels. ";

function Skills() {
  return (
    <section className="m-auto w-4/5 md:w-3/4 lg:w-3/4" id="skills">
      <div className="flex flex-col items-center justify-center">
        <p>{subtitle}</p>
        <div className="grid gap-8 gap-y-20 mt-20 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center border-2 border-blue-900 rounded-xl bg-blue-950 shadow-md px-8 pb-4 group hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 transition-all"
            >
              <div className="w-16 h-16 -rotate-45 bg-blue-900 -top-10 relative transition-all duration-500 rounded-xl group-hover:rotate-0 group-hover:scale-125">
                <div className="flex justify-center items-center h-full">
                  <img src={skill.logo} className="w-8 h-8" alt={skill.name} />
                </div>
              </div>
              <div className="text-3xl font-bold text-center -mt-10">
                {skill.name}
              </div>
              <div className="text-center w-full">
                {skill.description}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>        
  );
}

export default Skills;