import { combineReducers } from 'redux'
import { authentication } from './authentication.reducer'
import { registration } from './registration.reducer'
import { courseList } from './course.reducer'
import { alert } from './alert.reducer'
import { users } from './users.reducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  courseList,
  users,
  alert
})

export default rootReducer
