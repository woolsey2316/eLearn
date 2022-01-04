import { authHeader, IsValidJSONString, getUserId } from '../helpers'
import { API_URL } from './index';
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to user data. CRUD operations
  are performed here, as well as login/register.
*/
export const dashboardService = {
  getUserDashboard,
}

async function getUserDashboard() {
  const userId = getUserId()
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  }
  const response = await fetch(
    `${API_URL}/dashboard/${userId}`,
    requestOptions
  )
  const dashboard = await handleResponse(response)
  return dashboard
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
      return Promise.reject( response.status + " " + response.statusText)
    }
    return data
  })
}
