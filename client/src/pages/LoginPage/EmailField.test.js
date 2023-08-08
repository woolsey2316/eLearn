import React from "react";
import { shallow, configure } from "enzyme";
import EmailField from "./EmailField";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("rendering error message appropriately", () => {
  it("no error message", () => {
    const email = "z3376349@gmail.com";
    const handleChange = null;
    const submitted = true;
    const submittedAndEmailPresent = shallow(
      <EmailField
        submitted={submitted}
        email={email}
        handleChange={handleChange}
      />
    );

    expect(
      submittedAndEmailPresent.containsMatchingElement(
        <input
          style={{ padding: "0.75em 1em" }}
          type="text"
          className="intro-x login__input input input--lg border border-gray-300 block"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      )
    ).toEqual(true);
  });

  it("error message appears", () => {
    const email = "";
    const handleChange = null;
    const noEmail = shallow(
      <EmailField submitted={true} email={email} handleChange={handleChange} />
    );

    expect(
      noEmail.containsMatchingElement(
        <React.Fragment>
          <input
            style={{ padding: "0.75em 1em" }}
            type="text"
            className="intro-x login__input input input--lg border border-gray-300 block"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <h2 className="mt-1 text-theme-6">Email is required</h2>
        </React.Fragment>
      )
    ).toEqual(true);
  });
});
