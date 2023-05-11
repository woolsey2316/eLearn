import React from "react";
import { SectionTab } from "./SectionTab";
import { CountdownTimer } from "../../utils/CountdownTimer";
import { TimeLeft } from "../../types/Utils";

type Props = {
  section: number;
  clicked: (sectionId: number) => void;
  sections: string[] | undefined;
  timeLeft: Partial<TimeLeft>;
  setTimeLeft: React.Dispatch<React.SetStateAction<Partial<TimeLeft>>>;
};
function CourseSection({
  section,
  clicked,
  sections = [],
  timeLeft,
  setTimeLeft}: Props) {
  return (
    <div className="ml-5">
      <div className="flex justify-between items-end">
        <div className="font-medium items-center pt-2 pb-1">Section</div>
        <CountdownTimer
          setTimeLeft={setTimeLeft}
          timeLeft={timeLeft}
        />
      </div>
      <div className="flex flex-wrap items-center">
        {sections.map((elem, index) => (
          <SectionTab
            onClick={clicked}
            currentSection={section}
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
