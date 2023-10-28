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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur sapiente repellat excepturi atque perspiciatis ipsam, ea dolor ipsa quisquam natus alias fugit numquam aut, illo id delectus autem doloremque?",
    stacks: ["React JS", "TailwindCSS"],
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
