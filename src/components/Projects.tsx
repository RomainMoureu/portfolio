import github from "../assets/img/github.svg";
import greenscan from "../assets/projects/greenscan.png";
import miageland from "../assets/projects/miageland.jpg";
import gsb from "../assets/projects/gsb.png"
import sam_sio from "../assets/projects/site_sam_sio.png"
import fredi from "../assets/projects/fredi_m2l.png"
import digicode from "../assets/projects/digicode1.png"
import bneg from "../assets/projects/bneg.jpg"
import sac_rugby from "../assets/projects/site_rugby.png"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const projects = [
  {
    name: "SAC-RUGBY",
    img: sac_rugby,
    links: [
      {
        icon: github,
        url: "https://github.com/xxxx",
      },
    ],
    tags: ["Web", "Front", "Vitrine", "Sport"],
    description: "Réalisation du site de mon club de rugby"
  },
  {
    name: "MIAGELand",
    img: miageland,
    tags: ["Web", "Front", "Back", "Angular", "Spring Boot", "Optimization"],
    links: [
      {
        icon: github,
        url: "https://github.com/xxxx",
      },
    ],
    description: "Projet universitaire visant à créer une application web pour la gestion d'un parc d'attractions en utilisant Spring Boot. Nous avons également crée un front en Angular."
  },
  {
    name: "GreenSc@n",
    img: greenscan,
    links: [
      {
        icon: github,
        url: "https://github.com/xxxx",
      },
    ],
    tags: ["Mobile", "Front", "Back", "Python", "React Native", "Gitlab"],
    description: "GreenSc@n est une appli 100% indépendante qui vous donne davantages d’informations sur les produits que vous consommez. Nous scannons vos produits et évaluons leur impact environnemental"
  },
  {
    name: "Digicode",
    img: digicode,
    links: [
      {
        icon: github,
        url: "https://github.com/xxxx",
      },
    ],
    tags: ["Mobile", "Web", "Front", "Ionic", "SQL"],
    description: "La Maison des Ligues de Lorraine ( M2L ) met à disposition des ligues un site web d’information sur lequel apparait un digicode permettant l’accès à la M2L ainsi que la clé Wifi visiteurs. Le but est donc de concevoir une application mobile afin de récupérer ses informations stockées dans une base de données externe pour plus de sécurité."
  },
  {
    name: "BNEG",
    img: bneg,
    links: [
      {
        icon: github,
        url: "https://github.com/xxxx",
      },
    ],
    tags: ["Web", "Front", "Vitrine"],
    description: "Site spécialisé dans la vente de matériel agricole"
  },
  {
    name: "Fredi",
    img: fredi,
    links: [
      {
        icon: github,
        url: "https://github.com/xxxx",
      },
    ],
    tags: ["Front", "Back", "PHP", "SQL", "HTML", "CSS"],
    description: "La Maison des Ligues de Lorraine ( M2L ) nous as demandé de leurs créer un site web nommé FREDI dans lequel les associations sportives peuvent faire bénéficier des remises d’impôts aux adhérents engageant des frais."
  },
  {
    name: "Projet GSB",
    img: gsb,
    links: [
      {
        icon: github,
        url: "https://github.com/xxxx",
      },
    ],
    tags: ["Proposition commerciale", "Solution logicielles", "Masterisation", "Hardware"],
    description: "Le laboratoire Galaxy Swiss Bourdin (GSB) souhaite obtenir 480 ordinateurs portables pour leurs visiteurs. Nous leurs avons donc proposé plusieurs devis et aiguillés au mieux afin qu'ils fassent le bon choix"
  },
  {
    name: "Projet SAM/SIO",
    img: sam_sio,
    links: [
      {
        icon: github,
        url: "https://github.com/xxxx",
      },
    ],
    tags: ["Front", "Site web", "Vitrine", "HTML", "CSS"],
    description: "Un groupe d’étudiante de BTS SAM ( Support à l’action Managériale ) nous a contacté afin de leurs réaliser un site WEB vitrine (Jels and Co) portant sur la garde animalière."
  }
];

const subtitle = "Toujours à la recherche de nouvelles connaissances, j'aime créer des projets pendant mon temps libre.";

function Projects() {
	return (
		<section id="projects" className="mt-20 mb-20">
			<div className="projects-header mb-10">
				<p className="text-center text-xl">{subtitle}</p>
			</div>
			<div className="projects-slider max-w-7xl mx-auto">
				<Slider {...settings}>
					{projects.map((project, index) => (
						<div key={index} className="project-card p-4">
							<img className="w-full h-40 object-contain mb-4" src={project.img} alt={project.name} />
							<div className="project-details">
								<h3 className="project-name text-lg font-semibold">{project.name}</h3>
								<div className="project-tags mt-2">
									{project.tags.map((tag, tagIndex) => (
										<span
											className="tag bg-gray-200 text-gray-700 py-1 px-2 rounded-lg mr-2 mb-2"
											key={tagIndex}
										>
											{tag}
										</span>
									))}
								</div>
								<p className="project-description mt-2 text-gray-600">
									{project.description}
								</p>
								<div className="project-links mt-2">
									{project.links.map((link, linkIndex) => (
										<a
											className="link mr-2"
											key={linkIndex}
											href={link.url}
											target="_blank"
										>
											<img className="h-6" src={link.icon} alt={link.url} />
										</a>
									))}
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}

export default Projects;