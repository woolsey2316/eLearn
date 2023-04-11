import React from "react";
import MainButtons from "./MainButtons";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("Main Buttons change when user forgets password", () => {
  it("user forgot password", () => {
    const app = shallow(<MainButtons forgotPassword={true} />);
    expect(
      app.containsMatchingElement(
        <div className="flex flex-col xl:flex-row intro-x mt-5 xl:mt-8 text-center xl:text-left">
          <button
            type="submit"
            className="button button--lg w-full xl:w-40 text-white bg-theme-1 xl:mr-3"
          >
            Request Password
          </button>
          <a
            href="/signup"
            className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"
          >
            Sign up
          </a>
        </div>
      )
    ).toEqual(true);
  });

  it("user did not forget password", () => {
    const app = shallow(<MainButtons forgotPassword={false} />);
    expect(
      app.containsMatchingElement(
        <div className="flex flex-col xl:flex-row intro-x mt-5 xl:mt-8 text-center xl:text-left">
          <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
            Login
          </button>
          <a
            href="/signup"
            className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"
          >
            Sign up
          </a>
        </div>
      )
    ).toEqual(true);
  });
});
