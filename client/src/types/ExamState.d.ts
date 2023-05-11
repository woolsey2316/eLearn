export type ExamAnswerSheet = {
  answerList: Array<Array<IntRange<0, 3>>>;
  examId: string;
  userId: string;
};
export type ExamState = {
  submittingExam: boolean;
  examList: Array<any>;
};
export type QuestionAndAnswerList = {
  question: string;
  possibleAnswers: Array<string>;
};
export type QuizParams = {
  exam_id: string;
};
export type QuizQuestions = Array<Array<QuestionAndAnswerList>>;
export type ExamQuestions = {
  quizQuestions: QuizQuestions;
  _id: string;
  courseId: string;
  instructor: string;
  courseName: string;
  examName: string;
  duration: number;
  description: string;
  sections: string[];
  due: string;
};
export type ExamResult = {
  exam_name: string;
  dueDate: Date;
  rank: number;
  score: number;
  total: number;
  average: number;
  weight: number
};

export type Results = {
  examResults: Array<ExamResult>
  weightedAverage: {userAverage: number; classRank: number}
}

export type ExamInfo = {
  examName: string,
  courseName: string,
  due: Date,
  courseId: string,
  description: string,
  sections: string[],
  duration: number,
}

export type Quiz = {
  question: string,
  answer: string,
  possibleAnswers: string[],
  number: number,
}

export type Exam = {
  examName: string,
  courseName: string,
  due: Date,
  courseId: string,
  description: string,
  sections: string[],
  duration: number,
  questionList: Quiz[][]
}