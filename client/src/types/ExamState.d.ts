type ExamAnswerSheet = {
  answerList: Array<Array<IntRange<0, 3>>>;
  examId: string;
  userId: string;
};
type ExamState = {
  submittingExam: boolean;
  examList: Array<any>;
};
type QuestionAndAnswerList = {
  question: string;
  possibleAnswers: Array<string>;
};
type QuizQuestions = Array<Array<QuestionAndAnswerList>>;
type ExamQuestions = {
  quizQuestions: QuizQuestions;
  _id: string;
  courseId: string;
  instructor: string;
  courseName: string;
  examName: string;
  due: string;
};
type ExamResult = {
  examName: string;
  userId: string;
  score: number;
  total: number;
  weight: number;
};
type ExamResultsList = Array<ExamResult>;
type ExamAverage = {
  exams: ExamResultsList;
  average: {
    [key: sstring]: number;
  };
};
export const ExamState;
export const ExamAnswerSheet;
export const ExamQuestions;
export const ExamAverage;
export const QuizQuestions;
