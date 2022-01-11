import React, { useState, useEffect, useCallback } from 'react'
import * as Icon from 'react-feather'
import { MobileMenu } from '../../components'
import { TopBar } from '../../components'

import { CourseCard } from './CourseCard'

import { CourseSubscribeModal } from './CourseSubscribeModal'

import { useDispatch, useSelector } from 'react-redux'

import { courseActions } from '../../actions'

import { Pagination } from '../../components'
import { ShowingFirstToLast } from './ShowingFirstToLast'

function CourseRegister(props) {
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

  const fetchCourses = useCallback(() => {
    dispatch(courseActions.getAllCourses(page, resultsPerPage))
  },[page, resultsPerPage, dispatch])

  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])

  // Reasonable page values: 0 -> max page
  const navigatePage = useCallback((page) => {
    if (page > 0) {
      setPage(page)
    } else {
      setPage(1)
    }
  }, [])
  
  useEffect(() => {
    navigatePage(page)
    
  }, [navigatePage, page, resultsPerPage])

  function handleChange(event) {
    setResultsPerPage(parseInt(event.target.value, 10))
  }

  function registerCourse() {
    dispatch(courseActions.register(chosenCourse))
  }

  function handleSearchChange(e) {
    const { value } = e.target
    setSearch(value)
  }
  function decrementPage() {
    navigatePage(page - 1)
  }
  function incrementPage() {
    navigatePage(page + 1)
  }

  console.log("resultsPerPage", resultsPerPage)

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
              <ShowingFirstToLast
                resultsPerPage={resultsPerPage}
                page={page}
                courses={courses}
              />
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
              courses.courseList
                .filter((elem) => elem.CourseName.includes(search) || elem.CourseName.toLowerCase().includes(search))
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
            <div className="intro-y col-span-9 col-start-4">
              <Pagination
                setPage={setPage}
                decrementPage={decrementPage}
                incrementPage={incrementPage}
                navigatePage={navigatePage}
                page={page}
                list={courses && courses.courseList && courses.courseList}
                resultsPerPage={resultsPerPage}
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
