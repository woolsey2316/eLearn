import { combineReducers } from "redux";
import { alert } from "./alert.reducer";
import { authentication } from "./authentication.reducer";
import { courses } from "./course.reducer";
import { dashboard } from "./dashboard.reducer";
import { exams } from "./exam.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { activity } from "./activity.reducer";

const reducer = combineReducers({
    alert,
    authentication,
    courses,
    dashboard,
    exams,
    registration,
    users,
    activity
});

export default reducer;