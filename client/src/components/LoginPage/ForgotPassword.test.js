import React from 'react'
import { shallow } from 'enzyme'
import ForgotPassword from './ForgotPassword'

describe('forgot password link', () => {
  it('did not forget password', () => {
    let forgotPassword = false
    const app = shallow(<ForgotPassword forgotPassword={forgotPassword} />)

    expect(
      app.containsMatchingElement(
        <React.Fragment>
          <h4 style={{ cursor: 'pointer' }}>Forgot Password?</h4>
        </React.Fragment>
      )
    ).toEqual(true)
  })

  it('forgot password', () => {
    let forgotPassword = true
    const app = shallow(<ForgotPassword forgotPassword={forgotPassword} />)
    expect(
      app.containsMatchingElement(
        <React.Fragment>
          <h4 style={{ cursor: 'pointer' }}>Show Password Field</h4>
        </React.Fragment>
      )
    ).toEqual(true)
  })
})
