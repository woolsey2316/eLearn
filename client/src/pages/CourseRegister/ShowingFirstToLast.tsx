import React from "react";
import { CourseState } from "../../types/CourseState";
type ShowingFirstToLastProps = {
  resultsPerPage: number;
  page: number;
  collection: any[] | undefined;
};
/*
  the string "showing x to y of N results"
  */
function ShowingFirstToLast({
  resultsPerPage,
  page,
  collection,
}: ShowingFirstToLastProps) {
  function first() {
    return resultsPerPage * (page - 1) + 1;
  }
  function total() {
    if (collection && collection.length) {
      length = collection.length;
    }
    return Math.min(resultsPerPage, length);
  }
  return (
    <div className="text-gray-600">
      {`Showing ${first()} to ${first() + total()-1} of ${total()} entries`}
    </div>
  );
}
export { ShowingFirstToLast };
