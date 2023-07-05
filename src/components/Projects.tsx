import github from "../assets/github.svg";
import lockio from "../assets/projects/projet.png";
import miageland from "../assets/projects/projet.png";
import SectionHeader from "./SectionHeader.tsx";

const projects = [
  {
    name: "MIAGELand",
    img: miageland,
    tags: ["Full-stack", "Vue", "Spring Boot", "Docker", "Optimization"],
    links: [],
    description: "University project to create an amusement Park web application. We created a full-stack app working with a large amount of data, with statistics, admin panel and many other features."
  },
  {
    name: "Lockio",
    img: lockio,
    links: [
      {
        icon: github,
        url: "https://github.com/Lockiio",
      },
    ],
    tags: ["Web", "Front", "Back", "Python", "Spring Boot", "Docker"],
    description:
      "Lockio is our Master project. This PoC was designed to demonstrate our idea about an innovative solution to store your stuff.",
  },
  /*
  {
    name: "DodleMe",
    img: dodleme,
    links: [
      {
        icon: github,
        url: "https://github.com/RemiSaurel/dodleme",
      },
      {
        icon: github,
        url: "https://github.com/AdamKhalepo/dodlemeapi",
      },
    ],
    tags: ["Web", "Front", "Back", "MongoDB"],
    description:
      "3rd year university Web project. We had to create a web app that allows you to create and share events planning.",
  },*/
];

const subtitle =
  "always looking to learn new stuff, I love creating projects in my\n" +
  "            spare time.";

function Projects() {
  return (
    <div className="w-full mb-8">
      <div className="m-auto w-full md:w-3/4 lg:w-2/3" id="projects">
        <SectionHeader title="projects" subtitle={subtitle} />
      </div>
        {projects.map((project, index) => (
            <div className="rounded-lg flex justify-center items-center">
              <div className="justify-center w-[300px] h-[400px] md:w-[600px] md:h-[500px] lg:w-[700px] lg:h-[600px] group">
                <div
                  className={`bg-blue-950 rounded-lg mx-auto transition-all group group-hover:bg-blue-800 duration-500 ease-in-out`}
                >
                  <img
                    src={project.img}
                    className="object-top p-2 w-full h-full rounded-xl transition-all duration-500 ease-in-out"
                    alt={project.name}
                  />
                  <div className="absolute bottom-0 w-full rounded-b-lg bg-gray-900 bg-opacity-90 md:bg-opacity-100">
                    <div className="px-4 py-2 text-2xl font-bold mt-2 text-white text-center">
                      {project.name}
                    </div>
                    <div className="flex px-4 py-2 flex-wrap justify-center">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-800 bg-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="hidden md:block px-8 pb-2 text-white text-lg">
                      {project.description}
                    </div>
                    <div className="flex justify-center py-2">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-2 mx-1 text-white transition-all duration-300 rounded-full hover:bg-gray-600"
                        >
                          <img
                            src={link.icon}
                            alt={link.url}
                            className="w-8 h-8 rounded"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
    </div>
  );
}

export default Projects;