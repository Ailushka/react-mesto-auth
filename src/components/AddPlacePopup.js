import { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {

  const [placeName, setPlaceName] = useState('');
  const [placeLink, setPlaceLink] = useState('');

  function handlePlaceNameChange(e) {
    setPlaceName(e.target.value);
  }

  function handlePlaceLinkChange(e) {
    setPlaceLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
    name: placeName,
    link: placeLink,
  });
    setPlaceName('');
    setPlaceLink('');
}

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title='Новое место'
      name={'add-form'}
      buttonTitle='Создать'
      onSubmit={handleSubmit}
    >
      <fieldset className="form__content form__add-card">
        <input
          className="form__item form__item_type_card-name"
          value={placeName}
          onChange={handlePlaceNameChange}
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          id="card-name"
          required
        />
        <span id="card-name-error" className="form__item-error"></span>
        <input
          className="form__item form__item_type_card-link"
          value={placeLink}
          onChange={handlePlaceLinkChange}
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          id="card-link"
          required
        />
        <span id="card-link-error" className="form__item-error"></span>
      </fieldset>

    </PopupWithForm>
);
}

export default AddPlacePopup;
