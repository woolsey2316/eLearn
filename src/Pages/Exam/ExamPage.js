import React, { useState } from 'react'
import { quizQuestions, QuizData } from './quizQuestions'
import Quiz from './Quiz'
import Result from './Result'
import SectionComplete from './SectionComplete'
import { CourseSection } from './CourseSection'
import { RightPanel } from './RightPanel'
import { QuestionNavigation } from './QuestionNavigation'
import { CountdownTimer, calculateTimeLeft } from './CountdownTimer'

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

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
    <div style={{ margin: '1em' }} className="content">
      <div className="box flex justify-between mt-5">
        <div className="w-full mt-5">
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
            <h2 className="text-base mr-auto">
              Section: {QuizData.sections[section]}
            </h2>
            <h2 className="text-base mr-auto">
              Duration: {QuizData.duration} minutes
            </h2>
          </div>
          {finished ? renderResult() : renderQuiz()}
          <div className="intro-y box mt-5">
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
                className="button w-30 shadow-md mr-1 mb-2 bg-theme-1 text-white"
                onClick={confirmAnswer}
              >
                Next Question
              </button>
            </div>
            <QuestionNavigation
              onClickQuestion={onClickQuestion}
              markedQuestions={MarkedQuestionIds[section]}
              currentQuestion={questionId}
              answerList={answerList[section]}
            />
          </div>
        </div>
        <RightPanel
          onClickQuestion={onClickQuestion}
          answerList={answerList[section]}
          markedQuestions={MarkedQuestionIds[section]}
          currentQuestion={questionId}
        />
      </div>
    </div>
  )
}

export { ExamPage }
