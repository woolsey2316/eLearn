import { authHeader, getUserId, IsValidJSONString } from '../helpers'
import { API_URL } from './index';
import { handleResponse } from './services-util'

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