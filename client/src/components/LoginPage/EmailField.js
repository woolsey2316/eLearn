import React from 'react'

const EmailField = ({ submitted, email, handleChange }) => {
  return (
    <React.Fragment>
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
        <h2 className="mt-1 text-theme-6">Email is required</h2>
      )}
    </React.Fragment>
  )
}

export default EmailField
