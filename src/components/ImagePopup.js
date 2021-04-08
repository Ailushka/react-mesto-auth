function ImagePopup(props) {

  let popupOpened;
  props.card ? popupOpened = 'popup_opened' : popupOpened = '';

  return (
    <div className={`popup popup_type_image ${popupOpened}`}>
      <div className="popup__image-container">
        <img className="popup__image" src={props.card && props.card.link} alt={props.card && props.card.name} />
        <h3 className="popup__image-title">{props.card && props.card.name}</h3>
        <button className="button button_type_close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
