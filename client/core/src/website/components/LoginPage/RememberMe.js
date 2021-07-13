import React from 'react'

const RememberMe = ({ forgotPassword, onChangeCheckbox, isChecked }) => {
  return (
    <div className="flex items-center mr-auto">
      {!forgotPassword && (
        <div>
          <input
            type="checkbox"
            className="input border mr-2"
            id="remember-me"
            onChange={onChangeCheckbox}
            checked={isChecked}
          />
          <label className="cursor-pointer select-none" htmlFor="remember-me">
            Remember me
          </label>
        </div>
      )}
    </div>
  )
}

export default RememberMe
