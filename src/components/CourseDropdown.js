import React, { useState } from 'react'
import * as Icon from 'react-feather'

function CourseDropdown() {
  const [show, showMore] = useState(false)
  return (
    <div className="dropdown relative">
      {' '}
      <button
        onClick={() => showMore(!show)}
        className="dropdown-toggle button inline-block bg-theme-5 font-semibold text-theme-1 text-3xl"
      >
        Course Name <Icon.ChevronDown />
      </button>
      {show && (
        <div className="dropdown-box mt-10 absolute w-56 top-0 right-0 -mr-12 sm:mr-0 z-20 show">
          <div className="dropdown-box__content box">
            <div className="p-4 border-b border-gray-200 font-medium">
              Select a Course
            </div>
            <div className="p-2">
              {' '}
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
              >
                {' '}
                <Icon.Activity className="w-4 h-4 text-gray-700 mr-2" /> Course
                #1{' '}
              </a>{' '}
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
              >
                {' '}
                <Icon.Box className="w-4 h-4 text-gray-700 mr-2" /> Course #2{' '}
                <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto">
                  2
                </div>{' '}
              </a>{' '}
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
              >
                {' '}
                <Icon.Layout className="w-4 h-4 text-gray-700 mr-2" /> Course #3{' '}
                <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto">
                  1
                </div>{' '}
              </a>{' '}
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
              >
                {' '}
                <Icon.Sidebar className="w-4 h-4 text-gray-700 mr-2" /> Course
                #4{' '}
              </a>{' '}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export { CourseDropdown }
