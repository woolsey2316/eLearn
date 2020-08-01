import React, { useEffect } from 'react'

import * as Icon from 'react-feather'

import { MobileMenu } from '../../components'
import { TopBar } from '../../components'

import { useDispatch, useSelector } from 'react-redux'

import { courseActions } from '../../actions'

import { CourseTable } from './CourseTable'

function Courses(props) {
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses.userCourseList)
  const page = 0
  const size = 20

  useEffect(() => {
    fetchCourses()
    return console.log('course: ' + courses)
  }, [])

  function fetchCourses() {
    dispatch(courseActions.getAllUserCourses(page, size))
  }

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">Enrolled Courses</h2>
            <a
              href="/student/courses/CourseRegister"
              className="ml-auto flex items-center text-theme-1 font-medium"
            >
              <Icon.Plus className="w-5 h-5" />
              Enrol in new Course
            </a>
          </div>
          <div className="intro-y box overflow-hidden mt-5">
            <div className="box p-5">
              <div className="overflow-x-auto">
                <CourseTable courses={courses} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Courses }
