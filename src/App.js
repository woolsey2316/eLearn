import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './assets/sass/app.scss'

import { RegisterPage } from './RegisterPage'
import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage';

import { PrivateRoute } from './components'

// const Register = lazy(() => import("./RegisterPage"));
// const Login = lazy(() => import("./LoginPage"));

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route exact path="/Register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
