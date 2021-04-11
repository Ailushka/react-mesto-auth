import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register({onRegister}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(email, password);
  }

  return (
    <section className="sign">
      <form className="form form_type_sign-up" onSubmit={handleSubmit}>
        <h2 className="sign__title">Регистрация</h2>
        <fieldset className="form__content form__sign">
          <input
            className="sign__item"
            value={email}
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            className="sign__item"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            required
          />
        </fieldset>
        <button type="submit" className="sign__button">Зарегистрироваться</button>
      </form>
      <div className="sign__login">
          <p className="sign__login-text">Уже зарегистрированы?</p>
          <Link to="/sign-in" className="sign__login-link">Войти</Link>
        </div>
    </section>
  );
}

export default Register;
