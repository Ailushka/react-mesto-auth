import logo from '../images/logo.svg';
import { Link, Route, useLocation } from 'react-router-dom';

function Header({currentUserEmail, onLogOut}) {

  const location = useLocation();

  return (
    <header className="header container">
      <div className="header__content">
        <img className="header__logo" src={logo} alt="Логотип проекта Mesto Russia" />
        <ul className="user-nav">
          <li className="user-nav__item user-nav__item_type_email">
          {
            location.pathname === '/'
            ? currentUserEmail
            : ''
          }
          </li>
          <li
            className="user-nav__item user-nav__item_type_sign"
            onClick={location.pathname === '/' ? onLogOut : () => {}}
          >
            <Route path="/signin">
              <Link to="/signup" className="user-nav__link">Регистрация</Link>
            </Route>
            <Route path="/signup">
              <Link to="/signin" className="user-nav__link">Войти</Link>
            </Route>
            <Route exact path="/">
              <Link to="/signin" className="user-nav__link">Выход</Link>
            </Route>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
