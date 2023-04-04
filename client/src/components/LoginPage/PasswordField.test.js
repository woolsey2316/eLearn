import React from "react";
import { shallow } from "enzyme";
import PasswordField from "./PasswordField";

describe("password input field", () => {
  it('password is actually the text "null"', () => {
    let password = "null";
    let submitted = true;
    let forgotPassword = false;
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
    let password = "";
    let submitted = true;
    let forgotPassword = false;
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
