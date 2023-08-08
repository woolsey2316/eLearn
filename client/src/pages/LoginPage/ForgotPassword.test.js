import React from "react";
import ForgotPassword from "./ForgotPassword";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("forgot password link", () => {
  it("did not forget password", () => {
    const forgotPassword = false;
    const app = shallow(<ForgotPassword forgotPassword={forgotPassword} />);

    expect(
      app.containsMatchingElement(
        <React.Fragment>
          <h4 style={{ cursor: "pointer" }}>Forgot Password?</h4>
        </React.Fragment>
      )
    ).toEqual(true);
  });

  it("forgot password", () => {
    const forgotPassword = true;
    const app = shallow(<ForgotPassword forgotPassword={forgotPassword} />);
    expect(
      app.containsMatchingElement(
        <React.Fragment>
          <h4 style={{ cursor: "pointer" }}>Show Password Field</h4>
        </React.Fragment>
      )
    ).toEqual(true);
  });
});
