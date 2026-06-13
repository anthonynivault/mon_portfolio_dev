import { useEffect, useState } from "react";

import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const sectionIds = ["hero", "about", "skills", "projects", "timeline", "contact"];

const menuItems = [
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "timeline", label: "Parcours" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [activeSection, setActiveSection] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            ratio: entry.intersectionRatio,
          }));

        if (visibleSections.length > 0) {
          const mostVisible = visibleSections.reduce((current, next) =>
            next.ratio > current.ratio ? next : current
          );
          setActiveSection(mostVisible.id);
        }
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">AN</span>
          <span className="header__logo-text">
            Anthony
            <span className="header__logo-dev">.dev</span>
          </span>
        </Link>

        <nav className="header__nav">
          <ul className="header__menu">
            {menuItems.map(({ id, label }) => (
              <li key={id}>
                <HashLink
                  smooth
                  to={`/#${id}`}
                  className={
                    activeSection === id
                      ? "header__link header__link--active"
                      : "header__link"
                  }
                >
                  {label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>

        <HashLink smooth to="/#contact" className="header__cta">
          Me contacter
        </HashLink>
      </div>
    </header>
  );
}

export default Header;