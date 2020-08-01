import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../actions'

import { Alert } from '../../components'
import { InputField } from './InputField'

import { AnswerField } from './AnswerField'
import { QuestionNumberField } from './QuestionNumberField'
import { QuestionField } from './QuestionField'
import { ToastAlert } from './ToastAlert'


function ExamCreationForm({
  quiz,
  setQuestion,
  updateQuestionList,
  questionList,
  success,
  setSuccess
}) {
  const [submitted, setSubmitted] = useState(false)
  const [questionID, setQuestionID] = useState(0)
  const dispatch = useDispatch()
  const [alert, setAlert] = useState({
    type: '',
    message: '',
  })

  useEffect(() => {
    setQuestion((quiz) => ({
      ...quiz,
      number: questionList.length + 1,
    }))
  }, [questionList])

  function answerAmongOptions() {
    return (
      quiz.answer === quiz.option[0] ||
      quiz.answer === quiz.option[1] ||
      quiz.answer === quiz.option[2] ||
      quiz.answer === quiz.option[3]
    )
  }

  function allFieldsExist() {
    return (
      quiz.question &&
      quiz.answer &&
      quiz.option[0] &&
      quiz.option[1] &&
      quiz.option[2] &&
      quiz.option[3]
    )
  }

  function eachAnswerUnique() {
    return (
      quiz.option[0] !== quiz.option[1] &&
      quiz.option[0] !== quiz.option[2] &&
      quiz.option[0] !== quiz.option[3] &&
      quiz.option[1] !== quiz.option[2] &&
      quiz.option[1] !== quiz.option[3] &&
      quiz.option[2] !== quiz.option[3]
    )
  }

  function handleQuestionChange(content, delta, source, editor) {
    console.log(editor.getHTML())
    setQuestion((quiz) => ({
      ...quiz,
      question: editor.getHTML(),
    }))
  }

  function handleChange(e) {
    const { name, value } = e.target
    setQuestion((quiz) => ({
      ...quiz,
      [name]: value,
    }))
  }

  function changeAnswerOption(e) {
    const { name, value } = e.target
    console.log(`changing index ${name}, to value ${value}`)
    setQuestion((quiz) => ({
      ...quiz,
      option: [
        ...quiz.option.slice(0, name),
        value,
        ...quiz.option.slice(parseInt(name, 10) + 1),
      ],
    }))
  }

  function handleValidation() {
    if (!allFieldsExist()) {
      setAlert({
        ['type']: 'alert-danger',
        ['message']: 'Empty fields present',
      })
      setSuccess(false)
    } else if (!eachAnswerUnique()) {
      setAlert({
        ['type']: 'alert-danger',
        ['message']: 'Answer options must be unique',
      })
      setSuccess(false)
    } else if (!answerAmongOptions()) {
      setAlert({
        ['type']: 'alert-danger',
        ['message']: 'Correct answer is not among 4 options',
      })
      setSuccess(false)
    }
  }
  // dispatch an action to the redux store, updates 'user' object
  function handleSubmit(e) {
    e.preventDefault()
    console.log(`%cquiz details: ${JSON.stringify(quiz)}`, 'color:green')
    setSubmitted(true)
    if (allFieldsExist() && answerAmongOptions() && eachAnswerUnique()) {
      updateQuestionList(quiz)
      setQuestion({
        question: '',
        answer: '',
        option: ['', '', '', ''],
      })
      setAlert({
        ['type']: 'alert-success',
        ['message']: 'Question was successfully added to test!',
      })
      setSuccess(true)
      setSubmitted(false)
    } else {
      handleValidation()
    }
  }
  return (
    <form
      style={{ margin: 'auto' }}
      className="validate-form"
      onSubmit={handleSubmit}
    >
      <div className="">
        <div className="bg-white px-5 py-8 xl:p-0 rounded-md xl:shadow-none w-full xl:w-auto">
          <div className="intro-x">
            <h2 className="font-medium text-base mx-auto mb-2">
              Question {quiz && quiz.number} of {questionList.length}
            </h2>
            <QuestionField
              quiz={quiz}
              handleChange={handleQuestionChange}
              submitted={submitted}
            />

            <div className="grid grid-cols-2 gap-5">
              <AnswerField
                quiz={quiz}
                handleChange={handleChange}
                submitted={submitted}
              />
              <QuestionNumberField
                quiz={quiz}
                handleChange={handleChange}
                submitted={submitted}
              />
              {new Array(4).fill('').map((elem, i) => (
                <InputField
                  key={i}
                  changeAnswerOption={changeAnswerOption}
                  handleChange={handleChange}
                  submitted={submitted}
                  quiz={quiz}
                  number={i + 1}
                />
              ))}
            </div>
          </div>
          <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button
              type="submit"
              className="button xl:mr-3 border border-theme-1 text-theme-1"
            >
              Save and Next Question
            </button>
            {submitted && <Alert type={alert.type} message={alert.message} />}
            {success && <Alert type={alert.type} message={alert.message} />}
          </div>
        </div>
      </div>
      
    </form>
  )
}
export { ExamCreationForm }
