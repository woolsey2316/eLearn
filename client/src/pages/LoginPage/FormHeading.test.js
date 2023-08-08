import React from "react";
import FormHeading from "./FormHeading";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("Login form", () => {
  it("contains a form heading", () => {
    const app = shallow(<FormHeading />);
    expect(
      app.containsMatchingElement(
        <React.Fragment>
          <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
            Sign In
          </h2>
          <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
            A few more clicks to sign in to your account. Manage all your online
            exams in one place
          </div>
        </React.Fragment>
      )
    ).toEqual(true);
  });
});
