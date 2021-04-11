function PopupWithForm(props) {

  const popupClassNames = `popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={popupClassNames}>
      <div className="popup__container">
        <form className={`form form_type_${props.name}`} name={props.name} onSubmit={props.onSubmit}>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button className="button button_type_save" type="submit">{props.buttonTitle}</button>
        </form>
        <button className="button button_type_close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
