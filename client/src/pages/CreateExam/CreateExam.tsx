import React, { useState } from "react";

import { MobileMenu } from "../../components";
import { TopBar } from "../../components";

import { ExamCreationForm } from "./ExamCreationForm";
import { PreviewQuestion } from "./PreviewQuestion";

import { QuestionList } from "./QuestionList";

import { ToastAlert } from "./ToastAlert";

import ExamDetailsForm from './ExamDetailsForm'

import { useAppSelector } from "../../hooks/hooks";
import { ExamInfo, Quiz } from "../../types/ExamState";

import { contains } from '../../utils/utils'
import { SectionButton } from "./SectionButton";
import { useCreateExamMutation } from "../../features/exam/exam-slice-api";
import PageWithSideMenu from "../PageWithSideMenu/PageWithSideMenu";

const sections = ["Chemistry", "Physics", "Mathematics", "Latin"]

function CreateExam() {
  const [createExam] = useCreateExamMutation()
  const [submitted, setSubmitted] = useState(false);
  const [examInfo, setExamInfo] = useState<ExamInfo>({
    examName: "",
    courseName: "",
    due: new Date(),
    courseId: "",
    description: "",
    sections: [],
    duration: 0,
  })

  const [questionList, updateList] = useState<Quiz[][]>([[]]);
  const [sectionId, setSectionId] = useState(0)
  const [quiz, setQuestion] = useState({
    question: "",
    answer: "",
    possibleAnswers: ["", "", "", ""],
    number: 1,
  });
  const [success, setSuccess] = useState(false);

  const alert = useAppSelector((state) => state.alert);

  function handleCourseChange(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { value } = e.currentTarget
    // console.log(e)
    setExamInfo(examInfo => {
      return {
        ...examInfo,
        courseName: value
      }
    })
  }

  function removeSection(section: string, e: React.MouseEvent<SVGElement, MouseEvent>) {
    const sections = examInfo.sections.filter(section_ => section !== section_)
    setExamInfo((examInfo) => {
      // add section to array
      return {
        ...examInfo,
        sections: sections
      }
    })
  }

  function addSection(index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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

  function setDate(date: Date) {
    setExamInfo(examInfo => {
      return {
        ...examInfo,
        due: date
      }
    })
  }

  function removeItem(id: number) {
    updateList([
      ...questionList.slice(0, sectionId),
      questionList[sectionId].filter((item, index) => index !== id),
      ...questionList.slice(sectionId+1, examInfo.sections.length)
    ]);
  }

  function updateQuestionList(question: Quiz) {
    if (questionList[sectionId]) {
      updateList((questionList) => [
        ...questionList.slice(0,sectionId),
        [
        ...questionList[sectionId]?.slice(0, question.number - 1),
        question,
        ...questionList[sectionId]?.slice(question.number, questionList.length)
        ],
        ...questionList.slice(sectionId+1, examInfo.sections.length)
      ]);
    } else {
      updateList((questionList) => [
        ...questionList.slice(0,sectionId),
        [ question ],
        ...questionList.slice(sectionId+1, examInfo.sections.length)
      ]);
    }
  }

  function submitExam() {
    createExam({
      ...examInfo,
      questionList: questionList
    })
  }

  return (
    <PageWithSideMenu>
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-5">
        <div className="col-span-12">
          <ExamDetailsForm
            addSection={addSection}
            setExamInfo={setExamInfo}
            removeSection={removeSection}
            handleCourseChange={handleCourseChange}
            examInfo={examInfo}
            submitted={submitted}
            sections={sections}
            setDate={setDate}
            />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="box lg:mt-5">
            <div className="flex items-center p-5 border-b border-gray-200">
              <h2 className="font-medium text-base mr-auto">
                {examInfo.examName}, {examInfo.courseName}
              </h2>
            </div>
            {/* exam section button, toggle section button to view questions underneath chosen section */}
            <div className="p-5">
              {examInfo.sections.map((section, index) =>
                <SectionButton
                  index={index}
                  currentSection={sectionId}
                  name={section}
                  onClick={setSectionId}/>
                )}
            </div>
            <div className="p-5">
              <ExamCreationForm
                setQuestion={setQuestion}
                quiz={quiz}
                updateQuestionList={updateQuestionList}
                questionList={questionList[sectionId]}
                success={success}
                setSuccess={setSuccess}
                submitted={submitted}
                setSubmitted={setSubmitted}
              />
              <div className="flex justify-start mt-4">
                <button
                  type="button"
                  onClick={submitExam}
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
          sectionId={sectionId}
          setQuestion={setQuestion}
        />
        {success && <ToastAlert message={alert.message ?? ""} />}
      </div>
    </PageWithSideMenu>
  );
}

export { CreateExam };
