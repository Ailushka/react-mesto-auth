import success from '../images/success.svg';
import fail from '../images/fail.svg';

function InfoTooltip({isOpen, status, onClose}) {

  const popupClassNames = `popup ${isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={popupClassNames}>
      <div className="infotooltip">
        <img className="infotooltip__image" src={status ? success : fail} alt={status ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'} />
        <p className="infotooltip__status">{status ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
        <button className="button button_type_close" type="button" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
