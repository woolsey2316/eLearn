import { authHeader, IsValidJSONString, getUserId } from '../helpers'
import { API_URL } from './index';
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to user data. CRUD operations
  are performed here, as well as login/register.
*/
export const userService = {
  login,
  logout,
  register,
  //getById,
  getUserDetails,
  setUserDetails,
  requestPasswordChange,
  changePassword,
  verifyEmail,
  delete: _delete,
}


/* 
fetches all information related to the current logged in user
address, roles, profile image etc
*/
async function getUserDetails() {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  }
  const userId = getUserId()
  const response = await fetch(
    `${API_URL}/users/${userId}/profile`,
    requestOptions
    )
    return handleResponse(response)
  }
  
async function verifyEmail() {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  }
  const userId = getUserId()
  const response = await fetch(
    `${API_URL}/user/${userId}/verifyEmail`,
    requestOptions
    )
    return handleResponse(response)
  }

async function login(email, password, rememberMe, dispatch) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, rememberMe }),
  }

  await fetch(
    `${API_URL}/users/login`,
    requestOptions
  )
  .then((response) => {
    if (response.ok === true) { 
      response.json().then(data => {
        setTimeout(() => console.log({data}),6000)
        if (data.success === true) {
          localStorage.setItem("USER_ID", data.id)
          localStorage.setItem("EMAIL", data.email)
          return localStorage.setItem("ACCESS_TOKEN_KEY", data.token);
        } else {
          return Promise.reject(new Error("toast.user.general_error"));
        }
      })
    } else {
      return Promise.reject(new Error(response.statusText));
    }
    
  })
}

async function logout() {
  const userId = getUserId()
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId }),
  }
  console.log('body:' + requestOptions.body)
  const response = await fetch(
    `${API_URL}/user/logout`,
    requestOptions
  )
  const user = await handleResponse(response)
  // remove user from local storage to log user out
  localStorage.removeItem('user')
  return user
}
    
async function register(user) {
  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  console.log(JSON.stringify(user))

  const response = await fetch(
    `${API_URL}/users/register`,
    requestOptions
  )
  return handleResponse(response)
}
// asks for permission to change password
async function requestPasswordChange(user) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  const response = await fetch(
    `${API_URL}/oauth2/password/reset`,
    requestOptions
  ).then((response) => {
    return response.text()
  })
  return handleResponse(response)
}

async function changePassword(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }
  const userId = getUserId()
  const response = await fetch(
    `${API_URL}/users/${userId}/password`,
    requestOptions
  )
  return handleResponse(response)
}

async function setUserDetails(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }
  const userId = getUserId()
  const response = await fetch(
    `${API_URL}/users/${userId}/profile`,
    requestOptions
  )
  return handleResponse(response)
}

// prefixed function name with underscore because delete is a reserved word in javascript
async function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  }

  const response = await fetch(
    `${API_URL}/user/${id}`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  checks if the http response from the api is 401 Unauthorized and 
  automatically logs the user out. This handles if the JWT token expires 
  or is no longer valid for any reason.
*/
function handleResponse(response) {
  return response.text().then((text) => {
    const data = IsValidJSONString(text) ? JSON.parse(text) : text

    if (!response.ok) {
      return Promise.reject(response.status.toString() + " " + response.statusText);
    }
    return data
  })
}
