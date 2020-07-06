import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../actions'
import { alertActions } from '../actions'

import { Alert } from '../components'

import { history } from '../helpers'

import zxcvbn from 'zxcvbn'

import '../assets/dist/css/app.css'

export default () => {
  const [user, setUser] = useState({
    address1: '',
    area: '',
    className: '',
    district: '',
    email: '',
    mobile: '',
    fullName: '',
    password: '',
    pincode: '',
    school: '',
    state: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [passwordAdvice, showPasswordAdvice] = useState(false)
  const registering = useSelector((state) => state.registration.registering)
  const dispatch = useDispatch()
  const alert = useSelector((state) => state.alert)

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear())
    })
  }, [])

  // Always logs out current user before loading signup form page
  useEffect(() => {
    dispatch(userActions.logout())
  }, [])
  // password strength 0 - weakest, 4 strongest
  function evaluatePasswordScore() {
    return zxcvbn(user.password).score
  }
  // green is best, orange moderate, red is weak
  function passwordStrengthColour() {
    var score = evaluatePasswordScore()
    if (score >= 3) return 'theme-9'
    else if (score > 1 && score < 3) return 'theme-11'
    else return 'theme-6'
  }
  function passwordQuality() {
    var score = evaluatePasswordScore()
    // empty password does not get assessed
    score = user.password === '' ? -1 : score
    switch (score) {
      case 4:
        return 'Very Strong password'
      case 3:
        return 'Strong password'
      case 2:
        return 'Moderate password'
      case 1:
        return 'Weak password'
      case 0:
        return 'Very Weak password'
      default:
        return ''
    }
  }
  function isValidEmail() {
    return (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email) ||
      user.email === ''
    )
  }
  function handleChange(e) {
    const { name, value } = e.target
    setUser((user) => ({
      ...user,
      [name]: value,
    }))
  }

  function allFieldsExist() {
    return (
      user.address1 &&
      user.area &&
      user.className &&
      user.district &&
      user.email &&
      user.mobile &&
      user.fullName &&
      user.password &&
      user.pincode &&
      user.school &&
      user.state
    )
  }
  // dispatch an action to the redux store, updates 'user' object
  function handleSubmit() {
    console.log(`%cuser details: ${JSON.stringify(user)}`, 'color:green')

    setSubmitted(true)
    if (allFieldsExist()) {
      dispatch(userActions.register(user))
    }
  }
  return (
    <form name="form" onSubmit={handleSubmit}>
      <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div className="my-auto mx-auto bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
          <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left mt-5">
            Sign Up
          </h2>
          <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
            A few more clicks to register for your account. Manage all your
            online exams in one place
          </div>
          <div className="intro-x mt-8">
            <input
              type="text"
              name="email"
              className="intro-x login__input input input--lg border border-gray-300 block"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
            {submitted && !user.email && (
              <div className="text-theme-6 mt-2">Email is required</div>
            )}
            <input
              type="text"
              name="fullName"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="Full Name"
              value={user.fullName}
              onChange={handleChange}
            />
            {submitted && !user.fullName && (
              <div className="text-theme-6 mt-2">Full Name is required</div>
            )}
            <input
              type="text"
              name="address1"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="Address"
              value={user.address1}
              onChange={handleChange}
            />
            {submitted && !user.address1 && (
              <div className="text-theme-6 mt-2">Address is required</div>
            )}
            <input
              type="text"
              name="district"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="District"
              value={user.district}
              onChange={handleChange}
            />
            {submitted && !user.district && (
              <div className="text-theme-6 mt-2">District is required</div>
            )}
            <input
              type="text"
              name="area"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="Area"
              value={user.area}
              onChange={handleChange}
            />
            {submitted && !user.area && (
              <div className="text-theme-6 mt-2">Address is required</div>
            )}
            <input
              type="text"
              name="state"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="State"
              value={user.state}
              onChange={handleChange}
            />
            {submitted && !user.state && (
              <div className="text-theme-6 mt-2">Address is required</div>
            )}
            <input
              type="text"
              name="className"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="Class Name"
              value={user.className}
              onChange={handleChange}
            />
            {submitted && !user.className && (
              <div className="text-theme-6 mt-2">className is required</div>
            )}
            <input
              type="text"
              name="mobile"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="Mobile"
              value={user.mobile}
              onChange={handleChange}
            />
            {submitted && !user.mobile && (
              <div className="text-theme-6 mt-2">Mobile is required</div>
            )}
            <input
              type="text"
              name="pincode"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="6-digit Pincode"
              value={user.pincode}
              onChange={handleChange}
            />
            {submitted && !user.pincode && (
              <div className="text-theme-6 mt-2">Pincode is required</div>
            )}
            <input
              type="text"
              name="school"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="School"
              value={user.school}
              onChange={handleChange}
            />
            {submitted && !user.school && (
              <div className="text-theme-6 mt-2">School is required</div>
            )}
            <input
              type="password"
              name="password"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
            {submitted && !user.password && (
              <div className="text-theme-6 mt-2">Password is required</div>
            )}
            <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
              <div
                className={
                  evaluatePasswordScore() > 0
                    ? `col-span-3 h-full rounded bg-${passwordStrengthColour()}`
                    : `col-span-3 h-full rounded bg-gray-200`
                }
              ></div>
              <div
                className={
                  evaluatePasswordScore() > 1
                    ? `col-span-3 h-full rounded bg-${passwordStrengthColour()}`
                    : `col-span-3 h-full rounded bg-gray-200`
                }
              ></div>
              <div
                className={
                  evaluatePasswordScore() > 2
                    ? `col-span-3 h-full rounded bg-${passwordStrengthColour()}`
                    : `col-span-3 h-full rounded bg-gray-200`
                }
              ></div>
              <div
                className={
                  evaluatePasswordScore() > 3
                    ? `col-span-3 h-full rounded bg-${passwordStrengthColour()}`
                    : `col-span-3 h-full rounded bg-gray-200`
                }
              ></div>
            </div>
            <label className={`text-${passwordStrengthColour()} mt-2`}>
              {passwordQuality()}
            </label>
            <div className="flex">
              <h4
                onClick={() => showPasswordAdvice(!passwordAdvice)}
                style={{ cursor: 'pointer' }}
                className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm"
              >
                What is a secure password?
              </h4>
            </div>
            {passwordAdvice && (
              <div className="ml-4">
                <h3 className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">
                  - Make it long
                </h3>
                <h3 className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">
                  - Use a mix of characters
                </h3>
                <h3 className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">
                  - Avoid common substitutions
                </h3>
                <h3 className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">
                  - Don’t use memorable keyboard paths
                </h3>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:block intro-x mt-5 xl:mt-8 text-center xl:text-left mb-20">
            <a
              href="/login"
              className="button button--lg text-gray-700 border border-gray-300 mb-3 sm:mr-3 xl:mt-0 sm:float-left"
            >
              Switch to Sign In
            </a>
            <button
              type="submit"
              className="button button--lg sm:w-32 text-white bg-theme-1 xl:mr-3 py-0 sm:float-right"
            >
              Register
            </button>
          </div>
          {alert.message && <Alert type={alert.type} message={alert.message} />}
        </div>
      </div>
    </form>
  )
}
