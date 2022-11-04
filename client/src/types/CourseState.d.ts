type Course = {
  examResults: Array<>;
  subscriber: Array<string>;
  exams: Array<>;
  _id: string;
  courseName: string;
  instructor: string;
  category: string;
  expires: Date;
};
type CourseType = {
  _id: string;
  courseName: string;
  category: string;
  instructor: string;
  activeExams: boolean;
};

type CourseState = {
  courseRegistering: boolean;
  userCourseList: {
    courseList: Array<CourseType>;
  };
  courseList: Array<Course>;
  registerOutcome: boolean;
};

export const CourseState;
export const CourseType;
