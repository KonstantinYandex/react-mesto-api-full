class Api {
  constructor({ address, headers }) {
    this._address = address;
    this._headers = headers;
  }

  getOriginsCards() {
    return fetch(`${this._address}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  postUserInfo(name, about) {
    console.log(name);
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  addNewCard(name, link) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkResponse);
  }

  editUserAvatar(url) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then(this._checkResponse);
  }

  removeCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  dislikeCard(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.dislikeCard(id);
    } else {
      return this.likeCard(id);
    }
  }

  likeCard(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }

    return res.json();
  }

  updateHeaders() {
    this._headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
  }
}

const api = new Api({
  address: "http://api.konstantinnovikov.nomoredomains.xyz",
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-type": "application/json",
  },
});

export default api;
