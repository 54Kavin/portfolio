import { PROJECTS } from "../data/portfolioData";
import "./styles/Projects.css";

function Projects({ sectionRef }) {
  return (
    <section ref={sectionRef} id="projects">
      <div className="section-card">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.title} className="project-card">
              <img src={project.image} alt={project.title} loading="lazy" className="img"/>

              <div className="project-body">
                <h5>{project.title}</h5>
                <p className="desc">{project.description}</p>

                <div className="tags-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="btn-project-view">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;