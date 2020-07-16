import React from 'react'

/*
  the string "showing x to y of N results"
  */
function ShowingFirstToLast({resultsPerPage, page, courses}) {
  function first() {
    return resultsPerPage * (page - 1) + 1
  }
  function last() {
    return Math.min(resultsPerPage * page, courses &&
      courses.courseList &&
      courses.courseList.list.length)
  }
  function total() {
    return courses &&
    courses.courseList &&
    courses.courseList.list.length
  }
  return (
    <div className="text-gray-600">
      {`Showing ${first()} to ${last()} of ${total()} entries`}
    </div>
  )
}
export { ShowingFirstToLast }