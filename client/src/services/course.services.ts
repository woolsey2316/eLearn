import { authHeader, getUserId } from "../helpers";
import { CourseDTO } from "../types/CourseState";
import { API_URL } from "./index";
import { handleResponse } from "./services-util";
/*
  The services layer handles all http communication with the back-end apis.
  This section of the services layer relates to course data.
*/
export const courseService = {
  getAllCourses,
  getAllUserCourses,
  register,
};

/*
  fetches all courses a User has registered to
  */
async function getAllUserCourses() {
  const requestOptions: RequestInit = {
    method: "GET",
    headers: { ...authHeader() },
  };

  const response = await fetch(`${API_URL}/courses/user`, requestOptions);
  return handleResponse(response);
}

/*
  fetches all courses available on Elearn
  */
async function getAllCourses(page: number, size: number) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", mode: "no-cors" },
  };

  const response = await fetch(
    `${API_URL}/courses?page=${page}&size=${size}`,
    requestOptions
  );
  return handleResponse(response);
}

/*
  User registers for a course
  */
async function register(courseDTO: CourseDTO) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(courseDTO),
  };
  const userID = getUserId();

  const response = await fetch(
    `${API_URL}/courses/${courseDTO.id}/${userID}`,
    requestOptions
  );
  const { alreadyRegistered } = await handleResponse(response);

  return alreadyRegistered;
}
