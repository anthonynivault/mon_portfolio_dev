import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function HomePage() {
  return (
    <>
      <Header />

      <main>

        <section id="hero">
          <h1>Accueil</h1>
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