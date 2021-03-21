import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
    <Header />
    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
    />
    <Footer />

    <PopupWithForm
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      title={'Редактировать профиль'}
      name={'edit-form'}
      buttonTitle={'Сохранить'}
    >
      <fieldset className="form__content form__user-info">
        <input className="form__item form__item_type_name" type="text" name="name" minLength="2" maxLength="40" id="user-name" required noValidate />
        <span id="user-name-error" className="form__item-error"></span>
        <input className="form__item form__item_type_job" type="text" name="job" minLength="2" maxLength="200" id="user-job" required noValidate />
        <span id="user-job-error" className="form__item-error"></span>
      </fieldset>

    </PopupWithForm>

    <PopupWithForm
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      title={'Новое место'}
      name={'add-form'}
      buttonTitle={'Создать'}
    >
      <fieldset className="form__content form__add-card">
        <input className="form__item form__item_type_card-name" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" id="card-name" required noValidate />
        <span id="card-name-error" className="form__item-error"></span>
        <input className="form__item form__item_type_card-link" type="url" name="link" placeholder="Ссылка на картинку" id="card-link" required noValidate />
        <span id="card-link-error" className="form__item-error"></span>
      </fieldset>

    </PopupWithForm>

    <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}
    />

    <PopupWithForm
      title={'Вы уверены?'}
      name={'confirm-form'}
      buttonTitle={'Да'}
    >
    </PopupWithForm>

    <PopupWithForm
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      title={'Обновить аватар'}
      name={'avatar-update-form'}
      buttonTitle={'Сохранить'}
    >
      <input className="form__item form__item_type_avatar-update" type="url" name="link" placeholder="Ссылка на аватар" id="avatar-update" required noValidate />
      <span id="avatar-update-error" className="form__item-error"></span>

    </PopupWithForm>

  </>
  );
}

export default App;
