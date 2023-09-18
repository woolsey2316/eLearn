import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../services'
import { Course, CourseDTO, CourseType } from '../../types/CourseState'
import { authHeader } from '../../helpers'
import { IGenericResponse } from '../../types/HTTP'

export function HTTPResopnse(this: any, message: string) {
  this.message = message
  return {
    message: message
  }
}
export interface RegisterResp extends IGenericResponse {
  data: {
    msg?: string
  }
}
// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResp, CourseDTO>({
      query: (courseDTO) => {
        return {
          method: 'PUT',
          url: `courses/${courseDTO.id}`,
          headers: authHeader()
        }
      },
    }),
    getCourses: builder.query<{
      status: string,
      message?: string,
      count?: number,
      page?: number,
      pages?: number,
      data?: Course[]
    }, {page: number, size: number}>({
      query: ({page, size}) => {
        return {
          url: `courses?page=${page}&size=${size}`,
          headers: authHeader()
        }
      },
    }),
    getUserCourses: builder.query<CourseType[], void>({
      query: () => {
        return {
          url: 'courses/user',
          headers: authHeader()
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterMutation, useGetCoursesQuery, useGetUserCoursesQuery } = courseApi