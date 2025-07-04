/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import gospelcorner from "../assets/gospelcorner.avif";
import ghosttalk from "../assets/ghosttalk.avif";
import tipytools from "../assets/tipytools.avif";
import hojobs from "../assets/hojobs.avif";
import placeholder from "../assets/default.avif";
import tipytools_logo from "../assets/tipytools_logo.jpg";
import movr from "../assets/movr.png";
import opsh from "../assets/opsh.png"
import gitboard from "../assets/gitboard.png"

import SectionTitle from "./SectionTitle";

const projects = [
  {
    name: "Movr",
    url: "https://movr.vercel.app",
    stacks: ["Next JS", "Tailwindcss", "Framer Motion"],
    image: movr,
    desc: "A movie recommendation web app.",
  },
  {
    name: "Open Shortener",
    url: "https://opsh.vercel.app/",
    stacks: ["Next JS", "Next JS API", "Tailwindcss"],
    image: opsh,
    desc: "Open is a free and open-source tool for shortening URLs. It provides a simple and efficient way to shorten long URLs, making them easier to share and manage.",
  },
  {
    name: "Tipytools",
    url: "https://tipytools.vercel.app",
    stacks: ["React JS", "Django", "Tailwindcss"],
    image: tipytools,
    desc: "An open source community for developing packages and other development tools.",
  },
  {
    name: "GitBoard",
    url: "https://gitboard-one.vercel.app/",
    stacks: ["Next JS", "GitHub API", "Tailwindcss"],
    image: gitboard,
    desc: "GitHub in colors",
  },
  {
    name: "GhostTalk",
    url: "https://ghosttalk.netlify.app/",
    stacks: ["React JS", "Django", "Tailwindcss"],
    image: ghosttalk,
    desc: "This web app allows a user to share his/her profile link and receive honest feedback from friends and family without revealing their identity.",
  },
  {
    name: "Gospel Corner",
    url: "https://gospelcorner.vercel.app",
    stacks: ["React JS", "Django", "Tailwindcss"],
    image: gospelcorner,
    desc: "A blog website for sharing the gospel of God.",
  },
  {
    name: "Ho Jobs",
    url: "https://hojobs.vercel.app",
    stacks: ["React JS", "Django", "Tailwindcss"],
    image: hojobs,
    desc: "A website to where employers can post jobs for people to find and apply.",
  },
  {
    name: "SimpliDB",
    url: "https://github.com/maulydev/SimpliDB",
    stacks: ["Python"],
    image: placeholder,
    desc: "A python package to simplify sqlite3 database operations.",
  },
  {
    name: "Tipy UI Snippets",
    url: "https://marketplace.visualstudio.com/items?itemName=Tipytools.tipy-ui-snippets",
    stacks: ["VSCode"],
    image: tipytools_logo,
    desc: "Tipy UI Snippets is a Visual Studio Code extension providing a comprehensive collection of React JSX/TSX code snippets tailored to streamline your development process.",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.url}
      rel="noreferrer"
      target="_blank"
      className="flex flex-col md:flex-row gap-4 items-center p-4 rounded-xl transition-all duration-500 shadow-inner hover:shadow-cyan-500 shadow-cyan-500/50 group backdrop-blur-sm bg-slate-950/10"
    >
      <div className="hidden md:block shrink-0 md:w-32 md:h-full rounded-lg overflow-hidden p-[2px] bg-cyan-950">
        <img
          className="object-cover rounded"
          src={project.image || placeholder}
          alt=""
        />
      </div>
      <div className="[&>*]:transition-all [&>*]:duration-1000">
        <span className="text-xl font-bold group-hover:text-cyan-400">
          {project.name}
        </span>
        <p className="group-hover:text-cyan-300">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mt-4 text-xs">
          {project.stacks.map((item) => (
            <span
              key={item}
              className="bg-cyan-500/30 text-cyan-200 tracking-wider rounded px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <section className="space-y-8" id="projects">
      <SectionTitle title="THINGS I'VE BUILT" />
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </section>
  );
};

export default Projects;
