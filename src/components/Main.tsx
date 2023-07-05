import About from "./About.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import Education from "./Education.tsx";
import Header from "./Header.tsx";
import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";
import Hero from "./Hero.tsx";

function Main() {
  return (
    <div>
      <div>
        <Header/>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Main;