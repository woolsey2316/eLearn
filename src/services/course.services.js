import { authHeader, IsValidJSONString } from '../helpers'
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to user data. CRUD operations
  are performed here, as well as login/register.
*/
export const courseService = {
  getAllCourses,
  getAllUserCourses,
  addCourse,
}

/* 
  fetches all courses a User has registered to
  */
async function getAllUserCourses(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${id}/courses`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  fetches all courses available on Elearn
  */
async function getAllCourses(page, size) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', mode: 'no-cors' },
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/courses?page=${page}&size=${size}`,
    requestOptions
  )
  return handleResponse(response)
}

async function addCourse(courseDTO) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(courseDTO),
  }
  const userID = JSON.parse(localStorage.getItem('user')).userId

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${userID}/courses`,
    requestOptions
  )
  const user = await handleResponse(response)
  return user
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = IsValidJSONString(text) ? JSON.parse(text) : text

    if (!response.ok) {
      console.log(`response: ${JSON.stringify(response)}`)
      // trying to get as much information about the error as I can get
      const error =
        response.statusText ||
        (data.message + data.error && data.error + ': ' + data.message) ||
        data.message ||
        data.error ||
        data
      return Promise.reject(error)
    }
    return data
  })
}
