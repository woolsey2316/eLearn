import React from "react";
import { CourseState } from "../../types/CourseState";
type ShowingFirstToLastProps = {
  resultsPerPage: number;
  page: number;
  courses: Partial<CourseState>;
};
/*
  the string "showing x to y of N results"
  */
function ShowingFirstToLast({
  resultsPerPage,
  page,
  courses,
}: ShowingFirstToLastProps) {
  function first() {
    return resultsPerPage * (page - 1) + 1;
  }
  function last() {
    let courseListLength = 0;
    if (courses && courses.courseList && courses.courseList.length) {
      courseListLength = courses.courseList.length;
    }
    return Math.min(resultsPerPage * page, courseListLength);
  }
  function total() {
    return resultsPerPage;
  }
  return (
    <div className="text-gray-600">
      {`Showing ${first()} to ${last()} of ${total()} entries`}
    </div>
  );
}
export { ShowingFirstToLast };
