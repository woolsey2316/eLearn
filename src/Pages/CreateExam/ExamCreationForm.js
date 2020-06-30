import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { userActions } from '../../actions'
import { alertActions } from '../../actions'

import { Alert } from '../../components'

import { history } from '../../helpers'

import * as Icon from 'react-feather'


function ExamCreationForm() {
  const [user, setUser] = useState({
    confirmoption1: '',
    answer: '',
    question: '',
    option1: '',
    option1Colour: '',
    option1Quality: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const registering = useSelector((state) => state.registration.registering)
  const dispatch = useDispatch()
  const alert = useSelector(state => state.alert);

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  function isNotEmpty(field) {
    return field !== ""
  }

  function handleChange(e) {
    const { name, value } = e.target
    setUser((user) => ({
      ...user,
      [name]: value,
    }))
  }
  // dispatch an action to the redux store, updates 'user' object
  function handleSubmit(e) {
    e.preventDefault()
    console.log(`%cuser details: ${JSON.stringify(user)}`, 'color:green')

    setSubmitted(true)
    if (user.question && user.confirmoption1 && user.answer && user.option1) {
      dispatch(userActions.register(user))
    }
  }
  return (
    <form
      style={{ margin: 'auto' }}
      className="validate-form"
      onSubmit={handleSubmit}
    >
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
              name="question"
              className="intro-x login__input input input--lg border border-gray-300 block"
              placeholder="Full Name"
              value={user.firstName}
              onChange={handleChange}
            />
            {submitted && !user.question && (
              <div className="text-theme-6 mt-2">Full Name is required</div>
            )}
            <input
              type="text"
              name="answer"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              style={{ borderColor: isNotEmpty() ? '' : '#D32929' }}
              placeholder="answer"
              value={user.answer}
              onChange={handleChange}
            />
            {(submitted && !user.answer && (
              <div className="text-theme-6 mt-2">answer is required</div>
            )) ||
              (!isNotEmpty() && (
                <label id="answer-error" className="error" htmlFor="answer">
                  Please enter a valid answer
                </label>
              ))}
            <input
              type="option1"
              name="option1"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="option1"
              value={user.option1}
              onChange={handleChange}
            />
            {submitted && !user.option1 && (
              <div className="text-theme-6 mt-2">option1 is required</div>
            )}
            <input
              type="option2"
              name="option2"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="option2"
              value={user.option2}
              onChange={handleChange}
            />
            {submitted && !user.option2 && (
              <div className="text-theme-6 mt-2">option2 is required</div>
            )}
            <input
              type="option3"
              name="option3"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="option3"
              value={user.option3}
              onChange={handleChange}
            />
            {submitted && !user.option3 && (
              <div className="text-theme-6 mt-2">option3 is required</div>
            )}
            <input
              type="option4"
              name="option4"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="option4"
              value={user.option4}
              onChange={handleChange}
            />
            {submitted && !user.option4 && (
              <div className="text-theme-6 mt-2">option4 is required</div>
            )}
            <input
              type="option1"
              name="confirmoption1"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="option1 Confirmation"
              onChange={handleChange}
            />
            {(submitted && !user.option1 && (
              <div className="text-theme-6 mt-2">
                Confirmed option1 is required
              </div>
            )) ||
              (user.option1 !== user.confirmoption1 &&
                user.confirmoption1 && (
                  <div className="text-theme-6 mt-2">
                    option1s do not match
                  </div>
                ))}
          </div>
          <div className="flex flex-col sm:flex-row intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button 
              type="button"
              
              className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
              Save Question
            </button>
            <button
              type="submit"
              to="/login"
              className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"
            >
              Submit Exam
            </button>
          </div>
          {alert.message &&
            <Alert type={alert.type} message={alert.message} />
          }
        </div>
      </div>
    </form>
  )
}
export { ExamCreationForm }