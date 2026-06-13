import { Link } from "react-router-dom";

import Header from "../components/header/Header";

import "../styles/NotFound.scss";

function NotFound() {
  return (
    <>
      <Header />

      <main className="not-found">
        <div className="not-found__content">
          <h1>404</h1>

          <h2>Oups, cette page n'existe pas.</h2>

          <p>
            Le projet ou la page que vous recherchez est introuvable.
          </p>

          <Link to="/" className="not-found__button">
            Retour à l'accueil
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;