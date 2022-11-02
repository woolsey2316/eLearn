import React from "react";

import * as Icon from "react-feather";

import { NumberSelector } from "../pages/CourseRegister";

/* a single row of navigation buttons which traverses through a list of results
  << < 0 1 2 > >>
*/

function Pagination({
  setPage,
  decrementPage,
  incrementPage,
  navigatePage,
  page,
  list,
  resultsPerPage,
  handleChange,
}) {
  return (
    <div className="intro-y flex my-5">
      <ul className="pagination">
        <li>
          <button className="pagination__link" onClick={() => setPage(1)}>
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
            onClick={() => setPage(Math.floor(list.length / resultsPerPage))}
          >
            <Icon.ChevronsRight className="w-4 h-4" />
          </button>
        </li>
      </ul>
      <NumberSelector
        name="pages"
        value={resultsPerPage}
        handleChange={handleChange}
      />
    </div>
  );
}

export { Pagination };
