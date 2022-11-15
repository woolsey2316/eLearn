import React from "react";

import * as Icon from "react-feather";

import { NumberSelector } from "../pages/CourseRegister";

/* a single row of navigation buttons which traverses through a list of results
  << < 0 1 2 > >>
*/
type Props = {
  setPage: (page: number) => void;
  decrementPage: () => void;
  incrementPage: () => void;
  navigatePage: (page: number) => void;
  page: number;
  list: any[] | undefined;
  resultsPerPage: number;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
};
function Pagination({
  setPage,
  decrementPage,
  incrementPage,
  navigatePage,
  page,
  list,
  resultsPerPage,
  handleChange,
}: Props) {
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
            onClick={() =>
              setPage(list ? Math.floor(list.length / resultsPerPage) : 0)
            }
          >
            <Icon.ChevronsRight className="w-4 h-4" />
          </button>
        </li>
      </ul>
      <NumberSelector
        name="pages"
        resultsPerPage={resultsPerPage}
        handleChange={handleChange}
      />
    </div>
  );
}

export { Pagination };
