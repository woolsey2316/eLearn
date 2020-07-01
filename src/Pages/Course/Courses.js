import React from 'react'

import * as Icon from 'react-feather'

import { MobileMenu } from '../../components'
import { TopBar } from '../../components'
import { Course } from './Course'

function Courses(props) {
  return (
    <body className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">Enrolled Courses</h2>
            <a
              href="/student/CourseRegister"
              className="ml-auto flex items-center text-theme-1 font-medium"
            >
              <Icon.Plus className="w-5 h-5" />
              Enrol in new Course
            </a>
          </div>
          <div className="intro-y box overflow-hidden mt-5">
            <div class="overflow-x-auto">
              <table class="table">
                <thead>
                  <tr class="bg-gray-700 text-white">
                    <th class="whitespace-no-wrap">#</th>
                    <th class="whitespace-no-wrap">Course Name</th>
                    <th class="whitespace-no-wrap">Course Code</th>
                    <th class="whitespace-no-wrap">Exam Status</th>
                    <th class="whitespace-no-wrap">Exam details</th>
                  </tr>
                </thead>
                <tbody>
                  <Course name={'Mathematics'} code={'Math101'} active={true} />
                  <Course name={'Science'} code={'Sci2312'} active={false} />
                  <Course name={'History'} code={'Hist323'} active={false} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export { Courses }
