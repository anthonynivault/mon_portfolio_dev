import { useParams, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCircleInfo,
  faBullseye,
  faLightbulb,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import projects from "../data/projects.json";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import InfoCard from "../components/InfoCard/InfoCard";
import NotFound from "./NotFound";

import "../styles/ProjectDetails.scss";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) return <NotFound />;

  return (
    <>
      <Header />

      <main className="project-details">
        <section className="project-hero">
          <div className="project-hero__container">
            <div className="project-hero__content">
              <HashLink smooth to="/#projects" className="project-hero__back">
                ← Retour aux projets
              </HashLink>

              <h1>{project.title}</h1>
              <p>{project.description}</p>

              <div className="project-hero__links">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-hero__demo"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Voir la
                    démo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-hero__github"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Code source
                  </a>
                )}
              </div>
            </div>

            <div className="project-hero__image">
              <img src={`/images/projects/${project.image}`} alt={project.title} />
            </div>
          </div>
        </section>

        <section className="project-content">
          <div className="project-content__layout">
            <div className="project-content__main">
              <div className="project-story">
                <section className="project-story__section">
                  <div className="project-story__header">
                    <span className="project-story__icon">
                      <FontAwesomeIcon icon={faCircleInfo} />
                    </span>
                    <h2>Contexte</h2>
                  </div>
                  <p>{project.context}</p>
                </section>

                <section className="project-story__section">
                  <div className="project-story__header">
                    <span className="project-story__icon">
                      <FontAwesomeIcon icon={faBullseye} />
                    </span>
                    <h2>Défi</h2>
                  </div>
                  <p>{project.challenge}</p>
                </section>

                <section className="project-story__section">
                  <div className="project-story__header">
                    <span className="project-story__icon">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </span>
                    <h2>Solution</h2>
                  </div>
                  <p>{project.solution}</p>
                </section>

                <section className="project-story__section">
                  <div className="project-story__header">
                    <span className="project-story__icon">
                      <FontAwesomeIcon icon={faChartLine} />
                    </span>
                    <h2>Résultats</h2>
                  </div>

                  <ul>
                    {project.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <aside className="project-sidebar">
              <InfoCard title="Stack technique">
                <div className="project-sidebar__tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </InfoCard>

              <InfoCard title="Compétences acquises">
                <ul className="project-sidebar__skills">
                  {project.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </InfoCard>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectDetails;