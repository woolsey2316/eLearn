import React, { useState } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import './assets/dist/css/app.css'
import './index.css'

import { history } from './helpers/history'

import { RegisterPage } from './RegisterPage'
import { LoginPage } from './LoginPage'
import { Dashboard } from './HomePage'
import { AdminDashboard } from './Pages/AdminDashboard'
import { CreateExam } from './Pages/CreateExam'
import { ChangePassword } from './Pages/profile'
import { Profile } from './Pages'
import { UpdateProfile } from './Pages/profile'
import { ExamResults } from './Pages/ExamResults'
import { ExamPage } from './Pages/Exam'
import { ExamList } from './Pages/ExamList'
import { Courses } from './Pages/Course'
import { MyCourses } from './Pages/MyCourses'
import { CourseRegister } from './Pages/CourseRegister'
import { PageNotFound } from './Pages/NotFound'

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

  const sideMenu = <SideMenu permissions={true} open={openModal} />
  return (
    <Router history={history}>
      <LogoutModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <Switch>
        <PrivateRoute exact path="/dashboard">
          <Dashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/">
          <AdminDashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/home">
          <AdminDashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/create_exam">
          <CreateExam openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/my_courses">
          <MyCourses openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/dashboard">
          <Dashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/profile">
          <Profile openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/courses">
          <Courses openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/CourseRegister">
          <CourseRegister openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/profile/change_password">
          <ChangePassword openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/Profile/update_profile">
          <UpdateProfile openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/grades">
          <ExamResults openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/exams">
          <ExamPage />
        </PrivateRoute>
        <PrivateRoute exact path="/student/exam_list">
          <ExamList openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <Route exact path="/Register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
