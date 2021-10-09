import React, { useState, useEffect, useCallback } from 'react'

import { CourseDropdown } from '../../components'
import { MobileMenu } from '../../components'
import { TopBar } from '../../components'

import { useDispatch, useSelector } from 'react-redux'

import { examActions } from '../../actions'
import { courseActions } from '../../actions'

function ExamResults(props) {
  const [course, setCourse] = useState('Exam #1')
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses.userCourseList)
  const exams = useSelector((state) => state.exams.userExamList)
  const page = 0
  const size = 20

  const fetchExams = useCallback(() => {
    dispatch(examActions.getAllExams(1))
  },[dispatch])

  useEffect(() => {
    fetchExams()
    return console.log('exams: ' + exams)
  }, [exams, fetchExams])

  const fetchCourses = useCallback(() => {
    dispatch(courseActions.getAllUserCourses(page, size))
  }, [dispatch, page, size])

  useEffect(() => {
    fetchCourses()
    return console.log('course: ' + courses)
  }, [courses, fetchCourses])

  return (
    <body class="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div class="content">
          <TopBar open={props.openModal} />
          <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">Grades</h2>
          </div>
          <div class="intro-y box overflow-hidden mt-5">
            <div class="flex flex-col lg:flex-row pt-10 px-5 sm:px-20 sm:pt-20 lg:pb-20 text-center sm:text-left">
              <CourseDropdown course={course} setCourse={setCourse} />
            </div>
            <div class="flex flex-col lg:flex-row border-b px-5 sm:px-20 pt-10 pb-10 sm:pb-20 text-center sm:text-left">
              <div>
                <div class="text-base text-gray-600">Course Details</div>
                <div class="text-lg font-medium text-theme-1 mt-2">
                  Instructor: Arnold Schwarzenegger
                </div>
                <div class="mt-1">arnodlschwarzenegger@gmail.com</div>
                <div class="mt-1">260 W. Storm Street New York, NY 10025.</div>
              </div>
            </div>
            <div class="px-5 sm:px-16 py-10 sm:py-20">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="border-b-2 whitespace-no-wrap">DESCRIPTION</th>
                      <th class="border-b-2 text-right whitespace-no-wrap">
                        Rank
                      </th>
                      <th class="border-b-2 text-right whitespace-no-wrap">
                        Score
                      </th>
                      <th class="border-b-2 text-right whitespace-no-wrap">
                        Score (%)
                      </th>
                      <th class="border-b-2 text-right whitespace-no-wrap">
                        Average
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      //exams.map(exam => <ExamResultCard exam={exam}/>)
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div class="px-5 sm:px-20 pb-10 sm:pb-20 flex flex-col-reverse sm:flex-row">
              <div class="text-center sm:text-left mt-10 sm:mt-0">
                <div class="text-lg text-theme-1 font-medium mt-2">
                  David Woolsey
                </div>
                <div class="mt-1">Course Name : {course.name}</div>
                <div class="mt-1">Course Code : LFT133243</div>
              </div>
              <div class="text-center sm:text-right sm:ml-auto">
                <div class="text-base text-gray-600">Weighted Average</div>
                <div class="text-xl text-theme-1 font-medium mt-2">78%</div>
                <div class="mt-1 tetx-xs">Class Rank: 7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export { ExamResults }
