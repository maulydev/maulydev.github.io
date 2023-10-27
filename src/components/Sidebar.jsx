import { useEffect, useState } from "react";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    console.log(activeLink);
  }, [activeLink]);

  const styles = {
    divStyle:
      "w-12 group-hover:w-20 group-hover:transition-all duration-1000 bg-slate-500 h-[2px]",
    divActiveStyle: "w-20 bg-cyan-600",
    aStyle: "flex items-center space-x-2 group",
  };

  return (
    <div className="flex flex-col justify-between md:p-24 p-8 cursor-default">
      <section>
        <header className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">Mawuli Ernest</h1>
          <h4 className="text-slate-200">FullStack Web Developer</h4>
          <p className="text-slate-400 text-lg">
            Crafting End-to-End Digital Solutions with Full-Stack Wizardry.
          </p>
        </header>

        <ul className="space-y-2 cursor-pointer">
          <li onClick={() => setActiveLink("about")}>
            <a href="#about" className={styles.aStyle}>
              <div
                className={`${styles.divStyle} ${
                  activeLink === "about" && styles.divActiveStyle
                }`}
              ></div>
              <span
                className={`${
                  activeLink === "about" && "text-cyan-500"
                } relative`}
              >
                ABOUT
              </span>
            </a>
          </li>
          <li onClick={() => setActiveLink("skills")}>
            <a href="#skills" className={styles.aStyle}>
              <div
                className={`${styles.divStyle} ${
                  activeLink === "skills" && styles.divActiveStyle
                }`}
              ></div>
              <span
                className={`${
                  activeLink === "skills" && "text-cyan-500"
                } relative`}
              >
                SKILLS
              </span>
            </a>
          </li>
          <li onClick={() => setActiveLink("projects")}>
            <a href="#projects" className={styles.aStyle}>
              <div
                className={`${styles.divStyle} ${
                  activeLink === "projects" && styles.divActiveStyle
                }`}
              ></div>
              <span
                className={`${
                  activeLink === "projects" && "text-cyan-500"
                } relative`}
              >
                PROJECTS
              </span>
            </a>
          </li>
        </ul>
      </section>

      <ul className="grid grid-cols-3 w-max gap-4 text-2xl mt-12">
        <li>
          <a
            href="https://github.com/maulydev"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/maulydotdev"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/maulydotdev"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
