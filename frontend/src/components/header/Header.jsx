import "./Header.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        <Link to="/" className="header__logo">
  <span className="header__logo-icon">
    AN
  </span>

  <span className="header__logo-text">
    Anthony
    <span className="header__logo-dev">
      .dev
    </span>
  </span>
</Link>

        <nav className="header__nav">
          <ul className="header__menu">
            <li>
  <HashLink smooth to="/#about">
    À propos
  </HashLink>
</li>

<li>
  <HashLink smooth to="/#skills">
    Compétences
  </HashLink>
</li>

<li>
  <HashLink smooth to="/#projects">
    Projets
  </HashLink>
</li>

<li>
  <HashLink smooth to="/#timeline">
    Parcours
  </HashLink>
</li>

<li>
  <HashLink smooth to="/#contact">
    Contact
  </HashLink>
</li>
          </ul>
        </nav>
        <HashLink smooth to="/#contact" className="header__cta">
  Me contacter
</HashLink>
      </div>
    </header>);}

export default Header;