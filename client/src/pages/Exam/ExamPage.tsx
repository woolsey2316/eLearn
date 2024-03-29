import React, {
  useState,
  useEffect,
  useCallback,
  ChangeEventHandler,
} from "react";
import Quiz from "./Quiz";
import SectionCompleteModal from "./SectionCompleteModal";
import { CourseSection } from "./CourseSection";
import { RightPanel } from "./RightPanel";
import { calculateTimeLeft } from "../../utils/CountdownTimer";
import * as Icon from "react-feather";
import { SubmitModal } from "../../components/modal";

import { useParams } from "react-router-dom";

import { getUserId } from "../../helpers";
import { QuizParams, QuizQuestions } from "../../types/ExamState";
import { useGetExamQuestionsQuery } from "../../features/exam/exam-slice-api";

function initialiseQuestionsArray(quizQuestions: QuizQuestions = [[{
  question: 'loading...',
  possibleAnswers: ['loading','loading','loading','loading']
}]]) {
  // [
  //   [0,1,2,3],
  //   [0,1,2,3,4],
  //   [0,1,2]
  // ]
  return Array(quizQuestions.length)
    .fill([])
    .map((_, index) =>
      Array(quizQuestions[index].length)
        .fill(null)
        .map((_, i) => i)
    );
}

function initialiseAnswersList(quizQuestions: QuizQuestions = [[{
  question: 'loading...',
  possibleAnswers: ['loading','loading','loading','loading']
}]]) {
  // [
  //   [-1,-1,-1,-1],
  //   [-1,-1,-1,-1,-1],
  //   [-1,-1,-1]
  // ]
  return Array(quizQuestions.length)
    .fill([])
    .map((_, index) => Array(quizQuestions[index].length).fill(-1));
}
function ExamPage() {
  const { exam_id } = useParams<QuizParams>();

  const {data: examInfo} = useGetExamQuestionsQuery(exam_id)

  useEffect(() => {
    if (examInfo && examInfo.quizQuestions) {
      setAnswerList(initialiseAnswersList(examInfo.quizQuestions));
      setMarkedQuestionIds(initialiseQuestionsArray(examInfo.quizQuestions));
    }
  }, [examInfo?.quizQuestions]);

  const [questionId, setQuestionId] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);
  // 2-D array
  // dim1 -> section eg. science, chemistry
  // dim2 -> question number
  // value -> answer -1 -> not answered, 0,1,2,3 -> a,b,c,d
  const [answerList, setAnswerList] = useState(
    initialiseAnswersList(examInfo?.quizQuestions)
  );
  // 2-D array
  // dim1 -> section eg. science, chemistry
  // dim2 -> question number
  // value -> question number
  const [MarkedQuestionIds, setMarkedQuestionIds] = useState(
    initialiseQuestionsArray(examInfo?.quizQuestions)
  );
  const [userAnsweredAllQs, setUserAnsweredAllQs] = useState(false);
  const [section, setActive] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const [showSubmitModal, setShowSubmitModal] = React.useState(false);

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(new Date().addHours(1))
  );

  // React.useEffect(() => {
  //   // exam time ran out
  //   if (Object.keys(timeLeft).length === 0) submitExam();
  // }, [timeLeft]);

  function submitExam() {
    console.log({ ...answerList, userId: getUserId(), examId: exam_id });
    setShowSubmitModal(true);
    return;
  }

  function closeModal() {
    setUserAnsweredAllQs(false);
  }

  const findSavedAnswers = useCallback(
    (qId: number) => {
      // default value of answerList[i] = ''
      setSelectedOption(answerList[section][qId]);
    },
    [answerList, section]
  );

  const loadNextQuestionIfAny = useCallback(() => {
    if (MarkedQuestionIds[section].length > 0) {
      setQuestionId(MarkedQuestionIds[section][0]);
      findSavedAnswers(MarkedQuestionIds[section][0]);
    } else {
      setUserAnsweredAllQs(true);
      setQuestionId(0);
      findSavedAnswers(0);
    }
  }, [MarkedQuestionIds, findSavedAnswers, section]);

  React.useEffect(() => {
    loadNextQuestionIfAny();
  }, [loadNextQuestionIfAny]);

  function setSection(sectionId: number) {
    setActive(sectionId);
    console.log(sectionId);
  }

  function onClickQuestion(qid: number) {
    loadQuestion(qid);
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedOption(parseInt(event.target.value));
    console.log(parseInt(event.target.value));
  };

  function confirmAnswer() {
    console.log("confirmed answer: " + selectedOption);
    // don't load next question if user did not select an answer to current question!
    if (selectedOption !== -1) {
      setUserAnswer();
      removeMarkFromCurrentQuestion();
    }
  }

  function loadQuestion(qId: number) {
    setQuestionId(qId);
    findSavedAnswers(qId);
  }

  // selectedOption is added to answerList, this confirms the answer
  function setUserAnswer() {
    const newAnswerList = Object.assign([], answerList[section], {
      [questionId]: selectedOption,
    });
    setAnswerList(
      Object.assign([[]], answerList, { [section]: newAnswerList })
    );
  }

  function removeMarkFromCurrentQuestion() {
    const index = MarkedQuestionIds[section].indexOf(questionId);
    const removeCurrentQuestion = [
      ...MarkedQuestionIds[section].slice(0, index),
      ...MarkedQuestionIds[section].slice(index + 1),
    ];
    setMarkedQuestionIds(
      Object.assign([[]], MarkedQuestionIds, {
        [section]: removeCurrentQuestion,
      })
    );
  }

  function markQuestion() {
    // perhaps question is already marked for review
    const alreadyMarked = MarkedQuestionIds[section].filter(
      (elem) => questionId === elem
    );
    if (!alreadyMarked.length) {
      setMarkedQuestionIds([[...MarkedQuestionIds[section], questionId]]);
    } else {
      sendQuestionToEnd();
    }
  }

  function sendQuestionToEnd() {
    const curr = MarkedQuestionIds[section].indexOf(questionId);
    const pushToEnd = [
      ...MarkedQuestionIds[section].slice(0, curr),
      ...MarkedQuestionIds[section].slice(curr + 1),
      questionId,
    ];
    setMarkedQuestionIds(
      Object.assign([[]], MarkedQuestionIds, { [section]: pushToEnd })
    );
  }

  function markForReview() {
    setUserAnswer();
    markQuestion();
  }

  function renderQuiz() {
    return (
      <Quiz
        selectedOption={selectedOption}
        answerOptions={examInfo?.quizQuestions[section][questionId].possibleAnswers}
        question={examInfo?.quizQuestions[section][questionId].question}
        getUserAnswer={handleChange}
      />
    );
  }

  function showSectionCompleteModal() {
    return (
      <SectionCompleteModal modalIsOpen={userAnsweredAllQs} closeModal={closeModal} />
    );
  }

  return (
    <div className="content rounded-none p-2" data-qa="protected-page">
      <div className="box flex justify-between">
        <div className="flex flex-col flex-grow">
          {showSubmitModal && (
            <SubmitModal
              modalIsOpen={showSubmitModal}
              closeModal={closeModal}
            ></SubmitModal>
          )}
          <CourseSection
            section={section}
            clicked={setSection}
            sections={examInfo?.sections}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
          />
          <div className="items-center p-5 border-b border-gray-200">
            <h2 className="font-medium text-base mr-auto">
              Exam Name: {examInfo?.examName}
            </h2>
            <div className="text-base mr-auto">
              Question <span>{questionId + 1}</span> of
              <span>{" " + answerList[section].length}</span>
            </div>
          </div>
          {userAnsweredAllQs ? showSectionCompleteModal() : renderQuiz()}
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
                onClick={() => setSelectedOption(-1)}
              >
                Clear response
              </button>
              <button
                style={{ float: "right" }}
                className="button w-30 shadow-md mr-1 mb-2 bg-theme-1 text-white border border-theme-1"
                onClick={confirmAnswer}
              >
                Save and next
              </button>
            </div>
          </div>
        </div>
        <button
          className={show ? "side-menu side-menu--active" : "side-menu"}
          style={{ cursor: "default" }}
        >
          {show ? (
            <Icon.ChevronRight
              className="h-8 w-8"
              style={{ cursor: "pointer" }}
              onClick={() => setShow(!show)}
            />
          ) : (
            <Icon.ChevronLeft
              className="h-8 w-8"
              style={{ cursor: "pointer" }}
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
            section={examInfo?.sections[section]}
            submitExam={submitExam}
          />
        )}
      </div>
    </div>
  );
}

export { ExamPage };