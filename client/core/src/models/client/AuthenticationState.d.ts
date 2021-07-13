import User from "../User";
export default interface AuthenticationState {
  loggedIn: boolean,
  loggingIn: boolean,
  user: User,
}