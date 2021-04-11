import { useState } from 'react';

function Login(props) {
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

    props.onLogin(email, password);
  }

  return (
    <section className="sign">
      <form className="form form_type_sign-in" onSubmit={handleSubmit}>
        <h2 className="sign__title">Вход</h2>
        <fieldset className="form__content form__sign">
          <input
            className="sign__item"
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            className="sign__item"
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            required
          />
        </fieldset>
        <button type="submit" className="sign__button">Войти</button>
      </form>
    </section>
  );
}

export default Login;
