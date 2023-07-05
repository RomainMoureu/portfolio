import Hero from "./Hero.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import Education from "./Education.tsx";
import Header from "./Header.tsx";

function Main() {

  return (
    <div className="mt-16 w-full">
      <div>
        <Header/>
        <Hero />
        <Skills />
        <Projects />
        <Education />
      </div>
    </div>
  );
}

export default Main;