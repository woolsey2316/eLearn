import React from 'react'

import * as Icon from 'react-feather'

import { QuestionCard } from './QuestionCard'

function QuestionList({ questionList, submitted, setQuestion, removeItem }) {
  return (
    <React.Fragment>
      <h2 className="mt-5 font-medium text-base col-span-2"> Edit Questions</h2>
      <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
        <button className="button text-white bg-theme-1 shadow-md mr-2 col-span-2">Add Question<Icon.Plus className="h-5 w-5 ml-2 inline"/></button>
        <div className="dropdown relative">
          <div className="dropdown-box mt-10 absolute w-40 top-0 left-0 z-20">
            <div className="dropdown-box__content box p-2">
              <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> Add Group </a>
              <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> Send Message </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block mx-auto text-gray-600">Showing 1 to 10 of 150 entries</div>
        <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <div className="w-56 relative text-gray-700 bg-white flex">
            <input type="text" className="input w-48 box pr-5 placeholder-theme-13" placeholder="Search..."/>
            <Icon.Search className="h-4 w-4 my-auto"/> 
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
                <th className="text-center whitespace-no-wrap">QUESTION NUMBER</th>
                <th className="text-center whitespace-no-wrap">STATUS</th>
                <th className="text-center whitespace-no-wrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {questionList &&
                questionList.sort((a,b) => b.id - a.id).map((elem) => 
                  <QuestionCard removeItem={removeItem} questionList={questionList} question={elem} setQuestion={setQuestion}/>
                )}
              {!questionList && (
                <h2 className="">There are currently no Questions for this test</h2>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}
export { QuestionList }
