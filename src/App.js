import React from 'react'
import logo from './logo.svg'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import './assets/dist/css/app.css'
import './index.css'

import { history } from './helpers/history'

import { RegisterPage } from './RegisterPage'
import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage'
import { ChangePassword } from './Pages/sidemenu'
import { Profile } from './Pages'
import { UpdateProfile } from './Pages/profile'
import { ExamResults } from './Pages/ExamResults'

import { PrivateRoute } from './components'

// const Register = lazy(() => import("./RegisterPage"));
// const Login = lazy(() => import("./LoginPage"));

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/Profile" component={Profile} />
        <PrivateRoute
          exact
          path="/Profile/ChangePassword"
          component={ChangePassword}
        />
        <PrivateRoute
          exact
          path="/Profile/UpdateProfile"
          component={UpdateProfile}
        />
        <PrivateRoute exact path="/Grades" component={ExamResults} />
        <Route exact path="/Register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
