import React from 'react'

/*
  the string "showing x to y of N results"
  */
function ShowingFirstToLast({ resultsPerPage, page, courses }) {
  function first() {
    return resultsPerPage * (page - 1) + 1
  }
  function last() {
    return Math.min(
      resultsPerPage * page,
      courses && courses.courseList && courses.courseList?.length
    )
  }
  function total() {
    return resultsPerPage
  }
  return (
    <div className="text-gray-600">
      {`Showing ${first()} to ${last()} of ${total()} entries`}
    </div>
  )
}
export { ShowingFirstToLast }
