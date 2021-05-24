class Auth {
  constructor(baseUrl) {
    this._url = baseUrl;
  }

  // регистрация
  signup(password, email) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    })
    .then(this._checkResponse)
  }

  // авторизация
  signin(password, email) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    })
    .then(this._checkResponse)
  }

  // проверка токена
  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkResponse)
    .then(data => data)
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const auth = new Auth('https://api.ailushka.nomoredomains.club');

export default auth;

//'https://auth.nomoreparties.co'
