import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authentication } from "./authentication.reducer";
import { courses } from "./course.reducer";
import { dashboard } from "./dashboard.reducer";
import { exams } from "./exam.reducer";
import { examQuestion } from "./examQuestion.reducer";
import { examResults } from "./examResults.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { activity } from "./activity.reducer";
import { instructor } from "./instructor.reducer";

const reducer = combineReducers({
  users,
  alertReducer,
  authentication,
  courses,
  dashboard,
  exams,
  examQuestion,
  examResults,
  registration,
  activity,
  instructor
});

export default reducer;
