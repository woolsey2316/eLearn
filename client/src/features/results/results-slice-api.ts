import { createApi } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../services'
import { authHeader, createBaseQueryWithReauth } from '../../helpers'
import { Exam, ExamAnswerSheet, ExamQuestions, ExamQuestionsOverview } from '../../types/ExamState'

// Define a service using a base URL and expected endpoints
export const resultsApi = createApi({
  reducerPath: 'resultsApi',
  baseQuery: createBaseQueryWithReauth(API_URL),
  endpoints: (builder) => ({
    getUserExamResultsByCourse: builder.query({
      query: (courseId) => {
        return {
          url: `/users/courses/${courseId}/exam-results`,
          headers: authHeader()
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserExamResultsByCourseQuery } = resultsApi