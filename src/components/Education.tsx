import education_logo from "../assets/img/school/diploma.svg";

const education = [
  {
    degree: "Master MIAGE",
    date: "2022 - 2024",
    school: "Université Paul Sabatier, Toulouse, France",
    tags: [
      "Gestion de projet",
      "Bases de données avancées",
      "Infrastructure",
      "Analyse des données",
      "Maths / IA",
      "Conception",
    ],
  },
  {
    degree: "Licence MIAGE",
    date: "2021 - 2022",
    school: "Université Paul Sabatier, Toulouse, France",
    tags: [
      "Développement web", 
      "Maths", 
      "Gestion de projet", 
      "Base de données",
    ],
  },
  {
    degree: "BTS SIO Option SLAM",
    date: "2019 - 2021",
    school: "Lycée Ozenne, Toulouse, France",
    tags: [
      "Conception",
      "Développement",
      "Maintenance de solutions applicatives",
      "Gestion des données",
      "Droit de l'informatique",
    ],
  },
];

function Education() {
  return (
    <section id="education">
      <div>
        {education.map((edu, index) => (
          <div key={index}>
            <div>
              <div>
                <img
                  src={education_logo}
                  alt="education"
                />
              </div>
            </div>
            <div key={index}>
              <div>
                {edu.degree}
              </div>
              <div>
                <div>📆 {edu.date}</div>
                <div>📍 {edu.school}</div>
                <div>
                  🧑‍💻
                  {edu.tags.map((tag, index) => (
                    <span key={index}>
                      {index === 0 ? " " : ", "}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;