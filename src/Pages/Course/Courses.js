import React from 'react'

import * as Icon from 'react-feather'

import { SideMenu } from '../../components'
import { MobileMenu } from '../../components'
import { TopBar } from '../../components'
import { Course } from './Course'

import preview15 from '../../assets/dist/images/preview-15.jpg'
import preview14 from '../../assets/dist/images/preview-14.jpg'
import preview9 from '../../assets/dist/images/preview-9.jpg'
import preview3 from '../../assets/dist/images/preview-3.jpg'
import preview11 from '../../assets/dist/images/preview-11.jpg'
import preview1 from '../../assets/dist/images/preview-1.jpg'
import preview5 from '../../assets/dist/images/preview-5.jpg'
import preview12 from '../../assets/dist/images/preview-12.jpg'
import preview2 from '../../assets/dist/images/preview-2.jpg'
import preview7 from '../../assets/dist/images/preview-7.jpg'
import preview8 from '../../assets/dist/images/preview-8.jpg'
import preview13 from '../../assets/dist/images/preview-13.jpg'

function Courses(props) {
  return (
    <body className="app">
      {/*<!-- BEGIN: Mobile Menu -->*/}
      <MobileMenu />
      {/*<!-- END: Mobile Menu -->*/}
      <div className="flex px-2 sm:px-10">
        {/*<!-- BEGIN: Simple Menu -->*/}
        {props.sideMenu}
        {/*<!-- END: Simple Menu -->*/}
        {/*<!-- BEGIN: Content -->*/}
        <div className="content">
          {/*<!-- BEGIN: Top Bar -->*/}
          <TopBar open={props.openModal}/>
          {/*<!-- END: Top Bar -->*/}
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
          {/*<!-- BEGIN: Invoice -->*/}
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
          {/*<!-- END: Invoice -->*/}
        </div>
        {/*<!-- END: Content -->*/}
      </div>
    </body>
  )
}

export { Courses }
