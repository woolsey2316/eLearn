import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LoginPage } from './LoginPage'
import { useSelector } from 'react-redux'
/* 
  url paths are protected by redirecting the user to the /login page if
  the user is not logged in. A user is determined to be logged in if there 
  is a user object in local storage. It is possible to manually add a user object
  using browser dev tools, however this fake user would not be able to fetch
  data from the server api because a valid jwt token is required.
*/

export const PrivateRoute = ({ children: Children, ...rest }) => {
  const loggedIn = useSelector((state) => state.authentication?.loggedIn)
  console.log("logged in? " + loggedIn)
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          Children
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
            component={LoginPage}
          />
        )
      }
    />
  )
  }
