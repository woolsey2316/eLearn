import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// midOne html + css template file provided  
import './midone-assets/dist/css/app.css'
import './index.css'

import { history } from './helpers/history'

import { RegisterPage } from './website/components/RegisterPage'
import { LoginPage } from './website/components/LoginPage'
import { Dashboard } from './website/HomePage'
import { AdminDashboard } from './website/pages/AdminDashboard'
import { CreateExam } from './website/pages/CreateExam'
import { ChangePassword, UpdateProfile } from './website/pages/profile'
import { Profile } from './website/pages'
import { ExamResults } from './website/pages/ExamResults'
import { ExamPage } from './website/pages/Exam'
import { ExamList } from './website/pages/ExamList'
import { Courses } from './website/pages/Course'
import { MyCourses } from './website/pages/MyCourses'
import { CourseRegister } from './website/pages/CourseRegister'
import { PageNotFound } from './website/pages/NotFound'

import { SideMenu } from './website/components'

import { LogoutModal } from './website/components'

import { PrivateRoute } from './website/components'

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
    <BrowserRouter history={history}>
      <LogoutModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <Switch>
        <PrivateRoute exact path="/dashboard">
          <Dashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/admin/dashboard">
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
        <PrivateRoute exact path="/">
          <Dashboard openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/profile">
          <Profile openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/courses">
          <Courses openModal={openModal} sideMenu={sideMenu} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/courses/CourseRegister">
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
        <Route exact path="/signup" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
      
    </BrowserRouter>
  )
}

export default App
