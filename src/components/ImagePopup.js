function ImagePopup({card, onClose}) {

  const popupClassNames = `popup ${card ? 'popup_opened' : ''}`;

  return (
    <div className={popupClassNames}>
      <div className="popup__image-container">
        <img className="popup__image" src={card && card.link} alt={card && card.name} />
        <h3 className="popup__image-title">{card && card.name}</h3>
        <button className="button button_type_close" type="button" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
