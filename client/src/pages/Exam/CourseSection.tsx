import React from "react";
import { SectionTab } from "./SectionTab";
import { CountdownTimer } from "../../utils/CountdownTimer";
import { TimeLeft } from "../../types/Utils";

type Props = {
  section: number;
  clicked: (sectionId: number) => void;
  sections: string[];
  timeLeft: Partial<TimeLeft>;
  setTimeLeft: React.Dispatch<React.SetStateAction<Partial<TimeLeft>>>;
};
function CourseSection(props: Props) {
  return (
    <div className="ml-5">
      <div className="flex justify-between items-end">
        <div className="font-medium items-center pt-2 pb-1">Section</div>
        <CountdownTimer
          setTimeLeft={props.setTimeLeft}
          timeLeft={props.timeLeft}
        />
      </div>
      <div className="flex flex-wrap items-center">
        {props.sections.map((elem, index) => (
          <SectionTab
            onClick={props.clicked}
            currentSection={props.section}
            name={elem}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export { CourseSection };
