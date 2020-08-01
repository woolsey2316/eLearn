import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import LoginForm from './LoginForm'
import { RegisterInfo } from '../RegisterPage'

import { userActions } from '../actions'

import { withRouter } from 'react-router'

function LoginPage() {
  // reset login status
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.logout())
  }, [])

  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <RegisterInfo />
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

const Login = withRouter(LoginPage) 
export { Login as LoginPage }
