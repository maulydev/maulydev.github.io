import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <section className="space-y-8" id="skills">
      <SectionTitle title="MY MAGICAL TOOLS" />
      <div>
        <h6 className="text-xl font-medium">Front-End</h6>
        <p>HTML, CSS, JavaScript, React, Tailwindcss</p>
      </div>
      <div>
        <h6 className="text-xl font-medium">Back-End</h6>
        <p>Python, Django</p>
      </div>
      <div>
        <h6 className="text-xl font-medium">Databases</h6>
        <p>MySQL, PostgreSQL</p>
      </div>
      <div>
        <h6 className="text-xl font-medium">Version Control</h6>
        <p>Git, GitHub</p>
      </div>
      <div>
        <h6 className="text-xl font-medium">Other Tools</h6>
        <p>VS Code, Postman, Trello, Slack, Jira</p>
      </div>
    </section>
  );
};

export default Skills;
