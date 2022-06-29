import { BASE_URL } from './config'

export const GetUserInfo = async (token, userId) => {
  const data = await fetch(BASE_URL + `users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }).then((response) => response.json())
    .catch((error) => console.log(error))

  return data
}

export const UpdateUserInfo = async (token, userId, body) => {
  const data = await fetch(BASE_URL + `users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body)
  }).then((response) => response.json())
    .catch((error) => console.log(error))

  return data
}