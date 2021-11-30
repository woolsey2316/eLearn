import React from 'react'
import { shallow } from 'enzyme'
import EmailField from './EmailField'

describe('forgot password link', () => {
  it('did not forget password', () => {
    let forgotPassword = false
    let submitted = true
    let email = 'z3376349@gmail.com'
    const app = shallow(<EmailField forgotPassword={forgotPassword} />)

    expect(
      app.containsMatchingElement(
        <React.Fragment>
          <input
            style={{ padding: '0.75em 1em' }}
            type="text"
            className="intro-x login__input input input--lg border border-gray-300 block"
            placeholder="Email"
            name="email"
            value={email}
          />
          {submitted && !email && (
            <h2 className="mt-1 text-theme-6">Email is required</h2>
          )}
        </React.Fragment>
      )
    ).toEqual(true)
  })

  it('forgot password', () => {
    let forgotPassword = true
    let submitted = true
    let email = true
    const app = shallow(<EmailField forgotPassword={forgotPassword} />)
    expect(
      app.containsMatchingElement(
        <React.Fragment>
          <input
            style={{ padding: '0.75em 1em' }}
            type="text"
            className="intro-x login__input input input--lg border border-gray-300 block"
            placeholder="Email"
            name="email"
            value={email}
          />
          {submitted && !email && (
            <h2 className="mt-1 text-theme-6">Email is required</h2>
          )}
        </React.Fragment>
      )
    ).toEqual(true)
  })
})
