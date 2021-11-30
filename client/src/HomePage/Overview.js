import React, { useEffect, useCallback } from 'react'

import {Activity,
  AlertCircle,
  Monitor,
  Grid} from 'react-feather'

import { useDispatch, useSelector } from 'react-redux'

import { dashboardActions } from '../actions'

import { courseActions } from '../actions'

function Overview() {
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses.userCourseList)
  const dashboard = useSelector((state) => state.dashboard)
  const page = 0
  const size = 20

  const fetchCourses = useCallback(() => {
    dispatch(courseActions.getAllUserCourses(page, size))
  },[size, page, dispatch])

  const fetchDashboard = useCallback(() => {
    dispatch(dashboardActions.getUserDashboard(page, size))
  }, [page, size, dispatch])

  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])

  useEffect(() => {
    fetchDashboard()
  }, [fetchDashboard])

  function completionRate() {
    return (
      ((dashboard.dashboard.multiChoiceQuestion.completed / dashboard.dashboard.multiChoiceQuestion.total +
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
      parseInt(dashboard.dashboard.multiChoiceQuestion.total, 10)
    )
  }
  function totalCompleted() {
    return (
      parseInt(dashboard.dashboard.assignment.completed, 10) +
      parseInt(dashboard.dashboard.exam.completed, 10) +
      parseInt(dashboard.dashboard.multiChoiceQuestion.completed, 10)
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
                <Activity className="report-box__icon text-theme-10" />
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
                <AlertCircle className="report-box__icon text-theme-9" />
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
                <Monitor className="report-box__icon text-theme-12" />
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
                <Grid className="report-box__icon text-theme-11" />
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
