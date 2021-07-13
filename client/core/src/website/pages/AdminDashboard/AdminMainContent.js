import React from 'react'
import { CalendarContainer } from '../../components'
import { ActivityFeed } from '../../components'

import * as Icon from 'react-feather'

function AdminMainContent() {
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
                        2 <Icon.ChevronUp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold leading-8 mt-6">5</div>
                  <div className="text-base text-gray-600 mt-1">
                    Exams created
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
                    Total Courses Overseen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xxl:col-span-3 xxl:border-l border-theme-5 -mb-10 pb-10">
        <div className="grid grid-cols-12 sm:col-span-6 gap-6 mt-5">
          <ActivityFeed />
          <CalendarContainer />
        </div>
      </div>
    </div>
  )
}

export { AdminMainContent }
