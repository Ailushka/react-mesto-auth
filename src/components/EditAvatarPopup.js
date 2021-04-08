import PopupWithForm from './PopupWithForm.js';
import { useRef } from 'react';

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
  e.preventDefault();

  props.onUpdateAvatar({
    avatar: avatarRef.current.value,
  });
}

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title='Обновить аватар'
      name={'avatar-update-form'}
      buttonTitle='Сохранить'
      onSubmit={handleSubmit}
    >
      <input
        className="form__item form__item_type_avatar-update"
        type="url"
        name="link"
        placeholder="Ссылка на аватар"
        id="avatar-update"
        required
        ref={avatarRef}
      />
      <span id="avatar-update-error" className="form__item-error"></span>

    </PopupWithForm>
  );
}

export default EditAvatarPopup;
