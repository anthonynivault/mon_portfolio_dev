import "./ProjectCard.scss";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <img
        src={`/images/projects/${project.image}`}
        alt={project.title}
      />

      <div className="project-card__content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card__tags">
          {project.technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Démo
            </a>
          )}

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;