import Footer from "./Footer";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Skill from "./Skill";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";

function App() {
  return (
    <>
      <NavBar />
      {/* About Section */}
      <About />
      {/* Education Section */}
      <Education />
      {/* Skill Section !! */}
      <Skill />
      {/* Experience Section */}
      <Experience />
      {/* Projects Section !! */}
      <Projects />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
