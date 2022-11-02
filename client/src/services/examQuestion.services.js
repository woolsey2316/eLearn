import { authHeader } from "../helpers";
import { API_URL } from "./index";
import { handleResponse } from "./services-util";
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to user data. CRUD operations
  are performed here, as well as login/register.
*/
export const examQuestionService = { getExamQuestions };

/*
  fetches all questions of an exam
  */
async function getExamQuestions(examId) {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  const response = await fetch(
    `${API_URL}/exams/${examId}/questions`,
    requestOptions
  );
  return handleResponse(response);
}
