import { SKILLS } from "../data/portfolioData";
import "./styles/Skills.css";

function Skills({ sectionRef }) {
  return (
    <section ref={sectionRef} id="skills" className="hero-wrapper">
      <div className="section-card">
        <h2 className="section-title">My Skills</h2>

        <div className=" skills-grid">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="skill-card">
                <img src={skill.icon} alt={skill.name} loading="lazy" />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;