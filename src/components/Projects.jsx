/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
const projects = [
  {
    name: "Tipytools",
    url: "https://tipytools.vercel.app",
    stacks: ["React JS", "Django", "Tailwindcss"],
  },
  {
    name: "Gospel Corner",
    url: "https://gospelcorner.vercel.app",
    stacks: ["React JS", "Django", "Tailwindcss"],
  },
  {
    name: "Ho Jobs",
    url: "https://hojobs.vercel.app",
    stacks: ["React JS", "Django", "Tailwindcss"],
  },
  {
    name: "SimpliDB",
    url: "https://github.com/maulydev/SimpliDB",
    stacks: ["Python"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.url}
      rel="noreferrer"
      target="_blank"
      className="flex flex-col md:flex-row gap-4 items-center border border-slate-500 p-4 rounded-xl hover:border-cyan-500 hover:shadow-2xl group"
    >
      <div className="hidden md:block shrink-0 md:w-32 md:h-full rounded-lg overflow-hidden">
        <img
          className="object-cover"
          src="https://cdn.pixabay.com/photo/2020/02/24/04/25/web-design-4875183_1280.jpg"
          alt=""
        />
      </div>
      <div className="[&>*]:transition-all [&>*]:duration-1000">
        <h6 className="text-xl font-bold group-hover:text-cyan-400">{project.name}</h6>
        <p className="group-hover:text-cyan-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores fuga
          sapiente voluptatibus commodi eaque deserunt repellat temporibus
          reiciendis aspernatur dolorum.
        </p>
        <div className="flex flex-wrap gap-2 mt-4 text-xs">
          {project.stacks.map((item) => (
            <span
              key={item}
              className="bg-cyan-500/30 text-cyan-200 tracking-wider rounded-full px-3 py-1"
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
      <h3 className="font-bold text-xl">THINGS I'VE BUILT</h3>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </section>
  );
};

export default Projects;
