import { authHeader, IsValidJSONString, getUserId } from '../helpers'
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
  verifyEmail,
  update,
  delete: _delete,
}


/* 
fetches all information related to the current logged in user
address, roles, profile image etc
*/
async function getCurrentUserInfo() {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  }
  const userId = getUserId()
  const response = await fetch(
    `/api/user/${userId}/summary`,
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
    `/api/user/${userId}/verifyEmail`,
    requestOptions
    )
    return handleResponse(response)
  }

async function login(email, password, rememberMe) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, rememberMe }),
  }

  const response = await fetch(
    `/oauth2/login`,
    requestOptions
  )
  const user = await handleResponse(response)
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  if (user && user.status < 300 && user.data && rememberMe)
    localStorage.setItem('user', JSON.stringify(user.data))
  return user
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
    `/api/user/logout`,
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
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  const response = await fetch(
    `/oauth2/signup`,
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
    `/oauth2/password/reset`,
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
    `/oauth2/password/update`,
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
    `/api/user/${user.id}`,
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
    `/api/user/${id}`,
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
      // trying to get as much information about the error as can get
      const error =
        response.statusText ||
        (data.message && data.error && data.error + ': ' + data.message) ||
        data.message ||
        data.error ||
        data
      return Promise.reject(error)
    }
    return data
  })
}
