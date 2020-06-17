import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { userActions } from '../actions'

import zxcvbn from 'zxcvbn'

import '../assets/dist/css/app.css'

export default () => {
  const [user, setUser] = useState({
    confirmPassword: '',
    email: '',
    fullName: '',
    password: '',
    passwordColour: '',
    passwordQuality: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const registering = useSelector((state) => state.registration.registering)
  const dispatch = useDispatch()

  // Always logs out current user before loading signup form page
  /*
useEffect(() => {
  dispatch(userActions.logout());
}, [dispatch]);
*/function evaluatePasswordScore() {
    return zxcvbn(user.password).score 
  }
  function passwordStrengthColour() {
    let score = evaluatePasswordScore()
    if (score >= 3) 
      return "theme-9"
    else if (score > 1 && score < 3)
      return "theme-11"
    else
      return "theme-6"
  }
  function passwordQuality() {
    let score = evaluatePasswordScore()
    switch (score) {
      case(4) : return "Very Strong password"
      case(3) : return "Strong password"
      case(2) : return "Moderate password"
      case(1) : return "Weak password"
      case(0) : return "Very Weak password"
      default : return "password"
    }
  }
  function isValidEmail() {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) || user.email===""
  }
  function handleChange(e) {
    const { name, value } = e.target
    setUser((user) => ({ ...user, [name]: value, passwordQuality: passwordQuality(), passwordColour: passwordStrengthColour()}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(`%cuser details: ${JSON.stringify(user)}`, 'color:green')

    setSubmitted(true)
    if (user.fullName && user.confirmPassword && user.email && user.password) {
      dispatch(userActions.register(user))
    }
  }
  return (
    <form style={{ margin: 'auto' }} class="validate-form" onSubmit={handleSubmit}>
      <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
          <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
            Sign Up
          </h2>
          <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
            A few more clicks to sign in to your account. Manage all your
            e-commerce accounts in one place
          </div>
          <div className="intro-x mt-8">
            <input
              type="text"
              name="fullName"
              className="intro-x login__input input input--lg border border-gray-300 block"
              placeholder="Full Name"
              value={user.firstName}
              onChange={handleChange}
            />
            {submitted && !user.fullName && (
              <div className="text-theme-6 mt-2">Full Name is required</div>
            )}
            <input
              type="text"
              name="email"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{borderColor: isValidEmail() ?  "" : "#D32929"}}
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
            {submitted && !user.email && (
              <div className="text-theme-6 mt-2">Email is required</div>
            ) || !isValidEmail() && <label id="email-error" class="error" htmlFor="email">Please enter a valid email address</label>}
            <input
              type="password"
              name="password"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
            {submitted && !user.password && (
              <div className="text-theme-6 mt-2">Password is required</div>
            )}
            <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
              <div className={`col-span-3 h-full rounded bg-gray-200 bg-${user.passwordColour}`}></div>
              <div className={`col-span-3 h-full rounded bg-gray-200 bg-${user.passwordColour}`}></div>
              <div className={`col-span-3 h-full rounded bg-gray-200 bg-${user.passwordColour}`}></div>
              <div className={`col-span-3 h-full rounded bg-gray-200 bg-${user.passwordColour}`}></div>
            </div>
            <label className={`text-${user.passwordColour} mt-2`}>{ passwordQuality() }</label>
            <a
              href=""
              className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm"
            >
              What is a secure password?
            </a>
            <input
              type="password"
              name="confirmPassword"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="Password Confirmation"
              onChange={handleChange}
            />
            {submitted && !user.password && (
              <div className="text-theme-6 mt-2">Confirmed Password is required</div>
            ) || user.password !== user.confirmPassword && <div className="text-theme-6 mt-2">passwords do not match</div>}
          </div>
          <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
              Register
            </button>
            <Link
              to="/login"
              className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </form>
  )
}
