import React from 'react'

import logo from '../assets/dist/images/logo.svg'
import profile15 from '../assets/dist/images/profile-15.jpg'
import profile5 from '../assets/dist/images/profile-5.jpg'
import profile12 from '../assets/dist/images/profile-12.jpg'
import preview1 from '../assets/dist/images/preview-1.jpg'
import preview2 from '../assets/dist/images/preview-2.jpg'
import profile14 from '../assets/dist/images/profile-14.jpg'
import profile8 from '../assets/dist/images/profile-8.jpg'
import profile13 from '../assets/dist/images/profile-13.jpg'
import profile1 from '../assets/dist/images/profile-1.jpg'
import profile7 from '../assets/dist/images/profile-7.jpg'
import profile4 from '../assets/dist/images/profile-4.jpg'
import profile11 from '../assets/dist/images/profile-11.jpg'
import { ProfileOptions } from '../Pages/profile'

import * as Icon from 'react-feather'

function MainContent() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 xxl:col-span-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 mt-8">
          <div className="intro-y flex items-center h-10">
            <h2 className="text-lg font-medium truncate mr-5">Overview</h2>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div className="report-box zoom-in">
                <div className="box p-5">
                  <div className="flex">
                    <Icon.Activity className="report-box__icon text-theme-10" />
                    <div className="ml-auto">
                      <div
                        className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                        title="33% Higher than last month"
                      >
                        33% <Icon.ChevronUp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold leading-8 mt-6">75%</div>
                  <div className="text-base text-gray-600 mt-1">
                    Exam Average
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div className="report-box zoom-in">
                <div className="box p-5">
                  <div className="flex">
                    <Icon.AlertCircle className="report-box__icon text-theme-9" />
                    <div className="ml-auto">
                      <div
                        className="report-box__indicator bg-theme-6 tooltip cursor-pointer"
                        title="2% Lower than last month"
                      >
                        2% <Icon.ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold leading-8 mt-6">2</div>
                  <div className="text-base text-gray-600 mt-1">
                    Active Tests
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div className="report-box zoom-in">
                <div className="box p-5">
                  <div className="flex">
                    <Icon.Monitor className="report-box__icon text-theme-12" />
                    <div className="ml-auto">
                      <div
                        className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                        title="12% Higher than last month"
                      >
                        12% <Icon.ChevronUp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold leading-8 mt-6">15</div>
                  <div className="text-base text-gray-600 mt-1">
                    Completed Tests
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div className="report-box zoom-in">
                <div className="box p-5">
                  <div className="flex">
                    <Icon.Grid className="report-box__icon text-theme-11" />
                    <div className="ml-auto">
                      <div
                        className="report-box__indicator bg-theme-9 tooltip cursor-pointer"
                        title="22% Higher than last month"
                      >
                        22% <Icon.ChevronUp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold leading-8 mt-6">4</div>
                  <div className="text-base text-gray-600 mt-1">
                    Total Enrolled Courses
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xxl:col-span-3 xxl:border-l border-theme-5 -mb-10 pb-10">
        <div className="flex">
          <div className="mt-3 mr-5" style={{ width: '60%' }}>
            <div className="intro-x flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Recent Activities
              </h2>
            </div>
            <div className="report-timeline mt-5 relative">
              <div className="intro-x relative flex items-center mb-3">
                <div className="report-timeline__image">
                  <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={profile4}
                    />
                  </div>
                </div>
                <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                  <div className="flex items-center">
                    <div className="font-medium">John Travolta</div>
                    <div className="text-xs text-gray-500 ml-auto">
                      07:00 PM
                    </div>
                  </div>
                  <div className="text-gray-600 mt-1">
                    Has scheduled a multiple choice test
                  </div>
                </div>
              </div>
              <div className="intro-x relative flex items-center mb-3">
                <div className="report-timeline__image">
                  <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={profile7}
                    />
                  </div>
                </div>
                <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                  <div className="flex items-center">
                    <div className="font-medium">John Travolta</div>
                    <div className="text-xs text-gray-500 ml-auto">
                      07:00 PM
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <div className="mt-1">
                      Has marked and released results for latest exam
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-x text-gray-500 text-xs text-center my-4">
                12 November
              </div>
              <div className="intro-x relative flex items-center mb-3">
                <div className="report-timeline__image">
                  <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={profile11}
                    />
                  </div>
                </div>
                <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                  <div className="flex items-center">
                    <div className="font-medium">Leonardo DiCaprio</div>
                    <div className="text-xs text-gray-500 ml-auto">
                      07:00 PM
                    </div>
                  </div>
                  <div className="text-gray-600 mt-1">
                    Has extended due date of test
                  </div>
                </div>
              </div>
              <div className="intro-x relative flex items-center mb-3">
                <div className="report-timeline__image">
                  <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={profile14}
                    />
                  </div>
                </div>
                <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                  <div className="flex items-center">
                    <div className="font-medium">Kevin Spacey</div>
                    <div className="text-xs text-gray-500 ml-auto">
                      07:00 PM
                    </div>
                  </div>
                  <div className="text-gray-600 mt-1">
                    Has extended due date of test
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3" style={{ width: '38%' }}>
            <div className="intro-x flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">Schedules</h2>
            </div>
            <div className="mt-5">
              <div className="intro-x box">
                <div className="p-5">
                  <div className="flex">
                    <Icon.ChevronLeft className="w-5 h-5 text-gray-600" />
                    <div className="font-medium mx-auto">April</div>
                    <Icon.ChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="grid grid-cols-7 gap-4 mt-5 text-center">
                    <div className="font-medium">Su</div>
                    <div className="font-medium">Mo</div>
                    <div className="font-medium">Tu</div>
                    <div className="font-medium">We</div>
                    <div className="font-medium">Th</div>
                    <div className="font-medium">Fr</div>
                    <div className="font-medium">Sa</div>
                    <div className="py-1 rounded relative text-gray-600">
                      29
                    </div>
                    <div className="py-1 rounded relative text-gray-600">
                      30
                    </div>
                    <div className="py-1 rounded relative text-gray-600">
                      31
                    </div>
                    <div className="py-1 rounded relative">1</div>
                    <div className="py-1 rounded relative">2</div>
                    <div className="py-1 rounded relative">3</div>
                    <div className="py-1 rounded relative">4</div>
                    <div className="py-1 rounded relative">5</div>
                    <div className="py-1 bg-theme-18 rounded relative">6</div>
                    <div className="py-1 rounded relative">7</div>
                    <div className="py-1 bg-theme-1 text-white rounded relative">
                      8
                    </div>
                    <div className="py-1 rounded relative">9</div>
                    <div className="py-1 rounded relative">10</div>
                    <div className="py-1 rounded relative">11</div>
                    <div className="py-1 rounded relative">12</div>
                    <div className="py-1 rounded relative">13</div>
                    <div className="py-1 rounded relative">14</div>
                    <div className="py-1 rounded relative">15</div>
                    <div className="py-1 rounded relative">16</div>
                    <div className="py-1 rounded relative">17</div>
                    <div className="py-1 rounded relative">18</div>
                    <div className="py-1 rounded relative">19</div>
                    <div className="py-1 rounded relative">20</div>
                    <div className="py-1 rounded relative">21</div>
                    <div className="py-1 rounded relative">22</div>
                    <div className="py-1 bg-theme-17 rounded relative">23</div>
                    <div className="py-1 rounded relative">24</div>
                    <div className="py-1 rounded relative">25</div>
                    <div className="py-1 rounded relative">26</div>
                    <div className="py-1 bg-theme-14 rounded relative">27</div>
                    <div className="py-1 rounded relative">28</div>
                    <div className="py-1 rounded relative">29</div>
                    <div className="py-1 rounded relative">30</div>
                    <div className="py-1 rounded relative text-gray-600">1</div>
                    <div className="py-1 rounded relative text-gray-600">2</div>
                    <div className="py-1 rounded relative text-gray-600">3</div>
                    <div className="py-1 rounded relative text-gray-600">4</div>
                    <div className="py-1 rounded relative text-gray-600">5</div>
                    <div className="py-1 rounded relative text-gray-600">6</div>
                    <div className="py-1 rounded relative text-gray-600">7</div>
                    <div className="py-1 rounded relative text-gray-600">8</div>
                    <div className="py-1 rounded relative text-gray-600">9</div>
                  </div>
                </div>
                <div className="border-t border-gray-200 p-5">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                    <span className="truncate">UI/UX Workshop</span>
                    <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                    <span className="font-medium xl:ml-auto">23th</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                    <span className="truncate">VueJs Frontend Development</span>
                    <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                    <span className="font-medium xl:ml-auto">10th</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                    <span className="truncate">Laravel Rest API</span>
                    <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                    <span className="font-medium xl:ml-auto">31th</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MainContent }
