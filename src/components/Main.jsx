import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="md:p-24 p-8 font-light md:h-screen overflow-y-auto scroll-pt-24 scroll-smooth">
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
