import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { MobileMenu } from '../../components'
import { TopBar } from '../../components'

import { courseData } from './CourseData'
import { CourseCard } from './CourseCard'

function CourseRegister(props) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  function handleChange(e) {
    const { name, value } = e.target
    setSearch(value)
  }
  function decrementPage() {
    navigatePage(page - 1)
  }
  function incrementPage() {
    navigatePage(page + 1)
  }
  // Reasonable page values: 0 -> max page
  function navigatePage(page_) {
    var max = Math.floor(courseData.length / resultsPerPage)
    if (page_ > 0 && page_ <= max) return setPage(page_)
    else return setPage(1)
  }
  const resultsPerPage = 10
  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal}/>
          <h2 class="intro-y text-lg font-medium mt-10">Course Catalogue</h2>
          <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap justify-between items-center mt-2">
              <div class="hidden md:block text-gray-600">
                Showing {resultsPerPage * (page - 1) + 1} to{' '}
                {resultsPerPage * page} of {courseData.length} entries
              </div>
              <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                <div class="w-56 relative text-gray-700">
                  <input
                    type="text"
                    class="input w-56 box pr-10 placeholder-theme-13"
                    onChange={handleChange}
                    placeholder="Search..."
                  />
                  <Icon.Search class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
                </div>
              </div>
            </div>
            {courseData
              .filter((elem) => elem.name.includes(search))
              .filter(
                (elem, index) =>
                  // Navigate pages
                  index < resultsPerPage * page &&
                  index >= resultsPerPage * (page - 1)
              )
              .map((course) => (
                <CourseCard course={course} />
              ))}

            <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center">
              <ul className="pagination">
                <li>
                  <button
                    className="pagination__link"
                    onClick={() => setPage(1)}
                  >
                    <Icon.ChevronsLeft className="w-4 h-4" />
                  </button>
                </li>
                <li>
                  <button className="pagination__link" onClick={decrementPage}>
                    <Icon.ChevronLeft className="w-4 h-4" />
                  </button>
                </li>
                <li>
                  <button className="pagination__link">...</button>
                </li>
                <li>
                  <button
                    className="pagination__link"
                    onClick={() => navigatePage(page - 1)}
                  >
                    {page - 1}
                  </button>
                </li>
                <li>
                  <button
                    className="pagination__link pagination__link--active"
                    onClick={() => navigatePage(page)}
                  >
                    {page}
                  </button>
                </li>
                <li>
                  <button
                    className="pagination__link"
                    onClick={() => navigatePage(page + 1)}
                  >
                    {page + 1}
                  </button>
                </li>
                <li>
                  <button className="pagination__link">...</button>
                </li>
                <li>
                  <button className="pagination__link" onClick={incrementPage}>
                    <Icon.ChevronRight className="w-4 h-4" />
                  </button>
                </li>
                <li>
                  <button
                    className="pagination__link"
                    onClick={() =>
                      setPage(Math.floor(courseData.length / resultsPerPage))
                    }
                  >
                    <Icon.ChevronsRight className="w-4 h-4" />
                  </button>
                </li>
              </ul>
              <select className="w-20 input box mt-3 sm:mt-0">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export { CourseRegister }
