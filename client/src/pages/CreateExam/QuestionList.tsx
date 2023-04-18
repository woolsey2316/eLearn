import React, { ChangeEvent, useState } from "react";

import * as Icon from "react-feather";

import { QuestionCard } from "./QuestionCard";

import { Pagination } from "../../components/Pagination";
import { Quiz } from "../../types/ExamState";
interface Props {
  questionList: Quiz[];
  setQuestion: React.Dispatch<React.SetStateAction<Quiz>>;
  removeItem: (qId: number) => void;
}
function QuestionList({ questionList, setQuestion, removeItem }: Props) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setResultsPerPage(parseInt(event.target.value));
  }
  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearch(value);
  }
  function decrementPage() {
    navigatePage(page - 1);
  }
  function incrementPage() {
    navigatePage(page + 1);
  }
  // Reasonable page values: 0 -> max page
  function navigatePage(page_: number) {
    const max = Math.floor(questionList.length / resultsPerPage);
    if (page_ > 0 && page_ <= max) return setPage(page_);
    else return setPage(1);
  }

  function appendQuestion() {
    window.scroll(0, 100);
  }
  return (
    <React.Fragment>
      <div className="col-span-12 sm:flex-no-wrap items-center">
        <h2 className="my-5 font-medium text-base col-span-2">
          Edit Questions
        </h2>
        <div className="flex flex-wrap">
          <button
            className="button text-white bg-theme-1 shadow-md mr-2 col-span-2"
            onClick={appendQuestion}
          >
            Add Question
            <Icon.Plus className="h-5 w-5 ml-2 inline" />
          </button>
          <div className="md:block mx-auto text-gray-600">
            {`Showing ${resultsPerPage * (page - 1) + 1} to ${
              resultsPerPage * page
            } of 
          ${questionList && questionList.length}
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
      </div>
      <div className="intro-y col-span-12">
        <div className="intro-y col-span-6 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-no-wrap">IMAGES</th>
                <th className="whitespace-no-wrap">QUESTION</th>
                <th className="text-center whitespace-no-wrap">ANSWER</th>
                <th className="text-center whitespace-no-wrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {questionList &&
                questionList
                  .sort((a, b) => a.number - b.number)
                  .filter(
                    (elem, index) =>
                      index >= resultsPerPage * (page - 1) &&
                      index < resultsPerPage * page
                  )
                  .filter((elem) => elem.question.includes(search))
                  .map((elem, ind) => (
                    <QuestionCard
                      key={ind}
                      removeItem={removeItem}
                      questionList={questionList}
                      question={elem}
                      setQuestion={setQuestion}
                    />
                  ))}
            </tbody>
          </table>
          {!questionList.length && (
            <h2 className="box font-medium my-auto p-5 w-full">
              There are currently no Questions for this test
            </h2>
          )}
        </div>
      </div>
      <div className="intro-y col-span-9 col-start-4 overflow-auto lg:overflow-visible">
        <Pagination
          setPage={setPage}
          decrementPage={decrementPage}
          incrementPage={incrementPage}
          navigatePage={navigatePage}
          page={page}
          list={questionList}
          resultsPerPage={resultsPerPage}
          handleChange={handleChange}
        />
      </div>
    </React.Fragment>
  );
}
export { QuestionList };
