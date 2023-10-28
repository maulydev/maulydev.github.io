/* eslint-disable react/prop-types */
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    id: "front-atmos-2023",
    role: "Front-End Developer",
    workingPeriod: "2023 - present",
    company: "Atmos Technologies",
    location: "Ho, Ghana",
    workDescription:
      "As a Frontend Developer at Atmos Technologies, I have been actively involved in shaping the user interface and overall user experience of our web applications. During my tenure with the company",
    stacks: ["React JS", "TailwindCSS", "JavaScript"],
  },
  {
    id: "back-threb-2023",
    role: "Back-End Developer",
    workingPeriod: "Oct - 2023",
    company: "Trebnet Digitals",
    location: "Ho, Ghana",
    workDescription:
      "I worked as an API Developer at Trebnet Digitals, where I played a key role in designing and implementing APIs using Python and Django Rest Framework. During my time with the company",
    stacks: ["Python", "Django Rest Framework"],
  },
];

const ExpCard = ({ data }) => {
  return (
    <div className="select-none space-y-2 shadow-inner p-8 rounded-xl transition-all duration-500 hover:shadow-cyan-500 shadow-cyan-500/50 group backdrop-blur-sm bg-slate-950/10">
      <div className="flex justify-between">
        <span>{data.role}</span>
        <span>{data.workingPeriod}</span>
      </div>
      <h6 className="font-medium">
        {data.company} - {data.location}
      </h6>
      <p className="opacity-70 font-light">{data.workDescription}</p>
      <div className="flex gap-2 text-xs text-cyan-300">
        {data.stacks.map((stack, idx) => (
          <span
            key={idx}
            className="bg-cyan-500/30 px-3 p-1 tracking-wider rounded"
          >
            {stack}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="space-y-10">
      <SectionTitle title="MY EXPERIENCE" />

      {experiences.map((exp) => (
        <ExpCard key={exp.id} data={exp} />
      ))}
    </section>
  );
};

export default Experience;
