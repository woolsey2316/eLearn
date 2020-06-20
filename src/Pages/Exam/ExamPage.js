import React, { useState } from 'react'
import { quizQuestions, QuizData } from './quizQuestions'
import Quiz from './Quiz'
import Result from './Result'

function ExamPage() {
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [questionId, setQuestionId] = useState(0)
  const [question, setQuestion] = useState(quizQuestions[0].question)
  const [answerOptions, setAnswerOptions] = useState(
    quizQuestions[0].possibleAnswers
  )
  const [answer, setAnswer] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [answerList, setAnswerList] = useState({})
  const [finished, setFinished] = useState(false)
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState(
    Array(quizQuestions.length)
      .fill(null)
      .map((u, i) => i)
  )

  function handleChange(event) {
    setSelectedOption(event.target.value)
    console.log(event.target.value)
  }

  function confirmAnswer() {
    console.log('confirmed answer: ' + selectedOption)
    setUserAnswer(selectedOption)
    if (unansweredQuestionIds.length) {
      setTimeout(() => setNextQuestion(unansweredQuestionIds[0]), 300)
    } else {
      setFinished(true)
    }
  }

  function setUserAnswer(answer) {
    const newArr = unansweredQuestionIds
    const first = newArr.splice(0, 1)
    if (answer) {
      setAnswerList({
        ...answerList,
        [answer]: questionId,
      })
      setAnswer(answer)
      setUnansweredQuestionIds(newArr)
    } else {
      // student did not answer current question
      // and wants to go to next question and answer the skipped question last
      newArr.push(first)
      setUnansweredQuestionIds(newArr)
    }
  }
  // finds the next question not answered yet
  function setNextQuestion(qId) {
    setQuestionId(qId)
    setQuestion(quizQuestions[qId].question)
    setAnswerOptions(quizQuestions[qId].possibleAnswers)
    setAnswer('')
  }

  function getResults() {
    const answerList = answerList
    const answersCountKeys = Object.keys(answerList)
    const answersCountValues = answersCountKeys.map((key) => answerList[key])
    const maxAnswerCount = Math.max.apply(null, answersCountValues)

    return answersCountKeys.filter((key) => answerList[key] === maxAnswerCount)
  }

  function renderQuiz() {
    return (
      <Quiz
        answer={answer}
        selectedOption={selectedOption}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={quizQuestions.length}
        getUserAnswer={handleChange}
      />
    )
  }

  function renderResult() {
    return <Result />
  }

  return (
    <div style={{ margin: '1em' }} className="content">
      <div className="intro-y box mt-5">
        <div className="items-center p-5 border-b border-gray-200">
          <h2 className="font-medium text-base mr-auto">
            Exam Name: {QuizData.title}
          </h2>
          <h2 className="text-base mr-auto">Exam Code: {QuizData.examCode}</h2>
          <h2 className="text-base mr-auto">
            Duration: {QuizData.duration} minutes
          </h2>
        </div>
        {finished ? renderResult() : renderQuiz()}
        <div className="intro-y box mt-5">
          <div className="items-center p-5 border-b border-gray-200">
            <button
              className="button w-30 shadow-md mr-1 mb-2 bg-theme-1 text-white"
              onClick={confirmAnswer}
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ExamPage }
