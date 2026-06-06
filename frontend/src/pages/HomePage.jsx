import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/About.scss";

import "../styles/Hero.scss";

import photo from "../assets/images/anthony.webp";

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

              <a
                href="#projects"
                className="hero__button"
              >
                Voir mes projets
              </a>

            </div>

            <div className="hero__visual">

  <img
    src={photo}
    alt="Anthony Nivault"
  />

  <div className="hero__tech-card">

  <p className="hero__tech-main">
    React • Node.js
  </p>

  <p className="hero__tech-secondary">
    MongoDB • Express
  </p>

</div>

</div>
          </div>
        </section>

        <section id="about" className="about">
  <div className="about__container">

    <span className="about__label">
      À PROPOS
    </span>

    <h2 className="about__title">
      Un développeur passionné par le web
      <br />
      et l'amélioration continue
    </h2>

    <div className="about__content">

      <p>
        Après plusieurs expériences professionnelles,
        j'ai choisi de me reconvertir dans le développement
        web afin de transformer ma passion pour
        l'informatique en métier.

        Grâce à la formation Développeur Web
        d'OpenClassrooms, j'ai acquis des compétences
        en intégration web, développement front-end
        et développement back-end.
      </p>

      <p>
        Je m'intéresse particulièrement aux sujets
        d'accessibilité, de référencement naturel,
        de performance web et de sécurité.

        Mon objectif est de développer des applications
        modernes, maintenables et utiles aux utilisateurs,
        tout en continuant à progresser sur l'ensemble
        de la stack technique.
      </p>

    </div>

  </div>
</section>

        <section id="skills">
          <h2>Compétences</h2>
        </section>

        <section id="projects">
          <h2>Projets</h2>
        </section>

        <section id="timeline">
          <h2>Parcours</h2>
        </section>

        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;