import React from "react";
import { DateIcon } from "../ExamList";
import * as Icon from "react-feather";
type Props = {
  exam: {
    due: string;
    duration: number;
    sections: number;
    examName: string;
    description: string;
  };
};
function ExamItem({ exam }: Props) {
  const [description, show] = React.useState(false);
  console.table({ exam });
  return (
    <div className="mb-5">
      <div className="intro-x flex items-center rounded bg-gray-200">
        <DateIcon due={exam.due} />
        <div className=" inbox__item--active inline-block sm:block text-gray-700">
          <div className="flex px-5 py-1">
            <h2 className="text-xl mt-2 font-medium leading-none">
              {exam.examName}
            </h2>
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

export { ExamItem };
