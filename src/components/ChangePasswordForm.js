import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { userActions } from '../actions'

function ChangePasswordForm() {
  const [user, setUser] = useState({
    confirmPassword: '',
    oldPassword: '',
    password: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const registering = useSelector((state) => state.registration.registering)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(`%cuser details: ${JSON.stringify(user)}`, 'color:green')
    console.log()

    setSubmitted(true)
    if (user.fullName && user.confirmPassword && user.email && user.password) {
      dispatch(userActions.register(user))
    }
  }

  return (
    <div className="intro-y box lg:mt-5">
      <div className="flex items-center p-5 border-b border-gray-200">
        <h2 className="font-medium text-base mr-auto">Change Password</h2>
      </div>
      <form style={{ margin: 'auto' }} name="form" onSubmit={handleSubmit}>
        <div className="p-5">
          <div>
            <label>Old Password</label>
            <input
              type="password"
              className="input w-full border mt-2"
              placeholder="Input text"
            />
          </div>
          <div className="mt-3">
            <label>New Password</label>
            <input
              type="password"
              className="input w-full border mt-2"
              placeholder="Input text"
            />
          </div>
          <div className="mt-3">
            <label>Confirm New Password</label>
            <input
              type="password"
              className="input w-full border mt-2"
              placeholder="Input text"
            />
          </div>
          <button type="button" className="button bg-theme-1 text-white mt-4">
            Change Password
          </button>
        </div>
      </form>
    </div>
  )
}

export { ChangePasswordForm }
