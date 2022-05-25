import { authHeader, getUserId } from '../helpers'
import { API_URL } from './index';
import { handleResponse } from './services-util'
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to user data. CRUD operations
  are performed here, as well as login/register.
*/
export const examService = {
  getAllExams,
  getAllUserExams,
  getExamResultsByCourse,
  getExamResult,
  submitExam,
}

/* 
  fetches all exams a User has registered to in a particular course
  */
async function getAllUserExams(courseId) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  }
  const userId = getUserId()
  const response = await fetch(
    `${API_URL}/users/courses/${courseId}/${userId}/exams`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  fetches all exams a User has registered to
  */
  async function getAllExams() {
    const requestOptions = {
      method: 'GET',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
    }
    const userId = getUserId()
    const response = await fetch(
      `${API_URL}/courses/exams/${userId}`,
      requestOptions
    )
    return handleResponse(response)
  }

/* 
  fetches all exam results belonging to a course
  */
  async function getExamResultsByCourse(courseId) {
    const requestOptions = {
      method: 'GET',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
    }

    const response = await fetch(
      `${API_URL}/exams/courses/${courseId}`,
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
    `${API_URL}/users/${userId}/exams/${examId}/result`,
    requestOptions
  )
  return handleResponse(response)
}

/* 
  submit question of an exam a User has attended
  */
async function submitExam(exam) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(exam),
  }
  const userId = getUserId()
  const response = await fetch(
    `${API_URL}/users/${userId}/exams/${exam.examId}/submit`,
    requestOptions
  )
  return handleResponse(response)
}
