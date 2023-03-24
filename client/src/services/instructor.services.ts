import { authHeader, getUserId } from "../helpers";
import { API_URL } from "./index";
import { handleResponse } from "./services-util";

export const instructorService = {
  getInstructorById,
};

/*
  fetches all exams a User has registered to in a particular course
  */
  async function getInstructorById(instructorId: string) {
    const requestOptions = {
      method: "GET",
      headers: { ...authHeader(), "Content-Type": "application/json" },
    };
    const response = await fetch(
      `${API_URL}/instructors/${instructorId}`,
      requestOptions
    );
    return handleResponse(response);
  }