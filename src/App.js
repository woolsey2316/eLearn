import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './assets/dist/css/app.css'
import './index.css'

import { history } from './helpers/history'

import { RegisterPage } from './RegisterPage'
import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage';

import { PrivateRoute } from './components'

// const Register = lazy(() => import("./RegisterPage"));
// const Login = lazy(() => import("./LoginPage"));

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage}/>
        <Route exact path="/Register" component={RegisterPage}/>
        <Route exact path="/login" component={LoginPage}/>
      </Switch>
    </Router>
  );
}

export default App;
