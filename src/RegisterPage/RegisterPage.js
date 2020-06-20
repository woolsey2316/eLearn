import React from 'react'

import RegisterForm from './RegisterForm'
import { RegisterInfo } from './RegisterInfo'

function RegisterPage() {
  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <RegisterInfo />
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export { RegisterPage }
