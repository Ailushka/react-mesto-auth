function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="gallery__item">
      <img className="gallery__item-image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <button type="button" className="button button_type_delete" aria-label="Удалить"></button>
      <div className="gallery__item-info">
        <h2 className="gallery__item-title">{props.card.name}</h2>
        <div className="gallery__item-likes">
          <button type="button" className="button button_type_like" aria-label="Нравится"></button>
          <span className="gallery__item-like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
