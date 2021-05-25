import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({card, onCardClick, onCardLike, onCardDelete}) {

  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;
  const cardDeleteButtonClassName = (
  `button ${isOwn ? 'button_type_delete' : ''}`
);

  const isLiked = card.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = (
  `button button_type_like ${isLiked ? 'button_clicked' : ''}`
);


  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
    console.log(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
    console.log(card);
  }

  return (
    <li className="gallery__item">
      <img className="gallery__item-image" src={card.link} alt={card.name} onClick={handleClick}/>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} aria-label="Удалить"></button>
      <div className="gallery__item-info">
        <h2 className="gallery__item-title">{card.name}</h2>
        <div className="gallery__item-likes">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="Нравится"></button>
          <span className="gallery__item-like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
