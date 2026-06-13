import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "../styles/PolitiqueConfidentialite.scss";

function PolitiqueConfidentialite() {
  return (
    <>
      <Header />

      <main className="legal-page">
        <div className="legal-page__container">
          <Link to="/" className="legal-page__back">
            ← Retour à l'accueil
          </Link>

          <h1>Politique de confidentialité</h1>

          <section>
            <h2>Introduction</h2>
            <p>
              Anthony Nivault s'engage à protéger la vie privée des
              visiteurs de son portfolio. Cette politique de
              confidentialité explique quelles données sont collectées,
              comment elles sont utilisées et quels sont vos droits
              conformément au Règlement Général sur la Protection des
              Données (RGPD).
            </p>
          </section>

          <section>
            <h2>Responsable du traitement</h2>
            <p>Le responsable du traitement est :</p>

            <p>
              <strong>Anthony Nivault</strong>
              <br />
              Développeur Web Full Stack
              <br />
              France
            </p>
          </section>

          <section>
            <h2>Données collectées</h2>
            <p>
              Lors de l'utilisation du formulaire de contact, les données
              suivantes peuvent être collectées :
            </p>

            <ul>
              <li>Nom</li>
              <li>Adresse e-mail</li>
              <li>Message</li>
            </ul>

            <p>
              Ces informations sont fournies volontairement par
              l'utilisateur afin d'entrer en contact avec l'éditeur du
              site.
            </p>
          </section>

          <section>
            <h2>Finalité du traitement</h2>
            <p>
              Les données collectées sont utilisées uniquement pour répondre
              aux demandes envoyées via le formulaire de contact.
            </p>
          </section>

          <section>
            <h2>Destinataires des données</h2>
            <p>
              Les données transmises via le formulaire de contact sont
              destinées exclusivement à Anthony Nivault.
            </p>

            <p>
              Afin de permettre l'envoi des messages, les données peuvent
              transiter par le service EmailJS.
            </p>

            <p>Aucune donnée n'est vendue, louée ou cédée à des tiers.</p>
          </section>

          <section>
            <h2>Durée de conservation</h2>
            <p>
              Les messages reçus via le formulaire de contact sont conservés
              uniquement pendant la durée nécessaire au traitement de la
              demande.
            </p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>

            <ul>
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit d'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition</li>
              <li>Droit à la portabilité</li>
            </ul>

            <p>
              Pour exercer ces droits, vous pouvez utiliser le formulaire de
              contact disponible sur ce site.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              Ce site n'utilise aucun cookie publicitaire, de suivi marketing
              ou d'analyse d'audience.
            </p>

            <p>
              Seuls les cookies strictement nécessaires au fonctionnement du
              site peuvent être utilisés.
            </p>
          </section>

          <section>
            <h2>Sécurité</h2>
            <p>
              Des mesures techniques et organisationnelles sont mises en
              œuvre afin de protéger les données contre tout accès non
              autorisé, perte ou divulgation.
            </p>
          </section>

          <section>
            <h2>Modification de la politique</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour à
              tout moment afin de refléter l'évolution du site ou de la
              réglementation.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Pour toute question relative à cette politique de
              confidentialité, vous pouvez utiliser le formulaire de contact
              du site.
            </p>
          </section>

          <p className="legal-page__date">Dernière mise à jour : Juin 2026</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PolitiqueConfidentialite;