import PopupWithForm from './PopupWithForm.js';
import { useState, useRef } from 'react';

function EditAvatarPopup(props) {
  const currentAvatar = useRef();
  const [avatar, setAvatar] = useState('');

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
  e.preventDefault();

  props.onUpdateAvatar({
    avatar: currentAvatar.current.value,
  });
    setAvatar('');
}

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={'Обновить аватар'}
      name={'avatar-update-form'}
      buttonTitle={'Сохранить'}
      onSubmit={handleSubmit}
    >
      <input className="form__item form__item_type_avatar-update" type="url" name="link" placeholder="Ссылка на аватар" id="avatar-update" required noValidate value={avatar} onChange={handleAvatarChange} ref={currentAvatar} />
      <span id="avatar-update-error" className="form__item-error"></span>

    </PopupWithForm>
  );
}

export default EditAvatarPopup;
