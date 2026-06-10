import "./InfoCard.scss";

function InfoCard({ title, children }) {
  return (
    <article className="info-card">
      <h2>{title}</h2>
      <div className="info-card__content">
        {children}
      </div>
    </article>
  );
}

export default InfoCard;