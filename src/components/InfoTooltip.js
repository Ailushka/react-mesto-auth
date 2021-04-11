import success from '../images/success.svg';
import fail from '../images/fail.svg';

function InfoTooltip(props) {

  const popupClassNames = `popup ${props.isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={popupClassNames}>
      <div className="infotooltip">
        <img className="infotooltip__image" src={props.status ? success : fail} alt={props.status ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'} />
        <p className="infotooltip__status">{props.status ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
        <button className="button button_type_close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
