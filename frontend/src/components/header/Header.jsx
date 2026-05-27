import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        <a href="#hero" className="header__logo">Anthony Nivault</a>

        <nav className="header__nav">
          <ul className="header__menu">
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#timeline">Parcours</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" className="header__cta">Me contacter</a>
      </div>
    </header>);}

export default Header;