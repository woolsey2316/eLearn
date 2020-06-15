import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { userActions } from '../actions';

import '../assets/sass/app.scss'

export default () => {
  const [user, setUser] = useState({
    confirmPassword: '',
    email: '',
    fullName: '',
    password: ''
});
const [submitted, setSubmitted] = useState(false);
const registering = useSelector(state => state.registration.registering);
const dispatch = useDispatch();

// Always logs out current user before loading signup form page
useEffect(() => {
  dispatch(userActions.logout());
}, [dispatch]);

function handleChange(e) {
  const { name, value } = e.target;
  console.log(e.target.value)
  console.log('name: ' + name)
  console.log('value: ' + value)
  setUser(user => ({ ...user, [name]: value }));
}

function handleSubmit(e) {
  e.preventDefault();
  console.log({user})

  setSubmitted(true);
  if (user.fullName && user.lastName && user.email && user.password) {
    dispatch(userActions.register(user));
  }
}
  return (
    <form name="form" onSubmit={handleSubmit}>
      <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
          <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
            Sign Up
          </h2>
          <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
          <div className="intro-x mt-8">
            <input type="text" name="fullName" className="intro-x login__input input input--lg border border-gray-300 block" placeholder="Full Name" value={user.firstName} onChange={handleChange}/>
            {submitted && !user.fullName &&
              <div className="invalid-feedback">Full Name is required</div>
            }
            <input type="text" name="email" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Email" value={user.email} onChange={handleChange}/>
            {submitted && !user.email &&
              <div className="invalid-feedback">Email is required</div>
            }
            <input type="password" name="password" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password" value={user.password} onChange={handleChange}/>
            {submitted && !user.password &&
              <div className="invalid-feedback">Password is required</div>
            }
            <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
              <div className="col-span-3 h-full rounded bg-theme-9"></div>
              <div className="col-span-3 h-full rounded bg-theme-9"></div>
              <div className="col-span-3 h-full rounded bg-theme-9"></div>
              <div className="col-span-3 h-full rounded bg-gray-200"></div>
            </div>
            <a href="" className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">What is a secure password?</a> 
            <input type="text" name="confirmPassword" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password Confirmation" onChange={handleChange}/>
            </div>
            <div className="intro-x flex items-center text-gray-700 mt-4 text-xs sm:text-sm">
              <input type="checkbox" className="input border mr-2" id="remember-me"/>
              <label className="cursor-pointer select-none" htmlFor="remember-me">I agree to the Envato</label>
              <a className="text-theme-1 ml-1" href="">Privacy Policy</a>. 
            </div>
            <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">Register</button>
              <Link to="/login" className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0">Sign in</Link>
            </div>
          </div>
        </div>
      </form>
  )
}