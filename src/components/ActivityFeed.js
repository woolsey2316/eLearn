import React from 'react'

import profile14 from '../assets/dist/images/profile-14.jpg'
import profile7 from '../assets/dist/images/profile-7.jpg'
import profile4 from '../assets/dist/images/profile-4.jpg'
import profile11 from '../assets/dist/images/profile-11.jpg'

function ActivityFeed() {
  return (
    <div className="mt-3 mr-5" style={{ width: '60%' }}>
      <div className="intro-x flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Recent Activities</h2>
      </div>
      <div className="report-timeline mt-5 relative">
        <div className="intro-x relative flex items-center mb-3">
          <div className="report-timeline__image">
            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
              <img alt="Midone Tailwind HTML Admin Template" src={profile4} />
            </div>
          </div>
          <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
            <div className="flex items-center">
              <div className="font-medium">John Travolta</div>
              <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
            </div>
            <div className="text-gray-600 mt-1">
              Has scheduled a multiple choice test
            </div>
          </div>
        </div>
        <div className="intro-x relative flex items-center mb-3">
          <div className="report-timeline__image">
            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
              <img alt="Midone Tailwind HTML Admin Template" src={profile7} />
            </div>
          </div>
          <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
            <div className="flex items-center">
              <div className="font-medium">John Travolta</div>
              <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
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
              <img alt="Midone Tailwind HTML Admin Template" src={profile11} />
            </div>
          </div>
          <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
            <div className="flex items-center">
              <div className="font-medium">Leonardo DiCaprio</div>
              <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
            </div>
            <div className="text-gray-600 mt-1">
              Has extended due date of test
            </div>
          </div>
        </div>
        <div className="intro-x relative flex items-center mb-3">
          <div className="report-timeline__image">
            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
              <img alt="Midone Tailwind HTML Admin Template" src={profile14} />
            </div>
          </div>
          <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
            <div className="flex items-center">
              <div className="font-medium">Kevin Spacey</div>
              <div className="text-xs text-gray-500 ml-auto">07:00 PM</div>
            </div>
            <div className="text-gray-600 mt-1">
              Has extended due date of test
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export { ActivityFeed }
