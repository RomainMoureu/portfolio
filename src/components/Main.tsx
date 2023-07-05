import Hero from "./Hero.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import Education from "./Education.tsx";

function Main() {

  return (
    <div className="mt-16 w-full">
      <div>
        <Hero />
        <Skills />
        <Projects />
        <Education />
      </div>
    </div>
  );
}

export default Main;