import { useParams, Link } from "react-router-dom";

import projects from "../data/projects.json";

import "../styles/ProjectDetails.scss";

import InfoCard from "../components/InfoCard/InfoCard";
import NotFound from "./NotFound";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <NotFound />;
  }

  return (
    <main className="project-details">

      <section className="project-hero">

        <div className="project-hero__content">

          <Link
            to="/"
            className="project-hero__back"
          >
            ← Retour à l'accueil
          </Link>

          <div className="project-hero__tags">
            {project.technologies.map((tech) => (
              <span key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <h1>{project.title}</h1>

          <p>{project.description}</p>

          <div className="project-hero__links">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              Code source
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Voir la démo
              </a>
            )}

          </div>

        </div>

        <div className="project-hero__image">

          <img
            src={`/images/projects/${project.image}`}
            alt={project.title}
          />

        </div>

      </section>

      <section className="project-content">

        <div className="project-content__layout">

          <div className="project-content__main">

            <InfoCard title="Contexte">
              <p>{project.context}</p>
            </InfoCard>

            <InfoCard title="Défi">
              <p>{project.challenge}</p>
            </InfoCard>

            <InfoCard title="Solution">
              <p>{project.solution}</p>
            </InfoCard>

            <InfoCard title="Résultats">
              <ul>
                {project.results.map((result) => (
                  <li key={result}>
                    {result}
                  </li>
                ))}
              </ul>
            </InfoCard>

          </div>

          <aside className="project-sidebar">

            <InfoCard title="Stack technique">
              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Compétences acquises">
              <ul>
                {project.skills.map((skill) => (
                  <li key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Liens">

              <div className="project-sidebar__links">

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

            </InfoCard>

          </aside>

        </div>

      </section>

    </main>
  );
}

export default ProjectDetails;