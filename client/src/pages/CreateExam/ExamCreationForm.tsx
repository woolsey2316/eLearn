import React, { useState, useEffect, SetStateAction } from "react";

import { Alert } from "../../components";
import { InputField } from "./InputField";

import { AnswerField } from "./AnswerField";
import { QuestionNumberField } from "./QuestionNumberField";
import { QuestionField } from "./QuestionField";
import { Quiz } from "../../types/ExamState";

import { Delta as TypeDelta, Sources } from 'quill';

import { useAppDispatch } from "../../hooks/hooks";
import { alertActions } from "../../actions/alert.actions";
interface Props {
  quiz: Quiz;
  setQuestion: React.Dispatch<React.SetStateAction<Quiz>>;
  updateQuestionList: (quiz: Quiz) => void;
  questionList: Quiz[];
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;

}
function ExamCreationForm({
  quiz,
  setQuestion,
  updateQuestionList,
  questionList,
  success,
  setSuccess,
  submitted,
  setSubmitted
}: Props) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (questionList) {
      setQuestion((quiz) => ({
        ...quiz,
        number: questionList.length + 1,
      }));
    } else {
      setQuestion((quiz) => ({
        ...quiz,
        number: 1,
      }));
    }
  }, [questionList, setQuestion]);

  function answerAmongOptions() {
    return (
      quiz.answer === quiz.possibleAnswers[0] ||
      quiz.answer === quiz.possibleAnswers[1] ||
      quiz.answer === quiz.possibleAnswers[2] ||
      quiz.answer === quiz.possibleAnswers[3]
    );
  }

  function allFieldsExist() {
    return (
      quiz.question &&
      quiz.answer &&
      quiz.possibleAnswers[0] &&
      quiz.possibleAnswers[1] &&
      quiz.possibleAnswers[2] &&
      quiz.possibleAnswers[3]
    );
  }

  function eachAnswerUnique() {
    return (
      quiz.possibleAnswers[0] !== quiz.possibleAnswers[1] &&
      quiz.possibleAnswers[0] !== quiz.possibleAnswers[2] &&
      quiz.possibleAnswers[0] !== quiz.possibleAnswers[3] &&
      quiz.possibleAnswers[1] !== quiz.possibleAnswers[2] &&
      quiz.possibleAnswers[1] !== quiz.possibleAnswers[3] &&
      quiz.possibleAnswers[2] !== quiz.possibleAnswers[3]
    );
  }

  function handleQuestionChange(
    _content: string,
    _delta: TypeDelta,
    _source: Sources,
    editor: any
  ): void {
    setQuestion((quiz) => ({
      ...quiz,
      question: editor.getHTML(),
    }));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setQuestion((quiz) => ({
      ...quiz,
      [name]: value,
    }));
  }

  function changeAnswerOption(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    console.log(`changing index ${name}, to value ${value}`);
    setQuestion((quiz) => ({
      ...quiz,
      option: [
        ...quiz.possibleAnswers.slice(0, parseInt(name, 10)),
        value,
        ...quiz.possibleAnswers.slice(parseInt(name, 10) + 1),
      ],
    }));
  }

  function handleValidation() {
    if (!allFieldsExist()) {
      dispatch(alertActions.error("Empty fields present"))
      setSuccess(false);
    } else if (!eachAnswerUnique()) {
      dispatch(alertActions.error("Answer options must be unique"))
      setSuccess(false);
    } else if (!answerAmongOptions()) {
      dispatch(alertActions.error("Correct answer is not among 4 options"))
      setSuccess(false);
    }
  }
  // dispatch an action to the redux store, updates 'user' object
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`%cquiz details: ${JSON.stringify(quiz)}`, "color:green");
    setSubmitted(true);
    if (allFieldsExist() && answerAmongOptions() && eachAnswerUnique()) {
      updateQuestionList(quiz);
      setQuestion({
        question: "",
        answer: "",
        possibleAnswers: ["", "", "", ""],
        number: questionList?.length ? questionList.length + 1 : 1
      });
      dispatch(alertActions.success("Question was successfully added to test!"));
      setSuccess(true);
      setSubmitted(false);
    } else {
      handleValidation();
    }
  }
  return (
    <form
      style={{ margin: "auto" }}
      className="validate-form"
      onSubmit={handleSubmit}
    >
      <div className="">
        <div className="bg-white px-5 py-8 xl:p-0 rounded-md xl:shadow-none w-full xl:w-auto">
          <div>
            <h2 className="font-medium text-base mx-auto mb-2">
              Question {quiz && quiz.number} of {questionList?.length ? questionList.length + 1 : 1}
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
              {new Array(4).fill("").map((elem, i) => (
                <InputField
                  key={i}
                  changeAnswerOption={changeAnswerOption}
                  submitted={submitted}
                  quiz={quiz}
                  number={i + 1}
                />
              ))}
            </div>
          </div>
          <div className="mt-5 xl:mt-8 text-center xl:text-left">
            <button
              type="submit"
              className="button xl:mr-3 border border-theme-1 text-theme-1"
            >
              Save and Next Question
            </button>
            <Alert/>
          </div>
        </div>
      </div>
    </form>
  );
}
export { ExamCreationForm };
