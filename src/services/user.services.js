import { authHeader, IsValidJSONString} from '../helpers'
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
  getCurrentUserInfo,
  requestPasswordChange,
  changePassword,
  update,
  delete: _delete,
}

async function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    requestOptions
  )
  const user = await handleResponse(response)
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  localStorage.setItem('user', JSON.stringify(user))
  return user
}

async function logout() {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  }
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/sign-out`,
    requestOptions
  )
  const user = await handleResponse(response)
  // remove user from local storage to log user out
  localStorage.removeItem('user')
  return user
}

/*
async function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${id}`,
    requestOptions
  )
  return handleResponse(response)
}
*/
/* 
  fetches all information related to the current logged in user
  address, roles, profile image etc
  */
async function getCurrentUserInfo(user) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/current`,
    requestOptions
  )
  return handleResponse(response)
}

async function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/sign-up`,
    requestOptions
  )
  return handleRegisterResponse(response)
}
// asks for permission to change password
async function requestPasswordChange(user) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/request-pass`,
    requestOptions
  ).then((response) => {
    return response.text()
  })
  return handleResponse(response)
}

async function changePassword(user) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/reset-pass`,
    requestOptions
  )
  return handleResponse(response)
}

async function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${user.id}`,
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
    `${process.env.REACT_APP_API_URL}/users/${id}`,
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
      console.log(`response: ${JSON.stringify(response)}`)
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        // forces a reload after user object is deleted
        window.location.reload(true)
      }
      // trying to get as much information about the error as I can get
      const error = response.statusText || 
        (data.message + data.error && data.error + ": " + data.message) || 
        data.message || data.error || data
      return Promise.reject(error)
    }
    return data
  })
}

function handleRegisterResponse(response) {
  return response.text().then((text) => {
    const data = IsValidJSONString(text) ? JSON.parse(text) : text

    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        // forces a reload after user object is deleted
        window.location.reload(true)
      }
      if (response.status === 409) {
        // auto logout if 409 response returned from api
        logout()
        // forces a reload after user object is deleted
        window.location.reload(true)
      }
      const error = response.statusText || 
      (data.message + data.error && data.error + ": " + data.message) || 
      data.message || data.error || data
      return Promise.reject(error)
    }
    window.location.reload(true)
    return data
  })
}
