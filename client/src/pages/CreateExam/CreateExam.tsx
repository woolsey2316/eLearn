import React, { useState } from "react";

import { MobileMenu } from "../../components";
import { TopBar } from "../../components";

import { ExamCreationForm } from "./ExamCreationForm";
import { PreviewQuestion } from "./PreviewQuestion";

import { QuestionList } from "./QuestionList";

import { ToastAlert } from "./ToastAlert";

import ExamDetailsForm from './ExamDetailsForm'

import { useAppSelector } from "../../hooks/hooks";
import { PageComponentProps } from "../../types/PageComponentProps";
import { ExamInfo } from "../../types/ExamState";

import { contains } from '../../utils/utils'

const sections = ["Chemistry", "Physics", "Mathematics", "Latin"]

function CreateExam(props: PageComponentProps) {
  const [submitted, setSubmitted] = useState(false);
  const [examInfo, setExamInfo] = useState<ExamInfo>({
    examName: "",
    due: new Date(),
    courseId: "",
    description: "",
    sections: [],
    duration: 60,
  })

  function handleSectionsChange(index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (contains(sections[index], examInfo.sections)) {
      // section is already added
      return
    }
    setExamInfo((examInfo) => {
      // add section to array
      return {
        ...examInfo,
        sections: [...examInfo.sections, sections[index] ]
      }
    })
  }

  const [questionList, updateList] = useState<typeof quiz[]>([]);
  const [quiz, setQuestion] = useState({
    question: "",
    answer: "",
    option: ["", "", "", ""],
    number: 1,
  });
  const [success, setSuccess] = useState(false);

  const alert = useAppSelector((state) => state.alert);

  function removeItem(id: number) {
    updateList(questionList.filter((item, index) => index !== id));
  }

  function updateQuestionList(question: typeof quiz) {
    updateList((questionList) => [
      ...questionList.slice(0, question.number - 1),
      question,
      ...questionList.slice(question.number, questionList.length),
    ]);
  }

  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-5">
            <div className="col-span-12">
              <ExamDetailsForm
                handleSectionsChange={handleSectionsChange}
                setExamInfo={setExamInfo}
                examInfo={examInfo}
                submitted={submitted}
                sections={sections}
                />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="intro-y box lg:mt-5">
                <div className="flex items-center p-5 border-b border-gray-200">
                  <h2 className="font-medium text-base mr-auto">
                    {examInfo.examName}, course
                  </h2>
                </div>
                <div className="p-5">
                  <ExamCreationForm
                    setQuestion={setQuestion}
                    quiz={quiz}
                    updateQuestionList={updateQuestionList}
                    questionList={questionList}
                    success={success}
                    setSuccess={setSuccess}
                    submitted={submitted}
                    setSubmitted={setSubmitted}
                  />
                  <div className="flex justify-start mt-4">
                    <button
                      type="submit"
                      className="button bg-theme-1 text-white"
                    >
                      Submit Exam
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <PreviewQuestion quiz={quiz} />
            <QuestionList
              removeItem={removeItem}
              questionList={questionList}
              setQuestion={setQuestion}
            />
            {success && <ToastAlert message={alert.message ?? ""} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export { CreateExam };
