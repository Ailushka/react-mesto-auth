import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header container">
      <div className="header__content">
        <img className="header__logo" src={logo} alt="Логотип проекта Mesto Russia" />
      </div>
    </header>
  );
}

export default Header;
