import React, { useState } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import './assets/dist/css/app.css'
import './index.css'

import { history } from './helpers/history'

import { RegisterPage } from './RegisterPage'
import { LoginPage } from './LoginPage'
import { Dashboard } from './HomePage'
import { ChangePassword } from './Pages/profile'
import { Profile } from './Pages'
import { UpdateProfile } from './Pages/profile'
import { ExamResults } from './Pages/ExamResults'
import { ExamPage } from './Pages/Exam'
import { ExamList } from './Pages/ExamList'
import { Courses } from './Pages/Course'
import { CourseRegister } from './Pages/CourseRegister'

import { SideMenu } from './components'

import { LogoutModal } from './components'

import { PrivateRoute } from './components'

// const Register = lazy(() => import("./RegisterPage"));
// const Login = lazy(() => import("./LoginPage"));

function App() {
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    console.log('open modal request')
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const sideMenu = <SideMenu open={openModal} />
  return (
    <Router history={history}>
      <LogoutModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <Switch>
        <PrivateRoute exact path="/">
          <Dashboard sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/">
          <Dashboard sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/profile">
          <Profile sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/courses">
          <Courses sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/CourseRegister">
          <CourseRegister sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/profile/change_password">
          <ChangePassword sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/Profile/update_profile">
          <UpdateProfile sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/grades">
          <ExamResults sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/exams">
          <ExamPage />
        </PrivateRoute>
        <PrivateRoute exact path="/student/exam_list">
          <ExamList sideMenu={sideMenu} />
        </PrivateRoute>
        <Route exact path="/Register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
