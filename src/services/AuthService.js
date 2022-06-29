import { BASE_URL } from './config'

export const AuthLoginService = async ({ email, password }) => {

  const data = await fetch(BASE_URL + 'auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({
      email,
      password
    }),
  }).then((response) => response.json())
    .catch((error) => console.log(error))

  return data;
}

export const AuthRegisterService = async ({ name, lastName, email, password, phoneNumber }) => {
  const data = await fetch(BASE_URL + 'auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      lastName,
      phoneNumber,
      email,
      password
    })
  }).then((response) => response.json())
    .catch((error) => console.log(error))

  return data
}

export const AuthLogoutService = async (token) => {
  
  const data = await fetch(BASE_URL + 'auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((response) => response.json())
    .catch((error) => console.log(error))

  return data
}