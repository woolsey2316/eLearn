import React from "react";
import PasswordField from "./PasswordField";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("password input field", () => {
  it('password is actually the text "null"', () => {
    const password = "null";
    const submitted = true;
    const forgotPassword = false;
    const app = shallow(
      <PasswordField
        forgotPassword={forgotPassword}
        password={password}
        submitted={submitted}
      />
    );

    expect(
      app.containsMatchingElement(
        <React.Fragment>
          <input
            style={{ padding: "0.75em 1em" }}
            type="password"
            className="intro-x login__input input input--lg border border-gray-300 block mt-4"
            placeholder="Password"
            name="password"
            value={password}
          />
        </React.Fragment>
      )
    ).toEqual(true);
  });

  it("password is empty", () => {
    const password = "";
    const submitted = true;
    const forgotPassword = false;
    const app = shallow(
      <PasswordField
        forgotPassword={forgotPassword}
        password={password}
        submitted={submitted}
      />
    );
    expect(
      app.containsMatchingElement(
        <React.Fragment>
          {!forgotPassword && (
            <input
              style={{ padding: "0.75em 1em" }}
              type="password"
              className="intro-x login__input input input--lg border border-gray-300 block mt-4"
              placeholder="Password"
              name="password"
              value={password}
            />
          )}
          <h2 className="mt-1 text-theme-6">Password is required</h2>
        </React.Fragment>
      )
    ).toEqual(true);
  });
});
