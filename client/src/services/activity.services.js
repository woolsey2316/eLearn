import { authHeader, getUserId, IsValidJSONString } from '../helpers'
import { API_URL } from './index';

export const activityService = {
    getActivityFeed
  }
  
  /* 
    fetches all activity notifications a User has
    */
  async function getActivityFeed() {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(),
    }
    const userId = getUserId()
    const response = await fetch(
      `${API_URL}/activities/${userId}`,
      requestOptions
    )
    return handleResponse(response)
  }

  function handleResponse(response) {
    return response.text().then((text) => {
      const data = IsValidJSONString(text) ? JSON.parse(text) : text
  
      if (!response.ok) {
        return Promise.reject(response.status + " " + response.statusText)
      }
      return data
    })
  }