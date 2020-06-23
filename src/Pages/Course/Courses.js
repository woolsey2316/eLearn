import React from 'react'

import * as Icon from 'react-feather'

import { SideMenu } from '../../components'
import { MobileMenu } from '../../components'
import { TopBar } from '../../components'

function Courses(props) {
  return (
    <body class="app">
      {/*<!-- BEGIN: Mobile Menu -->*/}
      <MobileMenu />
      {/*<!-- END: Mobile Menu -->*/}
      <div style={{paddingLeft:"2.3em"}} class="flex">
        {/*<!-- BEGIN: Simple Menu -->*/}
        {props.sideMenu}
        {/*<!-- END: Simple Menu -->*/}
        {/*<!-- BEGIN: Content -->*/}
        <div class="content">
          {/*<!-- BEGIN: Top Bar -->*/}
          <TopBar />
          {/*<!-- END: Top Bar -->*/}
          <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">Enrolled Courses</h2>
          </div>
          <div class="intro-y box overflow-hidden mt-5">
            <h2 class="text-lg font-medium p-5">Not Enrolled in any Courses</h2>
          </div>
          {/*<!-- BEGIN: Invoice -->*/}
          <div class="intro-y box overflow-hidden mt-5">
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
                    <tr>
                      <td class="border-b">
                        <div class="font-medium whitespace-no-wrap">Exam 1</div>
                        <div class="text-gray-600 text-xs whitespace-no-wrap">
                          06/05/2020
                        </div>
                      </td>
                      <td class="text-right border-b w-32">1</td>
                      <td class="text-right border-b w-32">90/95</td>
                      <td class="text-right border-b w-32 font-medium">95%</td>
                      <td class="text-right border-b w-32">71%</td>
                    </tr>
                    <tr>
                      <td class="border-b">
                        <div class="font-medium whitespace-no-wrap">Exam 2</div>
                        <div class="text-gray-600 text-xs whitespace-no-wrap">
                          06/05/2020
                        </div>
                      </td>
                      <td class="text-right border-b w-32">13</td>
                      <td class="text-right border-b w-32">76/100</td>
                      <td class="text-right border-b w-32 font-medium">76%</td>
                      <td class="text-right border-b w-32">69%</td>
                    </tr>
                    <tr>
                      <td class="border-b">
                        <div class="font-medium whitespace-no-wrap">Exam 3</div>
                        <div class="text-gray-600 text-xs whitespace-no-wrap">
                          06/05/2020
                        </div>
                      </td>
                      <td class="text-right border-b w-32">9</td>
                      <td class="text-right border-b w-32">76/100</td>
                      <td class="text-right border-b w-32 font-medium">76%</td>
                      <td class="text-right border-b w-32">69%</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="font-medium whitespace-no-wrap">Exam 4</div>
                        <div class="text-gray-600 text-xs whitespace-no-wrap">
                          06/05/2020
                        </div>
                      </td>
                      <td class="text-right w-32">14</td>
                      <td class="text-right w-32">76/100</td>
                      <td class="text-right w-32 font-medium">76%</td>
                      <td class="text-right border-b w-32">70%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="px-5 sm:px-20 pb-10 sm:pb-20 flex flex-col-reverse sm:flex-row">
              <div class="text-center sm:text-left mt-10 sm:mt-0">
                <div class="text-lg text-theme-1 font-medium mt-2">
                  David Woolsey
                </div>
                <div class="mt-1">Course Name : History1001</div>
                <div class="mt-1">Course Code : LFT133243</div>
              </div>
              <div class="text-center sm:text-right sm:ml-auto">
                <div class="text-base text-gray-600">Weighted Average</div>
                <div class="text-xl text-theme-1 font-medium mt-2">78%</div>
                <div class="mt-1 tetx-xs">Class Rank: 7</div>
              </div>
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