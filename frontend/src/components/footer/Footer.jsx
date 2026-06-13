import "./Footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        <div className="footer__column">

          <Link
  to="/"
  className="footer__logo"
  onClick={scrollToTop}
>
            <span className="footer__logo-square"></span>

            <span>
              Anthony
              <span className="footer__logo-dev">
                .dev
              </span>
            </span>
          </Link>

          <p>
            Développeur Web Full Stack.
            Passionné par la création
            d'applications web modernes,
            performantes et accessibles.
          </p>

        </div>

        <div className="footer__column">

          <h3>Informations</h3>

          <ul>
<li>
  <Link
    to="/mentions-legales"
    onClick={scrollToTop}
  >
    Mentions légales
  </Link>
</li>

<li>
  <Link
    to="/politique-de-confidentialite"
    onClick={scrollToTop}
  >
    Politique de confidentialité
  </Link>
</li>
          </ul>

        </div>

        <div className="footer__column">

          <h3>Me suivre</h3>

          <a
  href="https://github.com/anthonynivault"
  target="_blank"
  rel="noreferrer"
  className="footer__social-link"
>
  <FontAwesomeIcon icon={faGithub} />
  GitHub
</a>

<a
  href="https://www.linkedin.com/in/anthonynivault"
  target="_blank"
  rel="noreferrer"
  className="footer__social-link"
>
  <FontAwesomeIcon icon={faLinkedin} />
  LinkedIn
</a>

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