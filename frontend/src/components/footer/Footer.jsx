import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">

          <a
            href="/"
            className="footer__logo"
          >
            <span className="footer__logo-square"></span>

            Anthony
            <span className="footer__logo-dev">
              .dev
            </span>
          </a>

          <p>
            Développeur Web Full Stack.
            Passionné par la création
            d'applications web modernes,
            performantes et accessibles.
          </p>

        </div>

        <div className="footer__links">

  <div className="footer__column">

    <h3>Me suivre</h3>

    <a
      href="https://github.com/anthonynivault"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/TON-PROFIL"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>

  </div>

  <div className="footer__column">

    <h3>Informations</h3>

    <a href="#">
      Mentions légales
    </a>

  </div>

</div>

      </div>

      <div className="footer__bottom">
        <p>
          © 2026 Anthony Nivault — Développeur Web Full Stack.
          Tous droits réservés.
        </p>
      </div>

    </footer>
  );
}

export default Footer;