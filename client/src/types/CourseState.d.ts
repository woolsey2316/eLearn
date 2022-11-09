export type CourseDTO = {
  category: string;
  expires: Date;
  id: string;
  name: string;
  instructor: string;
  status: boolean;
};
type Course = {
  examResults: Array<>;
  subscriber: Array<string>;
  exams: Array<>;
  _id: string;
  CourseName: string;
  instructor: string;
  category: string;
  expires: Date;
  description: string;
  status: boolean;
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
  userCourseList: Array<CourseType>;
  courseList: Array<Course>;
  registerOutcome: boolean;
  alreadyRegistered: boolean;
  gettingUserCourses: boolean;
};

export const CourseState;
export const CourseType;
export const Course;
