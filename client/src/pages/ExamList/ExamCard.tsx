import React from "react";
import { DateIcon } from "./DateIcon";
import * as Icon from "react-feather";
type ExamCardProps = {
  exam: {
    due: string;
    examName: string;
    duration: number;
    sections: number;
    description: string;
  };
};
function ExamCard({ exam }: ExamCardProps) {
  const [description, show] = React.useState(false);
  console.table({ exam });

  function determineUrgency() {
    if (new Date(exam.due).getMonth() === new Date().getMonth()) {
      if (new Date(exam.due).getDate() - new Date().getDate() < 0) {
        return 4;
      }
      if (new Date(exam.due).getDate() - new Date().getDate() < 2) {
        return 3;
      }
      if (new Date(exam.due).getDate() - new Date().getDate() < 8) {
        return 2;
      }
      if (new Date(exam.due).getDate() - new Date().getDate() < 30) {
        return 1;
      }
    }
  }
  function urgencyDot() {
    if (determineUrgency() === 4) {
      return <div className="mt-3 w-2 h-2 bg-theme-9 rounded-full ml-2"></div>;
    }
    if (determineUrgency() === 3) {
      return <div className="mt-3 w-2 h-2 bg-theme-6 rounded-full ml-2"></div>;
    }
    if (determineUrgency() === 2) {
      return <div className="mt-3 w-2 h-2 bg-theme-11 rounded-full ml-2"></div>;
    }
    if (determineUrgency() === 1) {
      return <div className="mt-3 w-2 h-2 bg-theme-12 rounded-full ml-2"></div>;
    }
  }
  return (
    <div className="inbox__item inbox__item--active mb-4">
      <div className="intro-x flex items-center rounded bg-gray-200 cursor-default">
        <DateIcon due={exam.due} />
        <div className=" inbox__item--active inline-block sm:block text-gray-700">
          <div className="flex px-5 py-1">
            <h2 className="text-xl mt-2 font-medium leading-none">
              {exam.examName}
            </h2>
            {urgencyDot()}
          </div>
          <h2 className="leading-none ml-5 my-2">
            {`exam duration: ${exam.duration} · number of sections: ${exam.sections}`}
          </h2>
          <div className="flex px-5 py-1">
            <h2 className="font-medium text-gray-700 leading-none mr-2">
              {"due: " + exam.due}
            </h2>
            <h2 className="font-medium leading-none">|</h2>
            <div className="flex" onClick={() => show(!description)}>
              <h2 className="font-medium leading-none ml-2 cursor-pointer">
                more info
              </h2>
              {description ? (
                <Icon.ChevronUp
                  size={16}
                  className="font-medium leading-none mx-1 my-auto"
                />
              ) : (
                <Icon.ChevronDown
                  size={16}
                  className="font-medium leading-none mx-1 my-auto"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex ml-auto mr-5">
          <a
            href={`/student/exams/61c1652e14fdaabab1842464`}
            className={
              "button w-24 inline-block my-auto mr-1 bg-theme-1 text-white" +
              (determineUrgency() === 4 ? " invisible" : "")
            }
          >
            Take Exam
          </a>
          <a
            href="/student/grades"
            className="button w-24 inline-block mx-1 border bg-white border border-gray-500 text-gray-700"
          >
            See Result
          </a>
        </div>
      </div>
      {description && (
        <div className="border-t border-gray-400 pl-5 pb-5 mb-2 bg-gray-200">
          <h2 className="font-bold mt-2 mb-1">Exam Description</h2>
          <h2 className="leading-none ml-4 mb-3">{exam.description}</h2>
        </div>
      )}
    </div>
  );
}

export { ExamCard };
