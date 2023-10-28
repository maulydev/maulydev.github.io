import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="p-8 lg:px-8 lg:py-24 xl:p-24 font-light lg:h-screen overflow-y-auto scroll-mt-52 scroll-pt-24 scroll-smooth space-y-24">
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
