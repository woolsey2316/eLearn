import React from "react";
type Props = {
  course: {
    courseName: string;
    category: string;
  };
  showExams: () => void;
};
function CourseItem({ course, showExams }: Props) {
  return (
    <div className="intro-y col-span-12 md:col-span-6">
      <div className="box">
        <div className="flex flex-col lg:flex-row items-end p-5">
          <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
            <h2 className="font-medium">{course.courseName}</h2>
            <div className="text-gray-600">{`Category: ${course.category}`}</div>
          </div>
          <div className="flex mt-4 lg:mt-0">
            <button
              onClick={showExams}
              className="button button--sm border border-theme-1 text-theme-1 mr-2 align-bottom"
            >
              View Exams
            </button>
            <button className="button button--sm text-white bg-theme-1 mr-2 align-bottom">
              Add Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { CourseItem };
