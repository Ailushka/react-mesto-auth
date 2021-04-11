import { useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick, onCardLike, onCardDelete}) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile container">
        <div className="profile__overlay" onClick={onEditAvatar}>
          <img className="profile__avatar" alt="Фото профиля" src={currentUser.avatar} />
        </div>
        <div className="profile__text">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button" className="button button_type_edit" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button type="button" className="button button_type_add" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>

      <section className="gallery container">
        <ul className="gallery__list">

          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}

        </ul>
      </section>
    </main>
  );
}

export default Main;
