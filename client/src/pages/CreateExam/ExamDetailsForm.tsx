import React, { useEffect } from 'react'
import { ExamInfo } from '../../types/ExamState';
import { Dropdown } from './DropDown';
import * as Icon from "react-feather";
import PillButton from '../../components/PillButton';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { courseActions } from '../../actions';
import { DateTimePicker } from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
interface Props {
  examInfo: ExamInfo;
  setExamInfo: React.Dispatch<React.SetStateAction<ExamInfo>>;
  submitted: boolean;
  addSection: (index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleCourseChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  removeSection:  (section:string, e: React.MouseEvent<SVGElement, MouseEvent>) => void
  sections: string[];
  setDate: (due: Date) => void;
}
function ExamDetailsForm({
  setExamInfo,
  addSection,
  handleCourseChange,
  removeSection,
  examInfo,
  submitted,
  sections,
  setDate
}: Props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const courses = useAppSelector((state) => state.courses.userCourseList);

  useEffect(() => {
    dispatch(courseActions.getAllUserCourses());
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setExamInfo((examInfo) => ({
      ...examInfo,
      [name]: value,
    }));
  }

  function handleOpen(event: React.MouseEvent<HTMLButtonElement>): void {
    setOpen(open => !open)
  }

  return (
    <div className="intro-y box p-5 lg:mt-5">
      <div>
        <label className="text-gray-700 mt-5">Exam Name</label>
        {submitted && examInfo.examName === "" && (
          <div className="text-theme-6">Exam name is required</div>
        )}
        <input
          type="text"
          name="examName"
          className={
            "intro-x login__input rounded-full input input--lg border border-gray-300 block mb-2 mt-1 w-full" +
            (submitted && examInfo.examName === "" ? " border-theme-6" : "")
          }
          value={examInfo.examName ?? ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-gray-700 mt-5">Description</label>
        {submitted && examInfo.description === "" && (
          <div className="text-theme-6">description is required</div>
        )}
        <input
          type="text"
          name="description"
          className={
            "intro-x login__input rounded-full input input--lg border border-gray-300 block mb-2 mt-1 w-full" +
            (submitted && examInfo.description === "" ? " border-theme-6" : "")
          }
          value={examInfo.description ?? ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-gray-700 mt-5">Duration</label>
        {submitted && examInfo.duration === 0 && (
          <div className="text-theme-6">Duration is required</div>
        )}
        <input
          type="text"
          name="duration"
          className={
            "intro-x login__input rounded-full input input--lg border border-gray-300 block mb-2 mt-1 w-full" +
            (submitted && examInfo.duration === 0 ? " border-theme-6" : "")
          }
          value={examInfo.duration ?? ""}
          onChange={handleChange}
        />
      </div>
      {/* sections dropdown that allows a teacher to choose which sections the test contains */}
      <div>
        <label className="text-gray-700 mt-5">Sections</label>
        {submitted && examInfo.sections.length === 0 && (
          <div className="text-theme-6">Sections are required</div>
        )}
        <Dropdown
          trigger={<button className="p-3" onClick={handleOpen}>Section Name <Icon.ChevronDown className="inline-block h-4 w-4 mb-0.5"/></button>}
          menu={sections.map((section,index) => <button className="p-2 w-full text-left" onClick={(e) => addSection(index, e)}>{section}</button>)}
          />
        <div>
          {examInfo.sections.map((section, index) => <PillButton key={index} removeSection={removeSection}>{section}</PillButton>)}
        </div>
      </div>
      {/* the course the test belongs to */}
      <div>
        <label className="text-gray-700 mt-5">Course</label>
        {submitted && examInfo.courseName !== "" && (
          <div className="text-theme-6">Course is required</div>
        )}
        {courses &&
        <Dropdown
          trigger={
            <button className="p-3" onClick={handleOpen}>
              {examInfo.courseName ? examInfo.courseName : "Course Name"}
              <Icon.ChevronDown className="inline-block h-4 w-4 mb-0.5"/>
            </button>
          }
          menu={courses.map((course) =>
            <button className="p-2 w-full text-left" onClick={handleCourseChange} value={course.courseName}>
              {course.courseName}
            </button>
            )}
          />
        }
      </div>
      <div className="mt-3">
        <label>due</label>
        <div>
          <DateTimePicker className="" onChange={(date) => date ? setDate(date) : ""} value={examInfo.due} />
        </div>
      </div>
    </div>
  );
}

export default ExamDetailsForm;

