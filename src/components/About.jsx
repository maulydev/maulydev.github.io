  import SectionTitle from "./SectionTitle";

  const About = () => {
    return (
      <section id="about">
        <div className="space-y-4 text-lg group">
          <SectionTitle title="ABOUT ME" />
          <p className="">
            I am Mawuli, a full-stack web developer, dedicated to
            crafting exceptional web applications. With expertise in both
            front-end and back-end development, I thrive on challenges and
            continuous learning.
          </p>

          <p>
            My focus is on designing web solutions that combine aesthetics with
            seamless user experiences. I excel in collaborative environments,
            solving intricate problems, and transforming innovative ideas into
            user-centric applications. I’m committed to staying current with
            evolving web technologies.
          </p>

          <p>
            In my free time, you can find me exploring new coding frameworks, or
            building personal side projects. I’m a strong believer in the
            open-source community and the power of collaboration.
          </p>
        </div>
      </section>
    );
  };

  export default About;
