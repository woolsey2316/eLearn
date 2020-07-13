import React, {useState } from 'react'

import * as Icon from 'react-feather'

import { QuestionCard } from './QuestionCard'

import { NumberSelector } from '../CourseRegister'

function QuestionList({ questionList, submitted, setQuestion, removeItem }) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(10)

  function handleChange(event) {
    setResultsPerPage(event.target.value)
  }
  function handleSearchChange(e) {
    const { name, value } = e.target
    setSearch(value)
  }
  function decrementPage() {
    navigatePage(page - 1)
  }
  function incrementPage() {
    navigatePage(page + 1)
  }
  // Reasonable page values: 0 -> max page
  function navigatePage(page_) {
    var max = Math.floor(questionList.length / resultsPerPage)
    if (page_ > 0 && page_ <= max) return setPage(page_)
    else return setPage(1)
  }

  function appendQuestion() {

    window.scroll(0,100)
  }
  return (
    <React.Fragment>
      <h2 className="mt-5 font-medium text-base col-span-2"> Edit Questions</h2>
      <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
        <button 
          className="button text-white bg-theme-1 shadow-md mr-2 col-span-2"
          onClick={appendQuestion}>
          Add Question
          <Icon.Plus className="h-5 w-5 ml-2 inline" />
        </button>
        <div className="dropdown relative">
          <div className="dropdown-box mt-10 absolute w-40 top-0 left-0 z-20">
            <div className="dropdown-box__content box p-2">
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
              >
                
                Add Group
              </a>
              <a
                href=""
                className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
              >
                
                Send Message
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block mx-auto text-gray-600">
        {`Showing ${resultsPerPage * (page - 1) + 1} to ${resultsPerPage * page} of 
        ${questionList &&
          questionList.length}
        entries
        `}
        </div>
        <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <div className="w-56 relative text-gray-700 bg-white flex">
            <input
              type="text"
              className="input w-48 box pr-5 placeholder-theme-13"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
            />
            <Icon.Search className="h-4 w-4 my-auto" />
          </div>
        </div>
      </div>
      <div className="intro-y col-span-12">
        <div className="intro-y col-span-6 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-no-wrap">IMAGES</th>
                <th className="whitespace-no-wrap">QUESTION</th>
                <th className="text-center whitespace-no-wrap">
                  Answer
                </th>
                <th className="text-center whitespace-no-wrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {questionList &&
                questionList
                  .sort((a, b) => a.number - b.number)
                  .filter((elem,index) => index >= resultsPerPage * (page - 1) && index < resultsPerPage * page)
                  .filter(elem => elem.question.includes(search))
                  .map((elem) => (
                    <QuestionCard
                      removeItem={removeItem}
                      questionList={questionList}
                      question={elem}
                      setQuestion={setQuestion}
                    />
                  ))}
              {!questionList && (
                <h2 className="">
                  There are currently no Questions for this test
                </h2>
              )}
            </tbody>
          </table>
          <div className="intro-y flex">
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
                      setPage(Math.floor(questionList.length / resultsPerPage))
                    }
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
        </div>
      </div>
    </React.Fragment>
  )
}
export { QuestionList }
