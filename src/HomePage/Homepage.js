import React, { userEffect, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { userActions } from '../actions'

function HomePage() {
  const access_token = useSelector(state => state.authentication.user.token.access_token)
  const refresh_token = useSelector(state => state.authentication.user.token.refresh_token)
  const userInfo = useSelector(state => state)

  console.log({userInfo})
  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>{'Acess token: ' + access_token}!</h1>
      <h1>{'refresh_token: ' + refresh_token}!</h1>
      <h1>{localStorage.getItem('user')}</h1>
      <p>
        <Link to="/login">Logout</Link>
      </p>
  </div>
  )
}

export { HomePage }