import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../actions'

import { Alert } from '../../components'
import { InputField } from './InputField'

import { AnswerField } from './AnswerField'
import { QuestionNumberField } from './QuestionNumberField'
import { QuestionField } from './QuestionField'

function ExamCreationForm({
  quiz,
  setQuestion,
  updateQuestionList,
  questionList,
}) {
  const [submitted, setSubmitted] = useState(false)
  const [questionID, setQuestionID] = useState(0)
  const dispatch = useDispatch()
  const [alert, setAlert] = useState({
    type:'',
    message:'',
  })

  useEffect(() => {
    setQuestion((quiz) => ({
      ...quiz,
      ['id']: questionList.length,
    }))
  },[questionList] )

  function isNotEmpty(field) {
    return field !== ''
  }

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

  function handleChange(e) {
    const { name, value } = e.target
    setQuestion((quiz) => ({
      ...quiz,
      [name]: value,
    }))
  }

  function changeAnswerOption(e) {
    const { name, value } = e.target
    setQuestion((quiz) => ({
      ...quiz,
      option : [
        ...quiz.option.slice(0, name),
        value,
        ...quiz.option.slice(name+1)
      ]
    }))
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
        option: ['','','','']
      })
      setAlert( {["type"]: "alert-success", ["message"]: "Successfully created question!" })
      setSubmitted(false)
    } else if (!allFieldsExist()) {
      setAlert( {["type"]: "alert-danger", ["message"]: "empty fields present" })
    } else if (!eachAnswerUnique()) {
      setAlert( {["type"]: "alert-danger", ["message"]: "Not all answer options are unique" })
    } else if (!answerAmongOptions()) {
      setAlert( {["type"]: "alert-danger", ["message"]: "Correct answer is not among options" })
    }
  }
  return (
    <form
      style={{ margin: 'auto' }}
      className="validate-form"
      onSubmit={handleSubmit}
    >
      <div className="h-screen xl:h-auto flex xl:py-0 xl:my-0">
        <div className="bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
          <div className="intro-x">
            <h2 className="font-medium text-base mx-auto mb-2">
              Question {questionID + 1} of {questionList.length}
            </h2>
            <QuestionField quiz={quiz} handleChange={handleChange} submitted={submitted}/>
            
            <div className="grid grid-cols-2 gap-5">
              <AnswerField quiz={quiz} handleChange={handleChange} submitted={submitted}/>
              <QuestionNumberField quiz={quiz} handleChange={handleChange} submitted={submitted}/>
              { new Array(4).fill('').map((elem,i) => (
                <InputField
                  key={i}
                  changeAnswerOption={changeAnswerOption}
                  handleChange={handleChange}
                  quiz={quiz}
                  number={i+1}
                /> 
              ))
              }
            </div>
          </div>
          <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button
              type="submit"
              className="button xl:mr-3 border border-theme-1 text-theme-1"
            >
              Save and Next Question
            </button>
            {submitted && <Alert type={alert.type} message={alert.message}/>}
          </div>
        </div>
      </div>
    </form>
  )
}
export { ExamCreationForm }
