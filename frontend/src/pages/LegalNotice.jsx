import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "../styles/LegalNotice.scss";

function LegalNotice() {
  return (
    <>
      <Header />

      <main className="legal-notice">
        <div className="legal-notice__container">
          <Link to="/" className="legal-notice__back">
            ← Retour à l'accueil
          </Link>

          <h1>Mentions légales</h1>

          <section>
            <h2>Éditeur du site</h2>

            <p>
              Le présent portfolio est édité par
              <strong> Anthony Nivault</strong>, développeur web Full Stack
              junior basé en France.
            </p>

            <p>
              <strong>Directeur de la publication :</strong> {" "}
              Anthony Nivault
            </p>
          </section>

          <section>
            <h2>Hébergement</h2>

            <p>
              Le site est hébergé par le fournisseur choisi lors de la mise en
              production (Vercel, Netlify ou GitHub Pages).
            </p>
          </section>

          <section>
            <h2>Propriété intellectuelle</h2>

            <p>
              L'ensemble des contenus présents sur ce site (textes, images,
              code, design et réalisations) est la propriété exclusive
              d'Anthony Nivault, sauf mention contraire.
            </p>

            <p>
              Toute reproduction, modification ou diffusion, totale ou
              partielle, sans autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2>Données personnelles</h2>

            <p>
              Les données éventuellement transmises via le formulaire de
              contact sont utilisées uniquement pour répondre aux demandes
              envoyées.
            </p>

            <p>
              Aucune donnée personnelle n'est vendue, cédée ou transmise à
              des tiers.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>

            <p>Ce site n'utilise aucun cookie de suivi ou publicitaire.</p>

            <p>
              Seuls les cookies strictement nécessaires au bon fonctionnement
              technique du site peuvent être utilisés.
            </p>
          </section>

          <section>
            <h2>Liens externes</h2>

            <p>
              Ce site peut contenir des liens vers des sites externes tels
              que GitHub ou LinkedIn.
            </p>

            <p>
              Anthony Nivault ne peut être tenu responsable du contenu ou des
              politiques de confidentialité de ces sites tiers.
            </p>
          </section>

          <section>
            <h2>Contact</h2>

            <p>
              Pour toute question relative au site, veuillez utiliser le
              formulaire de contact disponible sur la page d'accueil.
            </p>
          </section>

          <section>
            <h2>Dernière mise à jour</h2>
            <p>Juin 2026</p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default LegalNotice;