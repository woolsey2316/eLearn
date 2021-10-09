import { authHeader, IsValidJSONString, getUserId } from '../helpers'
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to course data.
*/
export const courseService = {
  getAllCourses,
  getAllUserCourses,
  addCourse,
}

/* 
  fetches all courses a User has registered to
  */
async function getAllUserCourses(page, size) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }
  const userId = getUserId()
  const response = await fetch(
    `/users/${userId}/courses?page=${page}&size=${size}`,
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
    `/courses?page=${page}&size=${size}`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  User registers for a course
  */
async function addCourse(courseDTO) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(courseDTO),
  }
  const userID = getUserId()

  const response = await fetch(
    `/users/${userID}/courses`,
    requestOptions
  )
  const user = await handleResponse(response)
  return user
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
