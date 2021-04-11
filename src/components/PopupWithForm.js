function PopupWithForm({name, isOpen, onSubmit, title, children, buttonTitle, onClose}) {

  const popupClassNames = `popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={popupClassNames}>
      <div className="popup__container">
        <form className={`form form_type_${name}`} name={name} onSubmit={onSubmit}>
          <h2 className="form__title">{title}</h2>
          {children}
          <button className="button button_type_save" type="submit">{buttonTitle}</button>
        </form>
        <button className="button button_type_close" type="button" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
