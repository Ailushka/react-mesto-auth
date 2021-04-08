import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {

  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
  `button ${isOwn ? 'button_type_delete' : ''}`
);

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
  `button button_type_like ${isLiked ? 'button_clicked' : ''}`
);


  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);

  }

  return (
    <li className="gallery__item">
      <img className="gallery__item-image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} aria-label="Удалить"></button>
      <div className="gallery__item-info">
        <h2 className="gallery__item-title">{props.card.name}</h2>
        <div className="gallery__item-likes">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="Нравится"></button>
          <span className="gallery__item-like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
