import React from 'react'
import { Route, Redirect } from 'react-router-dom'

/* 
  url paths are protected by redirecting the user to the /login page if
  the user is not logged in. A user is determined to be logged in if there 
  is a user object in local storage. It is possible to manually add a user object
  using browser dev tools, however this fake user would not be able to fetch
  data from the server api bacuase a jwt token is necessary.
*/
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />

  )} />
)