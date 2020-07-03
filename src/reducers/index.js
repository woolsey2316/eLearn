import { combineReducers } from 'redux'
import { authentication } from './authentication.reducer'
import { registration } from './registration.reducer'
import { courses } from './course.reducer'
import { exams } from './exam.reducer'
import { alert } from './alert.reducer'
import { users } from './users.reducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  courses,
  exams,
  users,
  alert,
})

export default rootReducer
