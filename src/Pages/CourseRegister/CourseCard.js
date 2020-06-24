import React from 'react'

function CourseCard({ course }) {
  return (
    <div className="intro-y col-span-12 md:col-span-6">
      <div className="box">
        <div className="flex flex-col lg:flex-row items-center p-5">
          <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
            <a href="" className="font-medium">
              {course.name}
            </a>
            <div className="text-gray-600 text-xs">{course.subject}</div>
          </div>
          <div className="flex mt-4 lg:mt-0">
            <button className="button button--sm text-white bg-theme-1 mr-2 w-20">
              Register
            </button>
            <button className="button button--sm text-gray-700 border border-gray-300">
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export { CourseCard }
