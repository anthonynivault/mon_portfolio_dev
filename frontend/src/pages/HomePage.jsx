import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faDatabase,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import projects from "../data/projects.json";
import photo from "../assets/images/anthony.webp";

import "../styles/HomePage/About.scss";
import "../styles/HomePage/Contact.scss";
import "../styles/HomePage/Hero.scss";
import "../styles/HomePage/Projects.scss";
import "../styles/HomePage/Skills.scss";
import "../styles/HomePage/Timeline.scss";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section id="hero" className="hero">
          <div className="hero__container">
            <div className="hero__content">
              <h1>Anthony Nivault</h1>
              <h2>Développeur Web Full Stack</h2>

              <p>
                Développeur Web Full Stack en formation chez OpenClassrooms,
                je conçois des applications modernes, performantes et
                accessibles. Passionné par le développement front-end et
                back-end, j'aime transformer des problématiques concrètes en
                solutions fiables et maintenables grâce à React, Node.js,
                Express et MongoDB.
              </p>

              <div className="hero__actions">
                <a href="#projects" className="hero__button">
                  Voir mes projets
                </a>

                <a
                  href="https://github.com/anthonynivault"
                  target="_blank"
                  rel="noreferrer"
                  className="hero__github-button"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </div>
            </div>

            <div className="hero__visual">
              <img src={photo} alt="Anthony Nivault" fetchPriority="high"/>

              <div className="hero__tech-card">
                <p className="hero__tech-card-main">React • Node.js</p>
                <p className="hero__tech-card-secondary">MongoDB • Express</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="about__container">
            <span className="about__label">À PROPOS</span>

            <h2 className="about__title">
              Un développeur passionné par le web
              <br />
              et l'amélioration continue
            </h2>

            <div className="about__content">
              <p>
                Après plusieurs expériences professionnelles, j'ai choisi de me
                reconvertir dans le développement web afin de transformer ma
                passion pour l'informatique en métier.
                <br />
                Grâce à la formation Développeur Web d'OpenClassrooms, j'ai
                acquis des compétences en intégration web, développement
                front-end et développement back-end.
              </p>

              <p>
                Je m'intéresse particulièrement aux sujets d'accessibilité, de
                référencement naturel, de performance web et de sécurité.
                Mon objectif est de développer des applications modernes,
                maintenables et utiles aux utilisateurs, tout en continuant à
                progresser sur l'ensemble de la stack technique.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="skills__container">
            <span className="skills__label">COMPÉTENCES</span>
            <h2 className="skills__title">Stack technique</h2>

            <div className="skills__grid">
              <article className="skills__card">
                <div className="skills__icon">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <h3>Front-end</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript ES6+</li>
                  <li>React</li>
                  <li>Sass</li>
                  <li>Responsive Design</li>
                </ul>
              </article>

              <article className="skills__card">
                <div className="skills__icon">
                  <FontAwesomeIcon icon={faServer} />
                </div>
                <h3>Back-end</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>API REST</li>
                  <li>JWT</li>
                  <li>Authentification</li>
                </ul>
              </article>

              <article className="skills__card">
                <div className="skills__icon">
                  <FontAwesomeIcon icon={faDatabase} />
                </div>
                <h3>Base de données</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Modélisation</li>
                </ul>
              </article>

              <article className="skills__card">
                <div className="skills__icon">
                  <FontAwesomeIcon icon={faScrewdriverWrench} />
                </div>
                <h3>Outils & qualité</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Lighthouse</li>
                  <li>SEO</li>
                  <li>Accessibilité</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="projects__container">
            <span className="projects__label">PROJETS</span>

            <h2 className="projects__title">Sélection de réalisations</h2>

            <p className="projects__subtitle">
              Une sélection de projets illustrant mon parcours et l'évolution
              de mes compétences en développement web.
            </p>

            <div className="projects__grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="timeline">
          <div className="timeline__container">
            <span className="timeline__label">PARCOURS</span>
            <h2 className="timeline__title">Mon évolution</h2>

            <div className="timeline__list">
              <article className="timeline__card">
                <span className="timeline__year">2025 - 2026</span>
                <h3>Formation Développeur Web — OpenClassrooms</h3>
                <p>
                  Formation professionnalisante couvrant HTML, CSS, JavaScript,
                  React, Node.js, Express, MongoDB, SEO, accessibilité et
                  gestion de projet.
                </p>
              </article>

              <article className="timeline__card">
                <span className="timeline__year">2026</span>
                <h3>Plusieurs projets professionnalisants réalisés</h3>
                <p>
                  Réalisation de projets front-end, back-end et full stack :
                  Booki, Sophie Bluel, Nina Carducci, Kasa, Mon Vieux Grimoire,
                  Qwenta et d'autres projets personnels.
                </p>
              </article>

              <article className="timeline__card">
                <span className="timeline__year">Aujourd'hui</span>
                <h3>Développeur Web Full Stack</h3>
                <p>
                  Recherche d'un premier poste afin de mettre en pratique mes
                  compétences et continuer à progresser sur des projets
                  concrets.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact__container">
            <span className="contact__label">CONTACT</span>
            <h2 className="contact__title">Travaillons ensemble</h2>

            <p className="contact__subtitle">
              Une opportunité, une question ou simplement envie d'échanger ?
              N'hésitez pas à me contacter.
            </p>

            <form className="contact__form">
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Votre email"
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>

              <div className="contact__checkbox">
                <input type="checkbox" id="privacy" required />
                <label htmlFor="privacy">
                  J'accepte que mes données soient utilisées afin de répondre à
                  ma demande conformément à la{' '}
                  <Link to="/confidentialite">politique de confidentialité</Link>.
                </label>
              </div>

              <button type="submit" className="contact__button">
                Envoyer le message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;