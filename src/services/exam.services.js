import { authHeader, IsValidJSONString, getUserId } from '../helpers'
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to user data. CRUD operations
  are performed here, as well as login/register.
*/
export const examService = {
  getAllUserExams,
  getExamResult,
  getExamQuestions,
  submitExam,
}

/* 
  fetches all exams a User has registered to
  */
async function getAllUserExams(courseId) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  }
  const userId = getUserId()
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${userId}/course/${courseId}/exams`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  fetches all results of an exam a User has
  */
async function getExamResult(examId) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  }
  const userId = getUserId()
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${userId}/exams/${examId}/result`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  fetches all questions of an exam
  */
async function getExamQuestions(examId) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  }
  const userId = getUserId()
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${userId}/exams/${examId}/questions`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  sumbit question of an exam a User has attended
  */
async function submitExam(examId) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  }
  const userId = getUserId()
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${userId}/exams/${examId}/submit`,
    requestOptions
  )
  return handleResponse(response)
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
