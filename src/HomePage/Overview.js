import React, { useEffect } from 'react'

import * as Icon from 'react-feather'

import { useDispatch, useSelector } from 'react-redux'

import { dashboardActions } from '../actions'

import { courseActions } from '../actions'
import { alertActions } from '../actions'
import { courseService } from '../services'

function Overview() {
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses.userCourseList)
  const page = 0
  const size = 20
  useEffect(() => {
    fetchCourses()
    return console.log('course: ' + courses)
  }, [])

  function fetchCourses() {
    dispatch(courseActions.getAllUserCourses(page, size))
  }
  const dashboard = useSelector((state) => state.dashboard)

  useEffect(() => {
    fetchDashboard()
    return console.log({ dashboard })
  }, [])

  function fetchDashboard() {
    dispatch(dashboardActions.getUserDashboard(page, size))
  }

  function completionRate() {
    return (
      ((dashboard.dashboard.mcq.completed / dashboard.dashboard.mcq.total +
        dashboard.dashboard.exam.completed / dashboard.dashboard.exam.total +
        dashboard.dashboard.assignment.completed /
          dashboard.dashboard.assignment.total) /
        3) *
        (100).toFixed(2) +
      '%'
    )
  }

  function total() {
    return (
      parseInt(dashboard.dashboard.assignment.total, 10) +
      parseInt(dashboard.dashboard.exam.total, 10) +
      parseInt(dashboard.dashboard.mcq.total, 10)
    )
  }
  function totalCompleted() {
    return (
      parseInt(dashboard.dashboard.assignment.completed, 10) +
      parseInt(dashboard.dashboard.exam.completed, 10) +
      parseInt(dashboard.dashboard.mcq.completed, 10)
    )
  }
  function totalActive() {
    return total() - totalCompleted()
  }
  return (
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
                    title="Total tests"
                  >
                    {dashboard && dashboard.dashboard && total()}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {dashboard && dashboard.dashboard && completionRate()}
              </div>
              <div className="text-base text-gray-600 mt-1">
                Total completion rate
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div className="report-box zoom-in">
            <div className="box p-5">
              <div className="flex">
                <Icon.AlertCircle className="report-box__icon text-theme-9" />
                <div className="ml-auto"></div>
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {dashboard && dashboard.dashboard && totalActive()}
              </div>
              <div className="text-base text-gray-600 mt-1">Active Tests</div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div className="report-box zoom-in">
            <div className="box p-5">
              <div className="flex">
                <Icon.Monitor className="report-box__icon text-theme-12" />
                <div className="ml-auto"></div>
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {dashboard && dashboard.dashboard && totalCompleted()}
              </div>
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
              </div>
              <div className="text-3xl font-bold leading-8 mt-6">
                {courses &&
                  courses.reduce((unique, item) => {
                    // unique course values, some subscribe multiple times
                    return unique
                      .map((elem) => elem.coursesDTO.id)
                      .includes(item.coursesDTO.id)
                      ? unique
                      : [...unique, item]
                  }, []).length}
              </div>
              <div className="text-base text-gray-600 mt-1">
                Total Enrolled Courses
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Overview }
