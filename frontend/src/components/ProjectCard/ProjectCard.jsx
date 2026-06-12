import "./ProjectCard.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <Link
        to={`/projets/${project.slug}`}
        className="project-card__main-link"
      >
        <img
          src={`/images/projects/${project.image}`}
          alt={project.title}
        />
      </Link>

      <div className="project-card__content">

        <Link
          to={`/projets/${project.slug}`}
          className="project-card__main-link"
        >
          <h3>{project.title}</h3>

          <p>{project.description}</p>
        </Link>

        <div className="project-card__tags">
          {project.technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__links">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-card__button"
            >
              <FontAwesomeIcon icon={faGithub} />
              Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-card__button"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
              />
              Démo
            </a>
          )}

          <Link
            to={`/projets/${project.slug}`}
            className="project-card__details"
          >
            Détails

            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
            />
          </Link>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;