import React, { useCallback, useEffect } from "react";
import { MobileMenu } from "../../components";
import { TopBar } from "../../components";
import { ExamCard } from "./ExamCard";
import { MonthContainer } from "./MonthContainer";

import { examActions } from "../../actions";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { PageComponentProps } from "../../types/PageComponentProps";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/*
  A web page that shows all exams grouped by month, Users go here to select an exam
  and take it.
*/
function ExamList(props: PageComponentProps) {
  const dispatch = useAppDispatch();
  const examData = useAppSelector((state) => state.exams.examList);

  const fetchExams = useCallback(() => {
    dispatch(examActions.getUserExams());
  }, [dispatch]);

  useEffect(() => {
    fetchExams();
  }, [fetchExams]);

  if (examData === undefined) return null;

  examData.sort((a, b) => Date.parse(a.due) - Date.parse(b.due));
  const months = new Set(
    examData.map((elem) => monthNames[new Date(elem.due).getMonth()])
  );
  const ExamList = [];
  for (const month of months.values()) {
    ExamList.push(
      // A white box that contains all exams for the month
      <MonthContainer month={month} key={month}>
        {examData
          .filter((elem) => monthNames[new Date(elem.due).getMonth()] === month)
          // Remove last years exams so they don't appear in current month
          // but allow January, February... of next year to show
          // .filter(
          //   (elem) =>
          //     new Date(elem.due).getFullYear() >= new Date().getFullYear()
          // )
          .map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
      </MonthContainer>
    );
  }
  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <h2 className="intro-y text-lg font-medium mt-10"> Exams </h2>
          <div className="grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-12 lg:col-span-9 xxl:col-span-10">
              <div className="intro-y inbox">{ExamList}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ExamList };
