import { useState, useEffect } from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
  })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
  })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile container">
        <div className="profile__overlay" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Фото профиля" src={userAvatar} />
        </div>
        <div className="profile__text">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="button button_type_edit" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" className="button button_type_add" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>

      <section className="gallery container">
        <ul className="gallery__list">

          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
              />
            );
          })}

        </ul>
      </section>
    </main>
  );
}

export default Main;
