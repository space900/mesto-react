

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="photo-grid__card">
      <img
        src={`${card.link}`}
        alt={`${card.name}`}
        className="photo-grid__image"

        onClick={handleClick}
      />
      <button
        className="photo-grid__delete-btn"
        aria-label="Удалить"
        type="button"
      ></button>
      <h3 className="photo-grid__title">{card.name}</h3>
      <div className="photo-grid__like-container">
        <button
          className="photo-grid__like-btn"
          aria-label="Лайк"
          type="button"
        ></button>
        <h4 className="photo-grid__like-count">{card.likes.length}</h4>
      </div>
    </li>
  );
}

export default Card;
