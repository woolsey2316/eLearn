/*
  A custom history object instead of the one built into React Router, so 
  we can redirect users from outside React components, eg. from the user 
  actions after successful login or registration.
*/
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()
