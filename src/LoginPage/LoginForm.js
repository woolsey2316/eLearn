import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { userActions } from '../actions'

export default () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    //remember me option
    isChecked: false,
  })
  const [forgotPassword, setForgotPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { email, password, isChecked } = inputs
  const dispatch = useDispatch()

  function handleChange(e) {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }

  function onChangeCheckbox(event) {
    setInputs({
      isChecked: event.target.checked
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(`%cemail : ${email}, password: ${password}`,'color: blue,font-weight:bold')

    setSubmitted(true)
    if (email && password) {
      // Dispatches a login action, if successful redirects current URL
      // to Home page.
      dispatch(userActions.login(email, password))
    } else if (email && !password) {
      dispatch(userActions.resetPassword(email, password))
    }
    if (isChecked && email !== "") {
      localStorage.email = email
      localStorage.password = password
      localStorage.checkbox = isChecked
    }
  }
  return (
    <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
      <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
        <form style={{ display: 'block' }} name="form" onSubmit={handleSubmit}>
          <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
            Sign In
          </h2>
          <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
            A few more clicks to sign in to your account. Manage all your
            e-commerce accounts in one place
          </div>
          <div className="intro-x mt-8">
            <input
              style={{ padding: '0.75em 1em' }}
              type="text"
              className="intro-x login__input input input--lg border border-gray-300 block"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {submitted && !email && (
              <div className="invalid-feedback">Email is required</div>
            )}
            {!forgotPassword && 
            <input
              style={{ padding: '0.75em 1em' }}
              type="password"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            }
            {submitted && !password && (
              <div className="invalid-feedback">Password is required</div>
            )}
          </div>
          <div className="intro-x flex text-gray-700 text-xs sm:text-sm mt-4">
            <div className="flex items-center mr-auto">
            {!forgotPassword && 
              <div>
                <input
                  type="checkbox"
                  className="input border mr-2"
                  id="remember-me"
                  onChange={onChangeCheckbox}
                  checked={isChecked}
                />
                <label
                  className="cursor-pointer select-none"
                  htmlFor="remember-me"
                >
                  Remember me
                </label>
              </div>
            }
            </div>
            <h4 style={{cursor:"pointer"}} onClick={() => setForgotPassword(!forgotPassword)}>Forgot Password?</h4>
          </div>
          <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            {!forgotPassword && <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
              Login
            </button>
            }
            {forgotPassword && <button className="button button--lg w-full xl:w-40 text-white bg-theme-1 xl:mr-3">
              Request Password
            </button>
            }
            <Link
              to="/Register"
              className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
