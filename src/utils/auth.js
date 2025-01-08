const baseUrl = 'http://localhost:3001';

class Auth {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl; // easy to create instances of auth with diff base url's if needed
    } // auth class has auth-related methods + gives reusable functions for api requests

    _checkResponse(res) {
        if (res.ok) {
            return res.json(); // if successful, parse json
        }
        return Promise.reject(`Error: ${res.status}`); // reject promise with err message with status code
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse);
    } // combines url and options - method, headers, body - and ensures response is checked using _checkresponse
    // avoids repeating fetch logic in each method
    
    // register({ name, email, password }) {
    //     return this._request(`${this._baseUrl}/signup`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ name, email, password }),
    //     });
    //   }

    // login({ email, password }) {
    //     return this._request(`${this._baseUrl}/signin`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ email, password }),
    //     });
    //   }



}

export const auth = new Auth({ baseUrl });