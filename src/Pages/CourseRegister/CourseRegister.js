import React, { useState, useEffect } from 'react'
import * as Icon from 'react-feather'
import { MobileMenu } from '../../components'
import { TopBar } from '../../components'

import { courseData } from './CourseData'
import { CourseCard } from './CourseCard'

import { CourseNumberSelector } from './CourseNumberSelector'
import { CourseSubscribeModal } from './CourseSubscribeModal'

import { useDispatch, useSelector } from 'react-redux'

import { courseActions } from '../../actions'
import { alertActions } from '../../actions'

function CourseRegister(props) {
  const registering = useSelector((state) => state.registration.registering)
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses)

  const [search, setSearch] = useState('')
  const [chosenCourse, setCourse] = useState({})
  const [page, setPage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(10)

  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    console.log('open modal request')
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    fetchCourses()
  }, [resultsPerPage, page])

  function handleChange(event) {
    setResultsPerPage(event.target.value)
  }

  function fetchCourses() {
    dispatch(courseActions.getAllCourses(page - 1, resultsPerPage))
  }

  function registerCourse() {
    dispatch(courseActions.register(chosenCourse))
  }

  function handleSearchChange(e) {
    const { name, value } = e.target
    setSearch(value)
  }
  function decrementPage() {
    fetchCourses(page - 1)
    navigatePage(page - 1)
  }
  function incrementPage() {
    fetchCourses(page + 1)
    navigatePage(page + 1)
  }
  // Reasonable page values: 0 -> max page
  function navigatePage(page_) {
    var max = Math.floor(courses.courseList.list.length / resultsPerPage)
    if (page_ > 0 && page_ <= max) return setPage(page_)
    else return setPage(1)
  }

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <h2 className="intro-y text-lg font-medium mt-10">
            Course Catalogue
          </h2>
          <CourseSubscribeModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            openModal={openModal}
            register={registerCourse}
            chosenCourse={chosenCourse}
          />
          <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap justify-between items-center mt-2">
              <div className="hidden md:block text-gray-600">
                Showing {resultsPerPage * (page - 1) + 1} to{' '}
                {resultsPerPage * page} of {courses && courses.length} entries
              </div>
              <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                <div className="w-56 relative text-gray-700">
                  <input
                    type="text"
                    className="input w-56 box pr-10 placeholder-theme-13"
                    onChange={handleSearchChange}
                    placeholder="Search Courses..."
                  />
                  <Icon.Search className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
                </div>
              </div>
            </div>
            {courses.courseList &&
              courses.courseList.list
                .filter((elem) => elem.name.includes(search))
                .filter(
                  (elem, index) =>
                    // Navigate pages
                    index < resultsPerPage * page &&
                    index >= resultsPerPage * (page - 1)
                )
                .map((course) => (
                  <CourseCard
                    modalIsOpen={modalIsOpen}
                    openModal={openModal}
                    setCourse={setCourse}
                    course={course}
                    key={course.id}
                    register={registerCourse}
                  />
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
              <CourseNumberSelector
                name="pages"
                value={resultsPerPage}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export { CourseRegister }
