import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { history } from '../helpers'

import { Link } from 'react-router-dom'

import { alertActions } from '../actions'
import { userActions } from '../actions'

import { Alert } from '../components'

function ChangePasswordForm() {
  const [user, setUser] = useState({
    confirmPassword: '',
    email: '',
    password: '',
  })

  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  function handleChange(e) {
    const { name, value } = e.target
    setUser((user) => ({
      ...user,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (user.confirmPassword && user.email && user.password) {
      dispatch(userActions.resetPassword(user))
    }
  }

  return (
    <div className="intro-y box lg:mt-5">
      <div className="flex items-center p-5 border-b border-gray-200">
        <h2 className="font-medium text-base mr-auto">Change Password</h2>
      </div>
      <form style={{ margin: 'auto' }} name="form" onSubmit={handleSubmit} className="validate-form">
        <div className="p-5">
          <div>
            <label>Email</label>
            <input
              type="text"
              className="input w-full border mt-2"
              placeholder=""
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label>New Password</label>
            <input
              type="password"
              className="input w-full border mt-2"
              placeholder=""
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label>Confirm New Password</label>
            <input
              type="password"
              className="input w-full border mt-2"
              placeholder=""
              name="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="button bg-theme-1 text-white mt-4">
            Change Password
          </button>
          {alert.message &&
            <Alert type={alert.type} message={alert.message} />
          }
        </div>
      </form>
    </div>
  )
}

export { ChangePasswordForm }
