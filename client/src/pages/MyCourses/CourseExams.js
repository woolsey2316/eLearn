import React from "react";

import { examData } from "../ExamList";
import { ExamItem } from "./ExamItem";

function CourseExams({ chosenCourse }) {
  examData.sort((a, b) => a - b);

  const ExamList = [];
  ExamList.push(
    // A white box that contains all exams for the month
    examData.map((exam) => <ExamItem key={exam.id} exam={exam} />)
  );
  return (
    <div className="box p-5">
      <h2 className="p-5 font-medium text-center text-lg">
        {" "}
        {chosenCourse
          ? `Exam results for ${chosenCourse}`
          : `Select a course to see its exams`}
      </h2>
      {ExamList}
    </div>
  );
}
export { CourseExams };
