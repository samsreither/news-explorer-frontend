const baseUrl = 'http://localhost:3001';

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
      }
    return Promise.reject(`Error: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getUser(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },

    });
  }

  saveArticle({ keyword, title, text, date, source, link, image }, token) {
    return this._request(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    });
  }

  getArticles(token) {
    return this._request(`${this._baseUrl}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  }

  deleteArticle(articleId, token) {
    return this._request(`${this._baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  }
}

export const api = new MainApi({ baseUrl });