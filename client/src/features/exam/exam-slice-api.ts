import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../services'
import { authHeader } from '../../helpers'
import { Exam, ExamAnswerSheet } from '../../types/ExamState'

// Define a service using a base URL and expected endpoints
export const examApi = createApi({
  reducerPath: 'examApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    submit: builder.mutation<void, ExamAnswerSheet>({
      query: (exam) => {
        return {
          method: 'POST',
          url: `users/exams/${exam.examId}/submit`,
          headers: authHeader(),
          body: exam
        }
      },
    }),
    createExam: builder.mutation<void, {exam: Exam}>({
      query: (data) => {
        return {
          method: 'POST',
          url: `exams/create`,
          headers: authHeader(),
          body: data
        }
      }
    }),
    getUserExams: builder.query<void, void>({
      query: () => `exams/user`,
    }),
    getExamQuestions: builder.query<void, {examId: string}>({
      query: (data) => {
        return {
          url: `exams/${data.examId}/questions`,
          headers: authHeader()
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetExamQuestionsQuery, useCreateExamMutation, useSubmitMutation, useGetUserExamsQuery } = examApi