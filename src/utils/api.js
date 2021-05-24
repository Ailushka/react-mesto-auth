class Api {
  constructor({ url, token }) {
    this._url = url;
    this._token = token;
  }

  // загрузка информации о пользователе с сервера (получаем данные пользователя)
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
      }
    })
    .then(this._checkResponse)
  }

  // загрузка карточек с сервера (получаем список всех карточек в виде массива)
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  // редактирование профиля (меняем данные пользователя)
  patchUserInfo(user) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        about: user.about
      })
    })
    .then(this._checkResponse)
  }

  // добавление новой карточки
  postCard(item) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
    .then(this._checkResponse)
  }

  // удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  // постановка или снятие лайка
  toggleLikeCardStatus(cardId, hasLike) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: hasLike ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  // обновление аватара пользователя
  patchUserAvatar(user) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: user.avatar
      })
    })
    .then(this._checkResponse)
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({
  url: 'https://api.ailushka.nomoredomains.club',
  token: `Bearer ${localStorage.getItem('jwt')}`
});

export default api;

//mesto.nomoreparties.co/v1/cohort-20', 'aeac4cc4-9284-4753-bb8f-afa2eb1b5233
