import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";
import ScrollToTop from "../components/ScrollToTop";
import SectionDots from "../components/SectionDots";

function Home() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      <SectionDots />
      <ScrollToTop />
    </div>
  );
}

export default Home;