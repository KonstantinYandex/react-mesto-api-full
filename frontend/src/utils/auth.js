import { toContainElement } from '@testing-library/jest-dom/dist/matchers';

import api from './Api'

export const BASE_URL = 'http://api.konstantinnovikov.nomoredomains.xyz';

//const checkResponse = (response) => response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`)

const checkResponse = (res) => {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
};

export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
    }).then(checkResponse)
        .then((data) => {
            if (data.token) {
                localStorage.setItem('jwt', data.token);
                api.updateHeaders()
                return data.token
            }
        })
};

export const getContent = (token) => {
    console.log(token)
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then(checkResponse)
        .then((data) => data)
}