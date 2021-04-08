import { useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile container">
        <div className="profile__overlay" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Фото профиля" src={currentUser.avatar} />
        </div>
        <div className="profile__text">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button" className="button button_type_edit" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button type="button" className="button button_type_add" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>

      <section className="gallery container">
        <ul className="gallery__list">

          {props.cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            );
          })}

        </ul>
      </section>
    </main>
  );
}

export default Main;
