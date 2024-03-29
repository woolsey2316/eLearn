import React, { useCallback, useEffect } from "react";
import { MobileMenu } from "../../components";
import { TopBar } from "../../components";
import { ExamCard } from "./ExamCard";
import { MonthContainer } from "./MonthContainer";

import { sameMonth } from "../../utils/DateUtils";
import { useGetUserExamsQuery } from "../../features/exam/exam-slice-api";
import PageWithSideMenu from "../PageWithSideMenu/PageWithSideMenu";

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
function ExamList() {
  const { data: examData } = useGetUserExamsQuery()
  console.log(examData)
  if (examData === undefined || examData.length === 0) return null;

  const exams = [...examData]
  exams.sort((a, b) => Date.parse(a.due) - Date.parse(b.due));
  const months = new Set(
    examData.map((elem) => monthNames[new Date(elem.due).getMonth()])
  );
  const ExamList = [];
  for (const month of monthNames) {
    ExamList.push(
      // A white box that contains all exams for the month
      <MonthContainer month={month} key={month}>
        {examData
          .filter((exam) => sameMonth(monthNames, exam.due, month))
          // Remove last years exams so they don't appear in current month
          // but allow January, February... of next year to show
          // .filter(
          //   (exam) =>
          //     new Date(exam.due).getFullYear() >= new Date().getFullYear()
          // )
          .map((exam, index) => (
            <ExamCard key={index} exam={exam} />
          ))}
      </MonthContainer>
    );
  }
  return (
    <PageWithSideMenu>
      <h2 className="intro-y text-lg font-medium mt-10"> Exams </h2>
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-12 lg:col-span-9 xxl:col-span-10">
          <div className="intro-y inbox">{ExamList}</div>
        </div>
      </div>
    </PageWithSideMenu>
  );
}

export { ExamList };
