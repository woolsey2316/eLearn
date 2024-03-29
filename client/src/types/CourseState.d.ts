import { ExamQuestions } from './ExamState'
export type CourseDTO = {
  category: string;
  expires: Date;
  id: string;
  name: string;
  instructor: string;
  status: boolean;
};
type Course = {
  name: string;
  examResults: Array<>;
  subscriber: Array<string>;
  exams: Array<>;
  _id: string;
  courseName: string;
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
  instructorId: string;
  activeExams: ExamQuestions[];
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
