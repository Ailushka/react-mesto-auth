import PopupWithForm from './PopupWithForm.js';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({onUpdateUser, isOpen, onClose}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title='Редактировать профиль'
      name={'profile-form'}
      buttonTitle='Сохранить'
      onSubmit={handleSubmit}
    >
      <fieldset className="form__content form__user-info">
        <input
          className="form__item form__item_type_name"
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          id="user-name"
          required
        />
        <span id="user-name-error" className="form__item-error"></span>
        <input
          className="form__item form__item_type_job"
          value={description}
          onChange={handleDescriptionChange}
          type="text"
          name="job"
          minLength="2"
          maxLength="200"
          id="user-job"
          required
        />
        <span id="user-job-error" className="form__item-error"></span>
      </fieldset>

    </PopupWithForm>
  );
}

export default EditProfilePopup;
