import React from "react";
import RememberMe from "./RememberMe";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("remmeber me checkbox", () => {
  it("rememebr me checkbox shows", () => {
    const isChecked = true;
    const forgotPassword = false;
    const app = shallow(
      <RememberMe forgotPassword={forgotPassword} rememberMe={isChecked} />
    );
    expect(
      app.containsMatchingElement(
        <div className="flex items-center mr-auto">
          <div>
            <input
              type="checkbox"
              className="input border mr-2"
              id="remember-me"
              checked={isChecked}
            />
            <label className="cursor-pointer select-none" htmlFor="remember-me">
              Remember me
            </label>
          </div>
        </div>
      )
    ).toEqual(true);
  });
});
