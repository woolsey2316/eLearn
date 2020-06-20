import React, { useState } from 'react'
import logo from './logo.svg'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import './assets/dist/css/app.css'
import './index.css'

import * as Icon from 'react-feather'

import { history } from './helpers/history'

import { RegisterPage } from './RegisterPage'
import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage'
import { ChangePassword } from './Pages/sidemenu'
import { Profile } from './Pages'
import { UpdateProfile } from './Pages/profile'
import { ExamResults } from './Pages/ExamResults'
import { ExamPage } from './Pages/Exam'
import { ExamList } from './Pages/ExamList'

import { PrivateRoute } from './components'

import Modal from 'react-modal'

// const Register = lazy(() => import("./RegisterPage"));
// const Login = lazy(() => import("./LoginPage"));

function App() {
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    console.log('open modal request')
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Router history={history}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{ overlay: { zIndex: 9999 }, content : {top:"10em", bottom:"15em", right:"25em", left:"25em"} }}
      >
        <div className="modal__content">
          <div className="p-5 text-center">
            <Icon.LogOut className="w-16 h-16 text-theme-6 mx-auto mt-3" />
            <div className="text-3xl mt-5">
              Are you sure you want to Logout?
            </div>
            <div className="text-gray-600 mt-2"></div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={closeModal}
              data-dismiss="modal"
              className="button w-24 border text-gray-700 mr-1"
            >
              Cancel
            </button>
            <a href="/login" class="button button--lg w-24 bg-theme-6 text-white">
              Log Out
            </a>
          </div>
        </div>
      </Modal>
      <Switch>
        <PrivateRoute exact path="/student/">
          <HomePage open={openModal} />
        </PrivateRoute>
        <PrivateRoute exact path="/student/Profile" component={Profile} />
        <PrivateRoute
          exact
          path="/student/Profile/ChangePassword"
          component={ChangePassword}
        />
        <PrivateRoute
          exact
          path="/student/Profile/UpdateProfile"
          component={UpdateProfile}
        />
        <PrivateRoute exact path="/student/grades" component={ExamResults} />
        <PrivateRoute exact path="/student/exams" component={ExamPage} />
        <PrivateRoute exact path="/student/exam_list" component={ExamList} />
        <Route exact path="/Register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
