import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../actions'

import { Alert } from '../../components'

function ExamCreationForm({
  quiz,
  setQuestion,
  updateQuestionList,
  questionList,
}) {
  const [submitted, setSubmitted] = useState(false)
  const [questionID, setQuestionID] = useState(1)
  const dispatch = useDispatch()
  const alert = useSelector((state) => state.alert)

  useEffect(() => {
    setQuestionID(questionList.length + 1)
  }, [questionList])
  function isNotEmpty(field) {
    return field !== ''
  }

  function answerAmongOptions() {
    return (
      quiz.answer === quiz.option1 ||
      quiz.answer === quiz.option2 ||
      quiz.answer === quiz.option3 ||
      quiz.answer === quiz.option4
    )
  }

  function allFieldsExist() {
    return (
      quiz.question &&
      quiz.answer &&
      quiz.option1 &&
      quiz.option2 &&
      quiz.option3 &&
      quiz.option4
    )
  }

  function eachAnswerUnique() {
    return (
      quiz.option1 !== quiz.option2 &&
      quiz.option1 !== quiz.option3 &&
      quiz.option1 !== quiz.option4 &&
      quiz.option2 !== quiz.option3 &&
      quiz.option2 !== quiz.option4 &&
      quiz.option3 !== quiz.option4
    )
  }

  function handleChange(e) {
    const { name, value } = e.target
    setQuestion((quiz) => ({
      ...quiz,
      [name]: value,
    }))
  }
  // dispatch an action to the redux store, updates 'user' object
  function handleSubmit(e) {
    e.preventDefault()
    console.log(`%cquiz details: ${JSON.stringify(quiz)}`, 'color:green')

    if (allFieldsExist() && answerAmongOptions && eachAnswerUnique()) {
      setSubmitted(true)
      updateQuestionList()
      setQuestion({
        question: '',
        answer: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
      })
    }
  }
  return (
    <form
      style={{ margin: 'auto' }}
      className="validate-form"
      onSubmit={handleSubmit}
    >
      <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
          <div className="intro-x mt-8">
            <h2 className="font-medium text-base mx-auto">
              Question {questionID} of {questionList.length + 1}
            </h2>
            <textArea
              type="text"
              name="question"
              className="intro-x login__input input input--lg border border-gray-300 block mb-5"
              placeholder="Question"
              required={true}
              cols={30}
              rows={5}
              value={quiz.question}
              onChange={handleChange}
            />
            {submitted && !quiz.question && (
              <div className="text-theme-6 mt-2">answer is required</div>
            )}
            <label className="text-gray-700 mt-5">answer</label>
            <input
              type="text"
              name="answer"
              className="intro-x login__input input input--lg border border-gray-300 block mb-2 mt-1"
              style={{ borderColor: isNotEmpty() ? '' : '#D32929' }}
              placeholder="answer"
              value={quiz.answer}
              onChange={handleChange}
            />
            {(submitted && !quiz.answer && (
              <div className="text-theme-6 mt-2">answer is required</div>
            )) ||
              (!isNotEmpty() && (
                <label id="answer-error" className="error" htmlFor="answer">
                  Please enter a valid answer
                </label>
              ))}
            <label className="text-gray-700 mt-5">option 1</label>
            <input
              type="option1"
              name="option1"
              className="intro-x login__input input input--lg border border-gray-300 block mb-2 mt-1"
              placeholder="option 1"
              value={quiz.option1}
              onChange={handleChange}
            />
            {submitted && !quiz.option1 && (
              <div className="text-theme-6 mt-2">option1 is required</div>
            )}
            <label className="text-gray-700 mt-5">option 2</label>
            <input
              type="option2"
              name="option2"
              className="intro-x login__input input input--lg border border-gray-300 block mb-2 mt-1"
              placeholder="option 2"
              value={quiz.option2}
              onChange={handleChange}
            />
            {submitted && !quiz.option2 && (
              <div className="text-theme-6 mt-2">option2 is required</div>
            )}
            <label className="text-gray-700 mt-5">option 3</label>
            <input
              type="option3"
              name="option3"
              className="intro-x login__input input input--lg border border-gray-300 block mb-2 mt-1"
              placeholder="option 3"
              value={quiz.option3}
              onChange={handleChange}
            />
            {submitted && !quiz.option3 && (
              <div className="text-theme-6 mt-2">option3 is required</div>
            )}
            <label className="text-gray-700 mt-5">option 4</label>
            <input
              type="option4"
              name="option4"
              className="intro-x login__input input input--lg border border-gray-300 block mb-2 mt-1"
              placeholder="option 4"
              value={quiz.option4}
              onChange={handleChange}
            />
            {submitted && !quiz.option4 && (
              <div className="text-theme-6 mt-2">option4 is required</div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button
              type="submit"
              className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
            >
              Save Question
            </button>
          </div>
          {alert.message && <Alert type={alert.type} message={alert.message} />}
        </div>
      </div>
    </form>
  )
}
export { ExamCreationForm }
