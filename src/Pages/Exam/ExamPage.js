import React, { useState } from 'react'
import { quizQuestions, QuizData } from './quizQuestions'
import Quiz from './Quiz'
import Result from './Result'
import SectionComplete from './SectionComplete'
import { CourseSection } from './CourseSection'
import { RightPanel } from './RightPanel'
import { calculateTimeLeft } from './CountdownTimer'
import * as Icon from 'react-feather'

function ExamPage() {
  const [questionId, setQuestionId] = useState(0)
  const [question, setQuestion] = useState(quizQuestions[0][0].question)
  const [answerOptions, setAnswerOptions] = useState(
    quizQuestions[0][0].possibleAnswers
  )
  const [selectedOption, setSelectedOption] = useState('')
  const [answerList, setAnswerList] = useState(
    Array(quizQuestions.length)
      .fill('')
      .map((el, index) => Array(quizQuestions[index].length).fill(''))
  )
  const [finished, setFinished] = useState(false)
  const [MarkedQuestionIds, setMarkedQuestionIds] = useState(
    Array(quizQuestions.length)
      .fill([])
      .map((el, index) =>
        Array(quizQuestions[index].length)
          .fill(null)
          .map((u, i) => i)
      )
  )
  const [section, setActive] = React.useState(0)
  const [show, setShow] = React.useState(true)

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  React.useEffect(() => {
    if (Object.keys(timeLeft).length === 0) submitExam()
  }, [timeLeft])

  function submitExam() {
    console.log("submit exam!")
  }

  function openModal() {
    console.log('open modal request')
    setFinished(true)
  }

  function closeModal() {
    setFinished(false)
  }

  React.useEffect(() => {
    loadNextQuestionIfAny()
  }, [MarkedQuestionIds, section])

  function setSection(sectionId) {
    setActive(sectionId)
    console.log(sectionId)
  }

  function onClickQuestion(qid) {
    loadQuestion(qid)
  }

  function handleChange(event) {
    setSelectedOption(event.target.value)
    console.log(event.target.value)
  }

  function confirmAnswer() {
    console.log('confirmed answer: ' + selectedOption)
    // don't load next question if user did not select an answer to current question!
    if (selectedOption) {
      setUserAnswer()
      removeMarkFromCurrentQuestion()
    }
  }
  function loadQuestion(qId) {
    setQuestionId(qId)
    setQuestion(quizQuestions[section][qId].question)
    setAnswerOptions(quizQuestions[section][qId].possibleAnswers)
    findSavedAnswers(qId)
  }
  function loadNextQuestionIfAny() {
    var qId
    if (MarkedQuestionIds[section].length) {
      qId = MarkedQuestionIds[section][0]
      setTimeout(() => {
        setQuestionId(qId)
        setQuestion(quizQuestions[section][qId].question)
        setAnswerOptions(quizQuestions[section][qId].possibleAnswers)
        findSavedAnswers(qId)
      }, 300)
    } else {
      setFinished(true)
      qId = 0
      setTimeout(() => {
        setQuestionId(qId)
        setQuestion(quizQuestions[section][qId].question)
        setAnswerOptions(quizQuestions[section][qId].possibleAnswers)
        findSavedAnswers(qId)
      }, 300)
    }
  }
  // selectedOption is added to answerList, this confirms the answer
  function setUserAnswer() {
    var newAnswerList = Object.assign([], answerList[section], {
      [questionId]: selectedOption,
    })
    setAnswerList(Object.assign([[]], answerList, { [section]: newAnswerList }))
  }

  function removeMarkFromCurrentQuestion() {
    var index = MarkedQuestionIds[section].indexOf(questionId)
    var removeCurrentQuestion = [
      ...MarkedQuestionIds[section].slice(0, index),
      ...MarkedQuestionIds[section].slice(index + 1),
    ]
    setMarkedQuestionIds(
      Object.assign([[]], MarkedQuestionIds, {
        [section]: removeCurrentQuestion,
      })
    )
  }

  function findSavedAnswers(qId) {
    // default value of answerList[i] = ''
    setSelectedOption(answerList[section][qId])
  }

  function markQuestion() {
    // perhaps question is already marked for review
    var alreadyMarked = MarkedQuestionIds[section].filter(
      (elem) => questionId === elem
    )
    if (!alreadyMarked) {
      setMarkedQuestionIds([...MarkedQuestionIds[section], questionId])
    } else {
      sendQuestionToEnd()
    }
  }

  function sendQuestionToEnd() {
    var curr = MarkedQuestionIds[section].indexOf(questionId)
    var pushToEnd = [
      ...MarkedQuestionIds[section].slice(0, curr),
      ...MarkedQuestionIds[section].slice(curr + 1),
      questionId,
    ]
    setMarkedQuestionIds(
      Object.assign([[]], MarkedQuestionIds, { [section]: pushToEnd })
    )
  }

  function markForReview() {
    setUserAnswer()
    markQuestion()
  }

  function renderQuiz() {
    return (
      <Quiz
        selectedOption={selectedOption}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={answerList[section].length}
        getUserAnswer={handleChange}
      />
    )
  }

  function renderResult() {
    return <SectionComplete modalIsOpen={finished} closeModal={closeModal} />
  }

  return (
    <div className="content rounded-none p-2">
      <div className="box flex justify-between">
        <div className="flex flex-col mt-5 flex-grow">
          <CourseSection
            section={section}
            clicked={setSection}
            sections={QuizData.sections}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
          />
          <div className="items-center p-5 border-b border-gray-200">
            <h2 className="font-medium text-base mr-auto">
              Exam Name: {QuizData.title}
            </h2>
            <div className="text-base mr-auto">
              Question <span>{questionId + 1}</span> of
              <span>{' ' + answerList[section].length}</span>
            </div>
          </div>
          {finished ? renderResult() : renderQuiz()}
          <div className="intro-y mt-5">
            <div className="items-center p-5 border-b border-gray-200">
              <button
                className="button w-30 shadow-md mr-1 mb-2 bg-theme-2 text-blue border border-gray-700"
                onClick={markForReview}
              >
                Mark for review and Next
              </button>
              <button
                className="button w-30 shadow-md mr-1 mb-2 bg-theme-2 text-blue border border-gray-700"
                onClick={() => setSelectedOption('')}
              >
                Clear response
              </button>
              <button
                style={{ float: 'right' }}
                className="button w-30 shadow-md mr-1 mb-2 bg-theme-1 text-white"
                onClick={confirmAnswer}
              >
                Save and next
              </button>
            </div>
          </div>
        </div>
        <button style={{ cursor: 'default' }}>
          {show ? (
            <Icon.ChevronRight
              style={{ cursor: 'pointer' }}
              onClick={() => setShow(!show)}
            />
          ) : (
            <Icon.ChevronLeft
              style={{ cursor: 'pointer' }}
              onClick={() => setShow(!show)}
            />
          )}
        </button>
        {show && (
          <RightPanel
            onClickQuestion={onClickQuestion}
            answerList={answerList[section]}
            markedQuestions={MarkedQuestionIds[section]}
            currentQuestion={questionId}
            section={QuizData.sections[section]}
            submitExam={submitExam}
          />
        )}
      </div>
    </div>
  )
}

export { ExamPage }
