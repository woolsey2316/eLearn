import { authHeader, getUserId } from "../helpers";
import { API_URL } from "./index";
import { handleResponse } from "./services-util";

import { ExamAnswerSheet } from "../types/ExamState";
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to user data. CRUD operations
  are performed here, as well as login/register.
*/
export const examService = {
  getAllExams,
  submitExam,
};

/*
  fetches all exams a User has registered to
  */
async function getAllExams() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  const response = await fetch(
    `${API_URL}/courses/exams/`,
    requestOptions
  );
  return handleResponse(response);
}

/*
  submit question of an exam a User has attended
  */
async function submitExam(exam: ExamAnswerSheet) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(exam),
  };
  const userId = getUserId();
  const response = await fetch(
    `${API_URL}/users/${userId}/exams/${exam.examId}/submit`,
    requestOptions
  );
  return handleResponse(response);
}
