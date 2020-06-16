import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm'
import { RegisterInfo } from '../RegisterPage'

import { userActions } from '../actions';

function LoginPage() {
  // reset login status
  const dispatch = useDispatch();
  /*
    useEffect(() => { 
      dispatch(userActions.logout());
    }, []);
  */
  return (
      <div className="login">
        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">
                <RegisterInfo/>
                <LoginForm/>
            </div>
        </div>
        {/*
        <script src="dist/js/app.js"></script>
        */}
    </div>
  );
}

export { LoginPage }