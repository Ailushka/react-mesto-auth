import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {

  const location = useLocation();

  return (
    <header className="header container">
      <div className="header__content">
        <img className="header__logo" src={logo} alt="Логотип проекта Mesto Russia" />
        <ul className="user-nav">
          <li className="user-nav__item user-nav__item_type_email">
          {
            location.pathname === '/'
            ? props.currentUserEmail
            : ''
          }
          </li>
          <li
            className="user-nav__item user-nav__item_type_sign"
            onClick={location.pathname === '/' ? props.onLogOut : () => {}}
          >
          <Link className="user-nav__link" to={
            location.pathname === '/sign-up'
            ? '/sign-in'
            : location.pathname === '/sign-in'
            ? '/sign-up'
            : '/sign-in'
          }>
          {
            location.pathname === '/sign-up'
            ? 'Войти'
            : location.pathname === '/sign-in'
            ? 'Регистрация'
            : 'Выйти'
          }
          </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
