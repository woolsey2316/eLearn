import React from 'react'
import { ExamInfo } from '../../types/ExamState';
import { Dropdown } from './DropDown';
interface Props {
  examInfo: ExamInfo;
  setExamInfo: React.Dispatch<React.SetStateAction<ExamInfo>>;
  submitted: boolean;
  handleSectionsChange: (index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  sections: string[];
}
function ExamDetailsForm({
  setExamInfo,
  handleSectionsChange,
  examInfo,
  submitted,
  sections
}: Props) {
  const [open, setOpen] = React.useState(false);
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
      <div>
        <label className="text-gray-700 mt-5">Sections</label>
        {submitted && examInfo.sections.length === 0 && (
          <div className="text-theme-6">Sections are required</div>
        )}
        <Dropdown
          trigger={<button onClick={handleOpen}>Dropdown</button>}
          menu={sections.map((section,index) => <button onClick={(e) => handleSectionsChange(index, e)}>{section}</button>)}
          />
      </div>
    </div>
  );
}

export default ExamDetailsForm;

